function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}
// function testSum() {
//     if (sum([1, 2]) != 3) throw new Error("1+2 != 3");
//     if (sum([-2]) != -2) throw Error("-2 != -2");
//     if (sum([]) != 0) throw new Error("0 != 0");
// }

let expect = require("chai").expect;
describe("sum(arr)", function() {
    it("should return 3 for [1, 2]", function() {
        expect(sum([1, 2])).to.be.equal(3);
    });

    it("should return 0 for []", function() {
        expect(sum([])).to.be.equal(0);
    });

});
