let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let nuke = function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe('Testing Armagedom', () =>{
    beforeEach(() => {
        document.body.innerHTML = `<body>
            <div id="target">
                <div class="nested target">
                    <p>This is some text</p>
                </div>
                <div class="target">
                    <p>Empty div</p>
                </div>
                <div class="inside">
                    <span class="nested">Some more text</span>
                    <span class="target">Some more text</span>
                </div>
            </div>
            </body>`;
    })

    it('With valid and invalid selector', function () {
        let selector1 = $('#inside')
        let selector2 = 2
        let oldHtml = selector1.html()
        nuke(selector1,selector2)
        expect(selector1.html()).to.be.equal(oldHtml,'Html has changed')
    });
    it('With two equal selectors', function () {
        let selector1 = $('#inside')
        let selector2 = $('#inside')
        let oldHtml = selector1.html()
        nuke(selector1,selector2)
        expect(selector1.html()).to.be.equal(oldHtml,'Html has changed')
    });

})

