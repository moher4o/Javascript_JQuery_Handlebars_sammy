function sum(){
    let elements = document.querySelectorAll('table tr')
    let sum = 0
    for (let i = 1; i < elements.length-1; i++) {
        let price = Number(elements[i].getElementsByTagName('td')[1].textContent)
        sum += price
    }

    elements[elements.length-1].getElementsByTagName('td')[1].textContent = sum

}