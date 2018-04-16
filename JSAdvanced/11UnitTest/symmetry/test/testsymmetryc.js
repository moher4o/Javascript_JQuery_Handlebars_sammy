let isSymmetric = require('../symmetry').isSymmetric
let expect = require("chai").expect;
//console.log(isSymmetric([1, 2, 1]));

describe('Check symmetry', () => {
   describe('General tests', () => {
       it('Should be a function', () => {
          expect(typeof  isSymmetric).to.equal('function')
       })
   })

    describe('Value tests true', () => {
        it('Should return true', () => {
            expect(isSymmetric([1,2,3,3,2,1])).to.be.true
        })
        it('Should return true', () => {
            expect(isSymmetric([-1,2,-1])).to.be.true
        })
        it('Should return true', () => {
            expect(isSymmetric([1])).to.be.true
        })
        it('Should return true', () => {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true
        })

    })

    describe('Value tests false', () => {
        it('Should return false', () => {
            expect(isSymmetric([1,2,3,4,2,1])).to.be.false
        })
        it('Should return false', () => {
            expect(isSymmetric([-1,2,1])).to.be.false
        })
        it('Should return false [1,2]', () => {
            expect(isSymmetric([1,2])).to.be.false
        })
        it('Should return false [5,\'hi\',{a:5},new Date(),{X:5},\'hi\',5]', () => {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.false
        })

    })

})