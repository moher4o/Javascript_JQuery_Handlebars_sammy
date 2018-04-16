function getText(id){
    let text = document.getElementById(id).textContent
    let regex = /\((.*?)\)/g
    let arr = []
    let match = regex.exec(text)
    while(match){
        arr.push(match[1])
        match = regex.exec(text)
    }
    console.log(text)
    console.log(arr.join('; '))
}