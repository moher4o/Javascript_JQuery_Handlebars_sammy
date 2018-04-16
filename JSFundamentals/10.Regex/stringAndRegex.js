function indexes(str){
    for (let i = 0; i < str.length; i++) {
        console.log(`str[${i}] -> ${str[i]}`)
    }
}

//indexes('Hello, World!')

function concatenateReverse(arr){
    let str = arr.join('')
    console.log(str.split('').reverse().join(''))
}

//concatenateReverse(['I', 'am', 'student'])

function occurrences(target, text){
    let counter = 0

    while(true){
      let index = text.indexOf(target)
        if(index === -1) break
        counter++
        text = text.substring(index+1)
    }

    console.log(counter);
}

//occurrences('ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.')

function extractText(str){
    let arr = []
    while(true){
        let start = str.indexOf('(')
        if(start === -1) break

        let end = str.indexOf(')')
        if(end === -1 || end<start) break

        arr.push(str.substring(start+1,end))

        str = str.substring(end+1)
    }
    console.log(arr.join(', '));
}

//extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)')

function aggregateTable(arr){
    let towns = []
    let sum = 0
    arr.forEach(r => {
       let tokens =  r.split('|').filter(a => a!=='')
        towns.push(tokens[0].trim())
        sum += Number(tokens[1])
    })
    console.log(towns.join(', '))
    console.log(sum)
}

//aggregateTable(['| Sofia           | 300','| Veliko Tarnovo  | 500','| Yambol          | 275'])

function restorauntBill(arr) {
    let sum = 0
    let orders = []
    arr.forEach((el, i) => {
        if(i%2===0) {
            orders.push(el)
        }
        else{
            sum += Number(el)
        }
    })

    console.log(`You purchased ${orders.join(', ')} for a total sum of ${sum}`)
}

//restorauntBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])

function usernames(arr){
    let usernames = []
    arr.forEach(r => {
        let tokens =  r.split('@').filter(a => a!=='')
        let currentUser = tokens[0].trim()
        currentUser += '.'
        tokens[1].split('.').forEach(f => {
            currentUser += f[0]
        })
        usernames.push(currentUser)
    })
    console.log(usernames.join(', '))
}

//usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])

function replaceString(str, arr){
    arr.forEach(r => {
        let currentStr = '-'.repeat(r.length)
        str = str.replace(new RegExp(r, "gm"), currentStr)
    })
    console.log(str);
}

//replaceString('roses are red, violets are blue', [', violets are', 'red'])

function htmlList(items) {
    return "<ul>\n" +
        items.map(htmlEscape).map(
            item => `  <li>${item}</li>`).join("\n") +
        "\n</ul>\n";
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}

console.log(htmlList(['<b>unescaped text</b>', 'normal text']));