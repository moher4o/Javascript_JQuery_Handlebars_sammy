function attachEvents() {
    $('#btnLoadTowns').click(showTowns)
    const context = {
        towns: []
    }

    function showTowns() {
        let names = $('#towns').val().split(/,\s*/)
        context.towns = []
        for (let townName of names) {
            context.towns.push({name: townName})
        }

        let root = $('#root')
        root.html('')
        let ul = $('<ul>')
        let townsTemplate = $('#towns-template').html()
        let template = Handlebars.compile(townsTemplate);

        let liHtml = template(context)
        ul.html(liHtml)
        ul.appendTo(root)

    }

}
