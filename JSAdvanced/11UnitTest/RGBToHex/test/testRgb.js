let rgbToHesColor = require('../rgbToHexColor').rgbToHexColor
let expect = require('chai').expect

describe('Check rgbToHex', () => {
    describe('Check if rgbToHex is a function and take 3 parameters', () =>{
        it('should be function', function () {
            expect(typeof rgbToHesColor).to.equal('function')
        });
        it('should take 3 parameters', function () {
            expect(rgbToHesColor.length).to.equal(3)
        });
        it('should return string', function () {
            expect(typeof rgbToHesColor(255, 158, 170)).to.be.string
        });

    })

     describe('Normal cases', () => {
         it('Should return #FF9EAA for ((255, 158, 170))',()=>{
             expect(rgbToHesColor(255, 158, 170)).to.contains('#FF9EAA')
         })
         it('Should pad values with zeroes',()=>{
             expect(rgbToHesColor(12, 13, 14) ).to.equal('#0C0D0E')
         })
         it('Should pad values with zeroes zeroes',()=>{
             expect(rgbToHesColor(0,0,0) ).to.equal('#000000')
         })
         it('Should return #FFFFFF',()=>{
             expect(rgbToHesColor(255, 255, 255)  ).to.equal('#FFFFFF')
         })

     })

    describe('Special cases', () => {
        it('Should return undefined on negative number',()=>{
            expect(rgbToHesColor(0, -1, 0)).to.be.undefined
        })
        it('Should return undefined on greater than 255',()=>{
            expect(rgbToHesColor(256, 0, 0)).to.be.undefined
        })
        it('Should return undefined on not an integer',()=>{
            expect(rgbToHesColor(3.14, 0, 0)).to.be.undefined
        })
        it('Should return undefined on invalid input',()=>{
            expect(rgbToHesColor("5", [3], {8:9})).to.be.undefined
        })
    })

})