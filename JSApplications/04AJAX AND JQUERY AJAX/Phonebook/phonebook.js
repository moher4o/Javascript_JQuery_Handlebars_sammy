function attachEvents() {
    let load = $('#btnLoad')
    load.on('click',loadContacts)

    let create = $('#btnCreate')
    create.on('click',createContact)

   // let baseUrl = 'https://phonebook-82742.firebaseio.com/'
    let baseUrl = 'https://phonebook-nakov.firebaseio.com/phonebook'
    let ul = $('#phonebook')

    function loadContacts() {
        $(ul).empty()
        $.ajax({
            method: 'GET',
            url: baseUrl + '.json',
            success: displayContacts,
            error: displayError
        })
    }

    function displayContacts(data){
        //console.log(data)
        for (let key in data) {
            let li = $('<li>')
            let span = $('<span>')
            span.text(`${data[key]['person']}: ${data[key]['phone']} `)
            span.appendTo(li)
            let delButton = $('<button>Delete</button>')
            delButton.on('click',deleteContact.bind(delButton,key))
            //може и така -> delButton.click(() => deleteContact(key))
            li.appendTo(ul)
            li.append(delButton)
        }
    }

    function displayError(err){
        console.log(err)
    }

    function deleteContact(key){
        $(this).parent().remove()
        $.ajax({
            method: 'DELETE',
            url: baseUrl + '/' + key +'.json',
            error: displayError
        })
    }

    function createContact() {
        let newContact = {
            person: $('#person').val(),
            phone: $('#phone').val()
        }
        $.ajax({
            method: 'POST',
            url: baseUrl + '.json',
            contentType: 'application/Json',  // not nessesary
            data: JSON.stringify(newContact),
            success: loadContacts,
            error: displayError
        })
        $('#person').val('')
        $('#phone').val('')
    }
}
