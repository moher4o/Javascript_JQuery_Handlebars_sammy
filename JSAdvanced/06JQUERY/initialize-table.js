function initializeTable(){
    $('#createLink').click(createCountry)
    addCountryToTable('Bulgaria','Sofia')
    addCountryToTable('Germany','Berlin')
    addCountryToTable('Russia','Moscow')
    //fixRowLinks()
    function addCountryToTable(country, capital){
        let tr = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>').addClass('action')
                .append($('<a href="#">[Up]</a>').click(moveRowUp).append(' '))
                .append($('<a href="#">[Down]</a>').click(moveRowDown).append(' '))
                .append($('<a href="#">[Delete]</a>').click(deleteRow)))
        $(tr).css('display','none')
        $('#countriesTable').append(tr)
        fixRowLinks()
        tr.fadeIn(1000)
    }
    function createCountry(){
        let country = $('#newCountryText').val()
        let capitol = $('#newCapitalText').val()
        addCountryToTable(country,capitol)
        $('#newCountryText').val('')
        $('#newCapitalText').val('')
    }

    function moveRowUp(){
        let row = $(this).parent().parent()
        if(row.index() > 2) {
            row.fadeOut(() => {
                row.insertBefore(row.prev())
                row.fadeIn()
                fixRowLinks()
            })
        }
    }

    function moveRowDown(){
        let row = $(this).parent().parent()
         if(!row.is(':last-child')) {
             row.fadeOut(100, () => {
                 row.insertAfter(row.next())
                 row.fadeIn(100)
                 fixRowLinks()
             })
         }

    }

    function deleteRow(){
        let row = $(this).parent().parent()
        $(row).remove()
        fixRowLinks()
    }

    function fixRowLinks(){
         $('td.action a').css('display','inline')
         let trArr = $('td.action')
         $(trArr[0].children[0]).css('display','none')
         $(trArr[trArr.length-1].children[1]).css('display','none')
    }
}