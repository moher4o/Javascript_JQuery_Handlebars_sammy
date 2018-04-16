const createCalculator = require('../create-calc').createCalculator
let expect = require("chai").expect;

describe('Calculator maker', () => {
    let calc
    beforeEach(() => {
        calc = createCalculator()
    })

    it('should return object', () => {
        expect(typeof calc).to.equal('object')
    })

    it('should have 0 value on create', () => {
        expect(calc.get()).to.equal(0)
    })

    it('should have 5', () => {
        calc.add(3); calc.add(2); let value = calc.get();
        expect(value).to.be.equal(5);

    })

    it('should work with fractions', () => {
        calc.add(3.14)
        calc.subtract(1.13)
        expect(calc.get()).to.be.closeTo(2.01,0.0001)
    })

    it('should work with negative', () => {
        calc.add(-4)
        calc.subtract(-5)
        expect(calc.get()).to.equal(1)
    })
    it('should not work with NaNs', () => {
        calc.add('pesho')
        expect(calc.get()).to.be.NaN
    })


})