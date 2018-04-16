function domSearch(selector,isCaseSensitive) {
    let inputDiv = $('<div>').addClass('add-controls')
        .append($('<label>').text('Enter text: ')
            .append($('<input>')))
        .append($('<a>Add</a>').addClass('button').css('display','inline-block').css('margin-left','20px'));

     let searchDiv = $('<div>').addClass('search-controls')
         .append($('<label>').text('Search:')
             .append($('<input>').on('change',searchLi)));

    let resultDiv = $('<div>').addClass('result-controls')
        .append($('<ul>').addClass('items-list'));
           // .append($('<li>').addClass('list-item'))

    $(selector).addClass('items-control')
        .append($(inputDiv))
        .append($(searchDiv))
        .append($(resultDiv));

    $('div a').on('click',addLi);

    function addLi(){
        let text = $('.add-controls label input').val();
        if(text !== '') {
            $('.items-list')
                .append($('<li>').addClass('list-item')
                    .append($('<a>X</a>').addClass('button').on('click', deleteLi))
                    .append($(`<strong>${text}</strong>`)));
            $('.add-controls label input').val('')
        }
    }

    function deleteLi(){
        $(this).parent().remove()
    }

    function searchLi(){
        let searchText = $(this).val()
        if(isCaseSensitive === false || isCaseSensitive === undefined) {
            searchText = searchText.toLowerCase()
            let allLi = $('.list-item').each((index, el) => {
                $(el).removeAttr('style');
                if (!$(el.lastChild).text().toLowerCase().includes(searchText)) {
                    $(el).css('display', 'none')

                }
            })

        }
        else{
            let allLi = $('.list-item').each((index, el) => {
                $(el).removeAttr('style');
                if (!$(el.lastChild).text().includes(searchText)) {
                    $(el).css('display', 'none')

                }
            })

        }




    }
}




//.add-controls .button
// .append($('<a>X</a>').addClass('button'))
//     .append($('<strong></strong>'))