function stars(n){
    for (let i = 1; i <= n; i++) {
        printStars(i)
    }
    for (let i = n-1; i > 0; i--) {
        printStars(i)
    }
    function printStars(num) { console.log('*'.repeat(num))}
}

//stars(5)

function rectangleStars(count = 5){
    for (let i = 1; i <= count; i++) {
        printStars(count)
    }
    function printStars(num) { console.log('* '.repeat(num))}
}

//rectangleStars(5)

function palindrome(str){
    return str === str.split('').reverse().join('')
}

//console.log(palindrome('abcccba'));

function dayOfWeek(day){
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturdate', 'Sunday']
    let index = arr.indexOf(day)
    return index > -1 ? index+1 : 'error'

}

//console.log(dayOfWeek('Frabjoyousday'));

function calculator(a,b, op){
    let calc = function(a, b, op) { return op(a, b) };
    let sum = (d,c) => { return d+c}
    let div = (d,c) => { return d-c}
    let del = (d,c) => { return d/c}
    let mul = (d,c) => { return d*c}

    switch (op){
        case '+':
            return calc(a,b,sum);
        case '-':
            return calc(a,b,div);
        case '/':
            return calc(a,b,del);
        case '*':
            return calc(a,b,mul);
    }
}

//console.log(calculator(18, -1, '*'));

function aggregateEl(arr){
    function aggregate(arr,initVal, func){
        for (let i = 0; i < arr.length; i++) {
            initVal = func(initVal,arr[i]);
        }
        console.log(initVal);
    }
    aggregate(arr,0,(a,b) => a+b)
    aggregate(arr,0,(a,b) => a+1/b)
    aggregate(arr,'',(a,b) => a+b)
}

//aggregateEl([1, 2, 3])

function wordsUpper(str){
    return str.toUpperCase()
        .split(/\W+/)
        .filter(w => w != '')
        .join(', ')
}

//console.log(wordsUpper('Hi, how are you?'));