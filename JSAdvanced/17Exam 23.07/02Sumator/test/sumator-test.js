let expect = require("chai").expect
let Sumator = require('../sumator').Sumator

describe('Sumator tests', () =>{
    let sumator
    beforeEach(() => {
        sumator = new Sumator()
    })
    it('should be sumator', function () {

        expect(sumator.constructor.name).to.be.equal('Sumator')
    });

    it('should be empty', function () {
        expect(''+sumator).to.be.equal('(empty)')
    });
    it('should return list', function () {
        sumator.add(1);
        sumator.add(2);
        sumator.add("three");
        expect(''+sumator).to.be.equal('1, 2, three')
    });

    it('should add number', function () {
        sumator.add(5)
        expect(sumator.data[0]).to.be.equal(5)
    });
    it('should add string', function () {
        sumator.add('5')
        expect(sumator.data[0]).to.be.equal('5')
    });
    it('should sum only numbers', function () {
        sumator.add(1);
        sumator.add(2);
        sumator.add("three");
        sumator.add(4);
        expect(sumator.sumNums()).to.be.equal(7)
    });
    it('should return 0 on empty list', function () {
        expect(sumator.sumNums()).to.be.equal(0)
    });
    it('should return 0 on list without numbers', function () {
        sumator.add("three");
        sumator.add('5')
        expect(sumator.sumNums()).to.be.equal(0)
    });
    it('should return original list', function () {
        sumator.add(1);
        sumator.add(2);
        sumator.add("three");
        sumator.add(4);
        sumator.add(6);
        sumator.add(7);
        sumator.removeByFilter(x => x % 2 === 0)
        expect(''+sumator).to.be.equal('1, three, 7')
    });
    it('should return original list', function () {
        sumator.add(1);
        sumator.add(2);
        sumator.add("three");
        sumator.add(4);
        sumator.add(6);
        sumator.add(7);
        sumator.removeByFilter(x => x === 0)
        expect(''+sumator).to.be.equal('1, 2, three, 4, 6, 7')
    });
    it('should return original list', function () {
        sumator.add(1);
        sumator.add(2);
        sumator.add("three");
        sumator.add(4);
        sumator.add(6);
        sumator.add(7);
        expect(() => sumator.removeByFilter(undefined)).to.throw()
    });
    it('should return true', function () {
      expect(Sumator.prototype.hasOwnProperty('add')).to.be.true
    });
    it('should return true', function () {
        expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.true
    });
    it('should return true', function () {
        expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.true
    });
    it('should return true', function () {
        expect(Sumator.prototype.hasOwnProperty('toString')).to.be.true
    });
})