let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

const mathEnforcer = require('../mathEnforcer').mathEnforcer

describe('Math Enforcer tests',() => {
    describe('addFive tests',() => {
        it('positive number 7 => 12', function () {
            expect(mathEnforcer.addFive(7)).to.equal(12)
        });
        it('negative number -7 => -2', function () {
            expect(mathEnforcer.addFive(-7)).to.equal(-2)
        });
        it('floating point number 3.14 => 8.14', function () {
            expect(mathEnforcer.addFive(3.14)).to.closeTo(8.14,0.01)
        });
        it('with string 7', function () {
            expect(mathEnforcer.addFive('7')).to.be.undefined
        });
        it('with empty', function () {
            expect(mathEnforcer.addFive()).to.be.undefined
        });
    })
    describe('substractTen tests',() => {
        it('positive number 7 => -3', function () {
            expect(mathEnforcer.subtractTen(7)).to.equal(-3)
        });
        it('negative number -7 => -17', function () {
            expect(mathEnforcer.subtractTen(-7)).to.equal(-17)
        });
        it('floating point number 15.14 => 6,86', function () {
            expect(mathEnforcer.subtractTen(15.14)).to.closeTo(5.14,0.01)
        });
        it(`with string 'nakov'`, function () {
            expect(mathEnforcer.subtractTen('nakov')).to.be.undefined
        });
        it('with empty', function () {
            expect(mathEnforcer.subtractTen()).to.be.undefined
        });

    })
    describe('sum tests',() => {
        it('positive numbers 7,12 => 19', function () {
            expect(mathEnforcer.sum(7,12)).to.equal(19)
        });
        it('negative number -7,-3 => -10', function () {
            expect(mathEnforcer.sum(-7,-3)).to.equal(-10)
        });
        it('negative number -7,3 => -10', function () {
            expect(mathEnforcer.sum(-7,3)).to.equal(-4)
        });

        it('floating point number 15.14,-2.78 => 6,86', function () {
            expect(mathEnforcer.sum(15.14,-2.78)).to.closeTo(12.36,0.01)
        });
        it(`with string 'nakov'+5`, function () {
            expect(mathEnforcer.sum('nakov',5)).to.be.undefined
        });
        it(`with string 7+'nakov'`, function () {
            expect(mathEnforcer.sum(7,'nakov')).to.be.undefined
        });

        it('with empty', function () {
            expect(mathEnforcer.sum()).to.be.undefined
        });

    })

})
