function second(matrix,secondaryMat, overlay,startCoordinates){
    for (let i = 0; i < overlay.length; i++) {
        let beginRow = overlay[i][0]
        let beginCol = overlay[i][1]
        change(beginRow,beginCol)
    }

    let step = 1
    let end = false
    let stucked = false
    let entryX = startCoordinates[0], entryY = startCoordinates[1]
    while(!end){

        startCoordinates = nextStep(startCoordinates[0],startCoordinates[1],entryX,entryY)
        step++


    function nextStep(x, y){
     if((x-1)!== entryX){
         if((x-1)>-1){
             if(checkCoordinates(x-1,y)){
                 entryX = x
                 entryY = y
                 return [x-1,y]
             }
         }
         else{
             if(step !== 1){
                 ending()
                 console.log('Top')
                 return [x-1,y]
             }
         }
     }

     if(x+1 !== entryX){
         if((x+1) < matrix.length){
             if(checkCoordinates(x+1,y)){
                 entryX = x
                 entryY = y
                 return [x+1,y]
             }
         }
         else{
             if(step !== 1){
                 ending()
                 console.log('Bottom')
                 return [x+1,y]
             }
         }

     }
     if((y-1) !== entryY){
         if((y-1)>-1){
             if(checkCoordinates(x,y-1)){
                 entryX = x
                 entryY = y
                 return [x,y-1]
             }
         }
         else{
             if(step !== 1){
                 ending()
                 console.log('Left')
                 return [x,y-1]
             }
         }

     }

     if((y+1) !== entryY){
         if((y+1) < matrix[x].length){
             if(checkCoordinates(x,y+1)){
                 entryX = x
                 entryY = y
                 return [x,y+1]
             }
         }
         else{
             if(step !== 1){
                 ending()
                 console.log('Right')
                 return [x,y+1]
             }
         }

     }

        ending()
        console.log(`Dead end ${checkQuadrant(x,y)}`)
        return[x,y]

    }

    function checkQuadrant(x,y){
       if(x < matrix.length/2){
           if(y< matrix[x].length/2) return 2
           if(y>= matrix[x].length/2) return 1
       }
        if(x >= matrix.length/2){
            if(y< matrix[x].length/2) return 3
            if(y>= matrix[x].length/2) return 4
        }

    }

    function checkCoordinates(x,y){
        if(matrix[x][y] === 0) return true
        else return false
    }

    function ending(){
        end = true
        console.log(step)
    }

    }

    function printMatrix(matrix) {

        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }

    function change(x,y){
        for (let row = x; row < Math.min(matrix.length, (x+secondaryMat.length)); row++) {
            for (let col = y; col < Math.min(matrix[row].length,(y+secondaryMat[0].length)); col++) {
                if(secondaryMat[row-x][col-y] === 1){
                    switch (matrix[row][col]){
                        case 1:
                            matrix[row][col] = 0
                            break
                        case 0:
                            matrix[row][col] = 1
                            break
                        default:
                            break
                    }
                }

            }
        }
    }
}

second([[1, 1, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 1, 1, 0, 1, 0, 0]],
    [[0, 1, 1],
        [0, 1, 0],
        [1, 1, 0]],
    [[1, 1],
        [2, 3],
        [5, 3]],
    [0, 2]
)