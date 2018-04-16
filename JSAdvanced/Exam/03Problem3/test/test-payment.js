let expect = require('chai').expect
const PaymentPackage = require('../PaymentPackage').PaymentPackage

describe("Test PaymentPackage", function() {
    let payment
    beforeEach(() => {
        payment = new PaymentPackage('HR Services', 1500)
    })
    it("It should have initialized toString methods", function() {
        expect(Object.getPrototypeOf(payment).hasOwnProperty('toString')).to.be.equal(true)
    })
    it("On empty value should throw Error", function() {
        expect(() => {builder = new PaymentPackage('HR Services')}).to.throw(Error)
    });
    it("On empty Name should throw Error", function() {
        expect(() => {payment = new PaymentPackage(200)}).to.throw(Error)
    });
    it("On empty string Name should throw Error", function() {
        expect(() => {payment = new PaymentPackage('',200)}).to.throw(Error)
    });
    it("On negative value should throw Error", function() {
        expect(() => {payment = new PaymentPackage('Hr',-200)}).to.throw(Error)
    });
    it("On negative value of VAT throw Error", function() {
        expect(() => {payment.VAT = -5}).to.throw(Error)
    });
    it("Type of active must be boolean", function() {
        expect(typeof payment.active).to.be.equal('boolean')
    });
    it("Type of name must be string", function() {
        expect(typeof payment.name).to.be.equal('string')
    });
    it("Type of value must be number", function() {
        expect(typeof payment.value).to.be.equal('number')
    });
    it("Must append (inactive)", function() {
        payment.active = false
        expect(payment.toString()).to.be.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800')
    });
    it("Test toString()", function() {
        expect(payment.toString()).to.be.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800')
    });
    it("Accessor Name change", function() {
        payment.name = 'pesho'
        expect(payment.name).to.be.equal('pesho')
    });
    it("Accessor Name change empty", function() {
        expect(() => {payment.name = ''}).to.throw(Error)
    });
    it("Accessor value change empty", function() {
        expect(() => {payment.value = ''}).to.throw(Error)
    });
    it("Accessor Vat change empty", function() {
        expect(() => {payment.VAT = ''}).to.throw(Error)
    });
    it("Accessor active change empty", function() {
        expect(() => {payment.active= ''}).to.throw(Error)
    });
    it("Accessor active change empty", function() {
        expect(() => {payment.active= 'pesho'}).to.throw(Error)
    });

    it("Accessor Vat change string", function() {
        expect(() => {payment.VAT = 'pesho'}).to.throw(Error)
    });

    it("Accessor Name", function() {
        expect(payment.name).to.be.equal('HR Services')
    });
    it("Accessor Value change", function() {
        payment.value = 340
        expect(payment.value).to.be.equal(340)
    });
    it("Accessor value change string", function() {
        expect(() => {payment.value = 'pesho'}).to.throw(Error)
    });

    it("Accessor Value initial", function() {
        expect(payment.value).to.be.equal(1500)
    });

    it("Accessor Value change negative", function() {
        expect(() => {payment.value = -5}).to.throw(Error)
    });
    it("Accessor VAT normal", function() {
        payment.VAT = 25
        expect(payment.VAT).to.be.equal(25)
    });
    it("Accessor Name initial", function() {
        expect(payment.name).to.be.equal('HR Services')
    });
    it("Accessor VAT initial", function() {
        expect(payment.VAT).to.be.equal(20)
    });
    it("Accessor Active initial", function() {
        expect(payment.active).to.be.equal(true)
    });
    it("Accessor Active change value", function() {
        payment.active = false
        expect(payment.active).to.be.equal(false)
    });

});
