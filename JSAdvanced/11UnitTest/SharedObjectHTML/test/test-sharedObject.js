let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`;

const sharedObject = require('../shared-object').sharedObject

describe('Shared Object Tests',() => {
    let share
    beforeEach(() => {
        share = sharedObject
    })

    describe('Test Initial values are set to null', () => {
        it('Name should be null', function () {
            expect(share.name).to.be.null
        });
        it('Income should be null', function () {
            expect(share.income).to.be.null
        });

    })
    describe('Change name tests', () => {
        it('Empty string shuld not change name ', function () {
            share.changeName('')
            expect(share.name).to.be.null
        });
        it('Non Empty string shuld change name ', function () {
            share.changeName('nakov')
            expect(share.name).to.be.equal('nakov')
        });

        describe('Check HTML changes', () => {
            it('Empty string shuld not change DOM name ', function () {
                share.changeName('Pesho')
                share.changeName('')
                let nameTxVal = $('#name').val();
                expect(nameTxVal).to.be.equal('Pesho')
            });
            it('Non Empty string shuld change DOM name ', function () {
                share.changeName('nakov')
                let nameTxVal = $('#name').val();
                expect(nameTxVal).to.be.equal('nakov')
            });

        })

    })

    describe('Change input tests', () =>{
        it('Empty string shuld not change income', function () {
            share.changeIncome('')
           expect(share.income).to.be.null
         });
        it('String shuld not change income', function () {
            share.changeIncome('10')
            expect(share.income).to.be.null
        });
        it('Floating point shuld not change income', function () {
            share.changeIncome(2.14)
            expect(share.income).to.be.null
        });
        it('Negative shuld not change income', function () {
            share.changeIncome(-2)
            expect(share.income).to.be.null
        });
        it('Zero not change income', function () {
            share.changeIncome(0)
            expect(share.income).to.be.null
        });
        it('Positive integer should change income', function () {
            share.changeIncome(20)
            expect(share.income).to.be.equal(20)
        });
        it('Empty string shuld not change DOM income', function () {
            share.changeIncome('')
            let incomeVal = $('income')
            expect(incomeVal.val()).to.be.undefined
        });
        it('Positive shuld change DOM income', function () {
            share.changeIncome(20)
            let incomeVal = $('#income').val()
            expect(incomeVal).to.be.equal("20")
        });
        it('Empty string shuld not change DOM income', function () {
            share.changeIncome(20)
            share.changeIncome('')
            let incomeVal = $('#income')
            expect(incomeVal.val()).to.be.equal('20')
        });





    })
})

