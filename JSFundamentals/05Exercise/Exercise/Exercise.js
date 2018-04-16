function hello(name) {
    console.log("Hello, "+name+", I am JavaScript!")
}
//hello('Angel')

function solve(a,b) {
    console.log(a*b)
    console.log(2*a+2*b)
}
//solve(2, 2)

function distance(params) {
    let v1 = params[0]
    let v2 = params[1]
    let t = params[2]/3600

    let s1 = v1*t
    let s2 = v2*t
    console.log(Math.abs(s1-s2)*1000)
}

//distance([11, 10, 120])

function distance3d(params) {
    let x1 = params[0]
    let y1 = params[1]
    let z1 = params[2]
    let x2 = params[3]
    let y2 = params[4]
    let z2 = params[5]

    let distance = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2)+Math.pow((z2-z1),2))
    console.log(distance)
}
//distance3d([3.5, 0, 1, 0, 2, -1])

function gradToDegr(grads) {
    let k = 0.9

    grads = grads % 400

    let degrees = grads*k

    if(degrees<0){
        degrees = 360 + degrees
    }

    console.log(degrees)
}

//gradToDegr(-50)

function rounding(arr){
    let num = arr[0]
    let precision = arr[1]

    if(precision>15){
        precision = 15
    }

    let result = num.toFixed(precision) + ''
    let checkZeroIndex = 0
      for (let i = result.length-1; i >=0; i--) {
       if(result[i] != 0){
           checkZeroIndex = i+1
           break
       }
      }
    console.log(result.substring(0,checkZeroIndex))
}

//rounding([3.1415926535897932384626433832795, 2])


function imperial(num) {
    let inches = num%12
    //let feet = (num-inches)/12
    let feet = Number.parseInt(num/12)

    console.log(feet+"\'-"+inches+"\"")
}
//imperial(11)

function nowPlaying(array) {
    let track = array[0]
    let artist = array[1]
    let duration = array[2]
    console.log(`Now Playing: ${artist} - ${track} [${duration}]`)
}
//nowPlaying(['Number One', 'Nelly', '4:09'])

function composeTag(arr) {
    let fileName = arr[0]
    let text = arr[1]

    console.log(`<img src="${fileName}" alt="${text}">`)
}
//composeTag(['smiley.gif', 'Smiley Face'])

function bindec(str) {
    let dec = 0
    let pow = 0
    for (let i = str.length-1; i>=0; i--) {
        if(str[i] === "1"){
            dec += Math.pow(2,pow)
        }
        pow++
    }

    console.log(dec)
}

//bindec("00001001")

function compundInterest(data){
    let sum = data[0]
    let interestRate = data[1]/100
    let frequency = 12/data[2]
    let years = data[3]

    let f = sum*Math.pow(1+interestRate/frequency, frequency*years)
    console.log(Math.round(f*100)/100)
}

//compundInterest([1500, 4.3, 3, 6])


function assainProp(arr) {
    let obj = {};
    obj[arr[0]] = arr[1];
    obj[arr[2]] = arr[3];
    obj[arr[4]] = arr[5];

   console.log(obj)
}

//assainProp(['name', 'Pesho', 'age', '23', 'gender', 'male'])

function  biggest(arr) {
    let a = arr[0]
    let b = arr[1]
    let c = arr[2]
    let biggest = a
    if(biggest < b) biggest = b
    if(biggest < c) biggest = c
     console.log(biggest)
}

function biggest2(nums){
    return Math.max(nums[0], nums[1], nums[2])
}

//console.log(biggest2([43, 43.2, 43.1]))

function pointInRect(input){
    let [x, y, xMin, xMax, yMin, yMax] = input
    if(x>=xMin && x<=xMax && y>=yMin && y<=yMax)
        console.log('inside')
    else
        console.log('outside')
}

function oddNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if(i%2 == 1)
        console.log(i)
    }
}

//oddNumbers(5)

function printDollars(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log('$'.repeat(i))
        //console.log(new Array(i+1).join('$'))
    }
}
//printDollars(5)

