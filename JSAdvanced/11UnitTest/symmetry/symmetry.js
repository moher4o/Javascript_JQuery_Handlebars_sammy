function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone + reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

function second() {

}

module.exports = {isSymmetric, second}