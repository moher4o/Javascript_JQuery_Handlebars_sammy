$(() => {
    const templates = {};

    let context = {
        cats: window.cats
    }

    listContent = $('#allCats')
    renderCatTemplate();

    async function renderCatTemplate() {
        const [catSource, listCats] =
            await Promise.all([
            $.get('./templates/cat.html'),
            $.get('./templates/catList.html'),
        ]);

        Handlebars.registerPartial('cat', catSource);
        templates.list = Handlebars.compile(listCats);

        renderList();
    }

    function renderList() {

        listContent.html(templates.list(context));
        attachHandlers();
    }

    function attachHandlers() {
        $('.btn').click((e) => {
            $(e.target).next().attr("hidden", false)
            $(e.target).text('Hide status code')
            $(e.target).click(hideStatusCode)

        });
    }
    
    function hideStatusCode() {
        $(this).next().attr("hidden", true)
        $(this).text('Show status code')
        $(this).click(showStatusCode)
    }

    function showStatusCode(){
        $(this).next().attr("hidden", false)
        $(this).text('Hide status code')
        $(this).click(hideStatusCode)
    }

})
