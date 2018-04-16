function multiple(a, b) {
    return a*b
}

function boxesBottles(b, n) {
    console.log(Math.ceil(b/n))
}

function leap(year) {
    let leep = ((year%4 == 0 && year%100 != 0) || (year%400 == 0))
    console.log(leep ? "yes" : "no")
}

//leap(1900)

function circleArea(r) {
    let area = Math.PI*r*r
    console.log(area)
    console.log(area.toFixed(2))
    //let areaRounded = Math.round(area * 100) / 100;
    //console.log(areaRounded);
}

//circleArea(5)

function triangleArea(a,b,c) {
    let sp = (a+b+c) / 2
let area = Math.sqrt(sp*(sp-a)*(sp-b)*(sp-c)) //Heron formula
return area
}

function coneVolumeArea(r,h){
    let volume = Math.PI*r*r*h/3
    let s = Math.sqrt(r*r+h*h)
    let area = Math.PI*(r*r+r*s)
    console.log("volume = "+volume)
    console.log("area = "+area)
}

//coneVolumeArea(3,5)

function oddOrEven(num){
    if(num%2==0){
        console.log("even")
    }else if(Math.abs(num%2) == 1){
        console.log("odd")
    }else{
        console.log("invalid")
    }
}

//oddOrEven(1.5)

function fruitOrVegetable(str) {
    switch (str){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case 'lemon':
        case "grapes":
        case "peach":
            console.log("fruit")
            break
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            console.log("vegetable")
            break
        default:
            console.log("unknown")
            break
    }
}

//fruitOrVegetable("lemon")

function colorfull(num) {
    let result = "<ul>\n"
    for (let i = 1; i <= num; i++) {
        let coLor = i%2 === 0 ? "blue" : "green"
        result += `    <li><span style='color:${coLor}'>${i}</span></li>\n`
    }
    result += '</ul>\n'
    return result
}

function chessboard(size) {
    let html = '<div class="chessboard">\n';
    for (let row = 0; row < size; row++) {
        html += '  <div>\n';
        let color = (row % 2 == 0) ? 'black' : 'white';
        for (let col = 0; col < size; col++) {
            html += `    <span class="${color}"></span>\n`;
            color = (color == 'white') ? 'black' : 'white';
        }
        html += '  </div>\n';
    }
    return html + '</div>';
}

function primeChecker(num) {
    let prime = true
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0){
            prime = false
            break
        }
    }

    return prime && (num>1)

}

function isPrime(num) {
    let prime = true;
    for (let d = 2; d <=
    Math.sqrt(num); d++) {
        if (num % d == 0) {
            prime = false;
            break;
        }
    }
    return prime && (num > 1);
}


