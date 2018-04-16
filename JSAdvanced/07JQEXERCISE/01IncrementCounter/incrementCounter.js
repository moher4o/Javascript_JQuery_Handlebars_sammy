function increment(str) {
    let textarea = $('<textarea>').addClass('counter').val('0').attr('disabled','true')
    let incrementBtn = $('<button>').addClass('btn').attr('id','incrementBtn').text('Increment')
    let addBtn = $('<button>').addClass('btn').attr('id','addBtn').text('Add')
    let ulResults = $('<ul>').addClass('results')
    $(str).append(textarea)
        .append(incrementBtn)
        .append(addBtn)
        .append(ulResults)

    $(incrementBtn).on('click',incrementValue)
    $(addBtn).on('click',addLi)

    function incrementValue(){
        let value = Number($(textarea).val())
        value++
        $(textarea).val(value)
    }

    function addLi(){
        let value = $(textarea).val()
        $(ulResults).append($('<li>').text(value))
    }
}
