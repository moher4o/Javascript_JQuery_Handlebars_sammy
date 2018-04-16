function outer(arr){
    let closure = (function() {
        let str = ''
        return {
            append: (s) => str += s,
            removeStart: (n) => str = str.substring(n),
            removeEnd: (n) => str = str.substring(0, str.length - n),
            print: () => console.log(str)
        }

    }())

    for (let el of arr) {
        let [command, value] = el.split(' ')
        closure[command](value)
    }

}

outer(['append hello',
    'append again',
    'removeStart 3',
    'removeEnd 4',
    'print']
)