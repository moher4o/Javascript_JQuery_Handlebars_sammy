function attachEvents() {
    $('a.button').on('click', btnClick)

    function btnClick(){
        $('a.button.selected').removeClass('selected')
        $(this).addClass('selected')
    }
}
