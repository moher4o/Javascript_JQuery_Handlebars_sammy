ТРИ ВАРИАНТА
    ...arr - разпада масива на елементи


function solve(arr){
    return Math.max(...arr)
}

function solve1(arr){
    return Math.max.call('',...arr)
}

function solve2(arr){
    return Math.max.apply('',arr)
}

console.log(solve([10, 20, 5]));
console.log(solve1([10, 20, 5]));
console.log(solve2([10, 20, 5]));