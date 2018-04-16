function firstPlusLast(arr){
    return Number(arr[0]) + Number(arr[arr.length-1])
}

//console.log(firstPlusLast(['20', '30', '40']));

function evenPositions(arr){
    let result = arr.filter((el, i) => {return i % 2 === 0}).join(' ')
    console.log(result);
}

//evenPositions(['20', '30', '40'])

function negativePositive(arr){
    let result = []
    arr.forEach(element => {
        if(Number(element) >= 0) result.push(element)
        else result.unshift(element)
    })
    console.log(result.join('\n'))
}

//negativePositive([3, -2, 0, -1])

function firstAndLastKElements(arr){
    let n = arr.shift(1)
    console.log(arr.slice(0,n).join(" "))
    console.log(arr.slice(arr.length-n).join(" "))
}

//firstAndLastKElements([2, 7, 8, 9])

function  lastK(n, k) {
    let arr = []
    arr[0] = 1
    for (let i = 1; i < n; i++) {
        arr.push(0)
        for (let j = i-1; j >= i-k; j--) {
            if(j>-1)
            arr[i] += arr[j]
        }
    }
    console.log(arr.join(' '));
}

//lastK(6,3)

function oddIndexesDoubled(arr){
    arr = arr.filter((el, i) => i % 2 !== 0).map(el => el * 2).reverse()
    console.log(arr.join(' '))
}

//oddIndexesDoubled([3, 0, 10, 4, 7, 3])

function smallestTow(arr){
    arr = arr.sort((a,b) => a - b).filter((e, i) => i<2)
    console.log(arr.join(' '))
}

//smallestTow([3, 0, 10, 4, 7, 3])

function biggestNum(matrix){
    let max = Number.NEGATIVE_INFINITY
   matrix.forEach(row => row.sort((a, b) => a<b))
    matrix.forEach(row => max = Math.max(max,row[0]))
    console.log(max)
}

//biggestNum([[3, 5, 7, 12],
//    [-1, 4, 33, 2],
//    [8, 3, 0, 4]])

function diagonalSum(matrix){
    let normalDiagonal = 0
    let backDiagonal = 0
    for (let row = 0; row < matrix.length; row++) {
        normalDiagonal += matrix[row][row];
        backDiagonal += matrix[row][matrix.length-1-row]
    }
    console.log(normalDiagonal + ' ' + backDiagonal)
}

//diagonalSum([[3, 5, 17],
 //   [-1, 7, 14],
 //   [1, -8, 89]])

function equalNeighbours(matrix){
    function currentEqualNeighborsCount(matrix,row,col){
        let count = 0
        if(col+1<matrix[row].length){
        if(matrix[row][col] === matrix[row][col+1]){
            count++
        }}

        if(row+1 < matrix.length){
        if(matrix[row+1][col] === matrix[row][col]){
            count++
        }}
    return count
    }

    let bigCount = 0
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let obj = matrix[col];
            bigCount += currentEqualNeighborsCount(matrix,row,col)
        }
    }

    return bigCount
}

console.log(equalNeighbours([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]));