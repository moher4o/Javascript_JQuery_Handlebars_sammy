//$(window).on('load', attachEvents)

function attachEvents() {
    let textarea = $('#messages')
    $('#submit').click(sendMessage)
    $('#refresh').click(refreshMessages)
    let baseUrl = 'https://phonebook-82742.firebaseio.com/messenger/'


    function displayMessages(messages){
        let messageString = ''
        for (let key in messages) {
            messageString += `${messages[key]['author']}: ${messages[key]['content']}\n`
        }
        $(textarea).text(messageString)
    }

    function sendMessage() {
        let newMessage = {
            author: $('#author').val(),
            content: $('#content').val(),
            timestamp: Date.now()
        }
        $.ajax({
            method: 'POST',
            url: baseUrl + '.json',
            data: JSON.stringify(newMessage),
            success: refreshMessages,
            error: displayError
        })

    }

    function refreshMessages() {
        $.ajax({
            method: 'GET',
            url: baseUrl + '.json',
            success: displayMessages,
            error: displayError
        })
    }

    function displayError() {
        $(textarea).text("ERROR")
    }
}