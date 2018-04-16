let fib = (function getFibonator(){
    let fib1 = Number(0)
    let fib2 = Number(1)
    return function(){
        let fib3 = fib1 + fib2
        fib1 = fib2
        fib2 = fib3
        return fib1
    }
})()


console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());