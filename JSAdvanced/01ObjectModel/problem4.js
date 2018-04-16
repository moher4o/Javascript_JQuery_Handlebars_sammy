function colorize() {
    let arr = document.querySelectorAll('table tr')
    console.log(arr)
    for (let i = 1; i < arr.length; i+=2) {
        arr[i].style.background = 'teal'

    }
}