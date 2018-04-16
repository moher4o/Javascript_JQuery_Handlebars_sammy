function sumThree(a, b, c) {
    let sum = a + b + c
    console.log(sum)
}

function SumAndVat(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let vat  = sum*0.2
    let total = sum + vat
    console.log("sum = "+ sum)
    console.log("VAT = "+ vat)
    console.log("total = "+ total)
}

function lettersCount(word,letter){
    let sum = 0
    for (let i = 0; i < word.length; i++) {
        if(letter === word[i]) sum++
    }

    return sum
}

//lettersCount("Peshooo","o")

function filterByAge(minAge, nameA, ageA, nameB, ageB) {
    let personA = {name:nameA, age:ageA}
    let personB = {name: nameB, age: ageB}
    if(personA.age >= minAge) console.log(personA)
    if(personB.age >= minAge) console.log(personB)
}
//filterByAge(12,"Ïvan",9,"Angel",15)

function stringOfNumbers(n){
    let str = ""
    for (let i = 1; i <= n; i++) {
        str += i;
    }
    console.log(str)
}
//stringOfNumbers(11)

function figureArea(w, h, W, H) {
    let [s1, s2, s3] = [w * h, W * H,
        Math.min(w, W) * Math.min(h, H)];
    return s1 + s2 - s3;
}

function nextDay(year,month,day) {
    let thisDate = new Date(year,month-1,day)
    let oneDay = 24*60*60*1000  //one day in miliseconds
    let nextDate = new Date(thisDate.getTime()+oneDay)
    //console.log(nextDate.getFullYear() + "-"+(nextDate.getMonth()+1) + "-" + nextDate.getDate())
   return (nextDate.getFullYear() + "-"+(nextDate.getMonth()+1) + "-" + nextDate.getDate())
}

//nextDay(2000,1,20)

function distance(x1,y1,x2,y2) {
    let point1 = {x:x1, y:y1}
    let point2 = {x:x2, y:y2}

    let distanceX = Math.pow(point1.x - point2.x, 2);
    let distanceY = Math.pow(point1.y - point2.y, 2);
    return Math.sqrt(distanceX + distanceY);

}

distance(2, 4, 5, 0)