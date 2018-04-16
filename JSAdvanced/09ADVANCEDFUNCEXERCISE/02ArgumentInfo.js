function result(){
    let fArguments = {}
    for (let i = 0; i < arguments.length; i++) {
        let argType = typeof arguments[i]
        let argValue = arguments[i]
        console.log(`${argType}: ${argValue}`)
        if(!fArguments[argType]){
            fArguments[argType] = 0
        }

        fArguments[argType]++
    }

    let sortedArr = Object.keys(fArguments).sort((a,b) => {
        return fArguments[b] - fArguments[a]
    }).forEach((key) => console.log(`${key} = ${fArguments[key]}`))
}

result('cat', 42, function () { console.log('Hello world!'); },120,23,'dog');