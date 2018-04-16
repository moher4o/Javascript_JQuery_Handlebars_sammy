function attachEvents() {
    $('ul').on('click','li', selectTown)
    $('#showTownsButton').on('click',showTowns)

    function selectTown(){
        if($(this).attr('data-selected')){
            $(this).removeAttr('data-selected')
            $(this).css('background','')
        }
        else{
            $(this).attr('data-selected', 'true')
            $(this).css('background','#DDD')
        }
    }

    function showTowns(){
        let townsArr = $('#items li[data-selected=true]').toArray().map(li => li.textContent)

        $('#selectedTowns').text(`Selected towns: ${townsArr.join(', ')}`)
    }
}
