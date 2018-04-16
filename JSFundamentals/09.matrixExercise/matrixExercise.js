function arrayWithDelimiter(arr){
    let delimiter = arr.pop()
    console.log(arr.join(delimiter));
}

function arrayWithStep(arr){
    let step = Number(arr.pop())
    for (let i = 0; i < arr.length; i++) {
        if(i % step === 0){
            console.log(arr[i])
        }
    }
}

//arrayWithStep(['5', '3', '2', '10', '8', '12', '2'])

function addRemove(commands){
    let arr = []
    let counter  = 0
    commands.forEach(c =>
        {
            counter++
            if(c === 'add') arr.push(counter)
            if(c === 'remove') arr.pop()
        }
    )
    if(arr.length > 0){
    console.log(arr.join('\n'))
    }
    else{
        console.log('Empty')
    }
}

//addRemove(['remove', 'add', 'remove', 'add', 'add'])

function rotationArr(arr){
    let n = arr.pop()
    for (let i = 0; i < n%arr.length; i++) {
        let tmp = arr.pop()
        arr.unshift(tmp)
    }

    console.log(arr.join(' '))
}

//rotationArr([1,2,3,4,2])

function nonDecreasing(arr){
    let l = 0
    do {
        l = arr.length
        arr = arr.filter((el, i) => i === 0 || el > arr[i - 1])
    }while(l !== arr.length)
    console.log(arr.join('\n'))
}

//nonDecreasing([20,3,2,15,6,1])

function lengthAlfabet(arr){
    arr.sort(function(a, b) {
        let nameA = a.toUpperCase(); // ignore upper and lowercase
        let nameB = b.toUpperCase(); // ignore upper and lowercase
        if(nameA.length === nameB.length){
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
        }
        else{
            if(nameA.length<nameB.length) return -1
            if(nameA.length>nameB.length) return 1
        }
    })
    console.log(arr.join('\n'));
}

//lengthAlfabet(['test', 'Deny', 'omen', 'Default'])

function magicMatrix(matrix){
    let globalSum = 0
    for (let row = 0; row < matrix.length; row++) {
        let rowsum = 0
        for (let col = 0; col < matrix[row].length; col++) {
            rowsum += matrix[row][col]
        }
        if(row === 0) globalSum = rowsum
        if(globalSum !== rowsum) return false
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let colsum = 0
        for (let row = 0; row < matrix.length; row++) {
            colsum += matrix[row][col]
        }
        if(globalSum !== colsum) return false
    }
    return true
}

//console.log(magicMatrix([[11, 32, 45],
 //   [21, 0, 1],
   // [21, 1, 1]]))


function diagonalAttack(arr){
    let matrix = []
    arr.forEach(el => {
        let row = el.split(' ').map(elem => Number(elem))
        matrix.push(row)
    })

    let normalDiagonal = 0
    let backDiagonal = 0
    for (let row = 0; row < matrix.length; row++) {
        normalDiagonal += matrix[row][row];
        backDiagonal += matrix[row][matrix.length-1-row]
    }
    if(normalDiagonal === backDiagonal){
        matrix = replace(matrix)
    }
       matrix.forEach(arr => console.log(arr.join(' ')))

     function replace(mat){
        for (let row = 0; row < mat.length; row++) {
            for (let col = 0; col < mat[row].length; col++) {
                if(row!==col && col !== mat.length-1-row){
                    mat[row][col] = normalDiagonal
                }
            }
        }
        return mat
    }
}

//diagonalAttack(['5 3 12 3 1',
 //   '11 4 23 2 5',
  //  '101 12 3 21 10',
  //  '1 4 5 2 2',
 //   '5 22 33 11 1'])

function orbit(arr){
    let [rows, cols, targetRow, targetCol] = arr
    let number = 1
    let matrix = fillMatrixWithZeros(rows,cols)

    function printMatrix(matrix){
        console.log(matrix.map(e => e.join(' ')).join('\n'))
    }

    function fillMatrixWithZeros(rows, cols){
        let matrix = []
        for (let i = 0; i < rows; i++) {
            matrix.push('0'.repeat(cols).split('').map(Number))
        }
        return matrix
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
           if(row === targetRow && col === targetCol) matrix[row][col] = 1
            else{
               let num = Math.max((Math.abs(targetRow-row)),(Math.abs(targetCol-col)))+1
               matrix[row][col] = num
           }
        }
    }

    printMatrix(matrix)

}

//orbit([3, 3, 2, 2])

function spiralMatrix(arr) {
    let rows = Number(arr[0]);
    let cols = Number(arr[1]);

    let matrix = [];

    function fillMatrix(matrix) {
        let counter=1;
        for (var i = 0; i < rows; i++) {
            matrix[i] = [];
            for (var j = 0; j < cols; j++) {
                matrix[i][j] = counter;
                counter++;
            }
        }
    }
    function printMatrix(matrix) {

        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }



    fillMatrix(matrix);
    printMatrix(matrix);

}

spiralMatrix(['5','5']);