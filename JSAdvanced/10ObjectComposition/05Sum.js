
//ЕДИНИЯ НАЧИН: МОДУЛЕ ПАТЕРН
function getModelMODULE() {
    let model = {
        init: function(num1Sel, num2Sel, resultSel) {
            model.num1 = $(num1Sel);
            model.num2 = $(num2Sel);
            model.result = $(resultSel);
        },
        add: () => model.action((a, b) => a + b),
        subtract: () => model.action((a, b) => a - b),
        action: function(operation) {
            let val1 = Number(model.num1.val());
            let val2 = Number(model.num2.val());
            model.result.val(operation(val1, val2));
        }
    };

    return model;
}

//ВТОРИ НАЧИН : ФУНКЦИИ

function getModel() {
    let num1, num2, result;
    function init(num1Sel, num2Sel, resultSel) {
        num1 = $(num1Sel);
        num2 = $(num2Sel);
        result = $(resultSel);
    }
    function add() { action((a, b) => a + b); }
    function subtract() { action((a, b) => a - b); }
    function action(operation) {
        let val1 = Number(num1.val());
        let val2 = Number(num2.val());
        result.val(operation(val1, val2));
    }

    let model = { init, add, subtract };
    return model;
}

$(function() {
    let model = getModel();
    model.init('#num1', '#num2', '#result');
    $('#sumButton').click(model.add);
    $('#subtractButton').click(model.subtract);
});



