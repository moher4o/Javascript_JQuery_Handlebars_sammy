function htmlEscape(text) {
    let map = {
        '"': '&quot;', '&': '&amp;',
        "'": '&#39;', '<': '&lt;', '>': '&gt;'
    };
    return text.replace(/[\"&'<>]/g, ch => map[ch]);
}

//console.log(htmlEscape('&'));

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};

function townToJson(arr){
    let obj = {}
    let output = []
    let head = []
    head = arr[0].split(/\s*\|\s*/g).filter(a => a!='')
    for (let i = 1; i < arr.length; i++) {
        let currentRow = arr[i].split(/\s*\|\s*/g).filter(a => a!='')
        let currentTown = {}
        for (let j = 0; j < head.length; j++) {
            if(j>0)
                currentTown[head[j]] = Number(currentRow[j])
            else
                currentTown[head[j]] = currentRow[j]
        }
        output.push(currentTown)
    }
    console.log(JSON.stringify(output))
}

//townToJson(['| Town | Latitude | Longitude |', '| Sofia | 42.696552 | 23.32601 |','| Beijing | 39.913818 | 116.363625 |'])

function scoreToHTML(input){
    let arr = JSON.parse(input)
    let result = '<table>\n'
    result += ' <tr>'
    let keys = Object.keys(arr[0])

    for (let i = 0; i < keys.length; i++) {
        result += `<th>${htmlEscape(keys[i])}</th>`
    }

    result += '</tr>\n'
    for (let i = 0; i < arr.length; i++) {
            result += ' <tr>'
        for (let j = 0; j < keys.length; j++) {
            result += `<td>${htmlEscape(arr[i][keys[j]]+'')}</td>`

        }
        result += '</tr>\n'
    }
    result += '</table>'

    console.log(result)
    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

}

//scoreToHTML('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')

function sumByTown(arr){
    let obj = {}
    for (let i = 0; i < arr.length; i += 2) {
        if(i%2===0){
            if(obj.hasOwnProperty(arr[i])){
                obj[arr[i]] += Number(arr[i+1])
            }
            else{
                obj[arr[i]] = Number(arr[i+1])
            }
        }
    }
    console.log(JSON.stringify(obj))
}

//sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4'])

function wordCount(arr){
    let obj = {}
    let regex = /\b[\w]+/g
    for (let i = 0; i < arr.length; i++) {
        let match = arr[i].match(regex)
        match.forEach(el => {
            if(obj.hasOwnProperty(el)) obj[el]++
            else obj[el] = 1
        })
    }
    console.log(JSON.stringify(obj))
}

//wordCount(['JS devs use Node.js for server-side JS.-- JS for devs','Far too slow, you\'re far too slow.'])

function wordCountMap(arr){
    let myMap = new Map()
    let regex = /\b[\w]+/g
    for (let i = 0; i < arr.length; i++){
        let match = arr[i].match(regex)
        match.forEach(el => {
            el = el.toLowerCase()
            if(myMap.has(el)) myMap.set(el,myMap.get(el)+1)
            else myMap.set(el,1)
        })
    }

    let arrayFromKeys = Array.from(myMap.keys()).sort((a,b) => a.localeCompare(b)) //може и само .sort()
    arrayFromKeys.forEach(el => {
        console.log(`'${el}' -> ${myMap.get(el)} times`)
    })
}

//wordCountMap(['Far too slow, you\'re far too slow.'])

function townsPopulation(arr){
    let towns = new Map()
    let regex = /\s*<->\s*/g

    arr.forEach(el => {
        let townData = el.split(regex).filter(a => a!='')
        if(towns.has(townData[0])) towns.set(townData[0],towns.get(townData[0]) + Number(townData[1]))
        else towns.set(townData[0],Number(townData[1]))
    })

    for(let [k,v] of towns){
        console.log(`${k} : ${v}`)
    }
}

//townsPopulation(['Sofia <-> 1200000','Sofia <-> 20000','New York <-> 10000000','Washington <-> 2345000','Las Vegas <-> 1000000'])

function markets(arr){
    let towns = new Map()
    for (let i = 0; i < arr.length; i++) {
        let [town, product, price] = arr[i].split(/\s*->\s*/)
        let multiple = price.split(/\s*:\s*/)
            .map(a => Number(a))
            .reduce((a,b) => a*b)
        if(towns.has(town)){
            let currentProducts = towns.get(town)
            if(currentProducts.has(product)){
               currentProducts.set(product, currentProducts.get(product) + multiple)
            }
            else{
                currentProducts.set(product,multiple)
            }
            towns.set(town, currentProducts)
        }
        else{
            let products = new Map()
            products.set(product, multiple)
            towns.set(town, products)
        }
    }
    for(let [town, products] of towns){
        console.log(`Town - ${town}`)
        for(let[product, price] of products){
            console.log(`$$$${product} : ${price}`)
        }
    }
}

//markets(['Sofia -> Laptops HP -> 200 : 2000','Sofia -> Raspberry -> 200000 : 1500','Montana -> Qgodas -> 20000 : 0.2','Montana -> Chereshas -> 1000 : 0.3', 'Montana -> Chereshas -> 1000 : 0.3'])

function lowestPrice(arr){
    let towns = new Map()
    let uniqueProducts = new Set()
    for (let i = 0; i < arr.length; i++) {
        let [town, product, price] = arr[i].split(/\s*\|\s*/)
        uniqueProducts.add(product)
        price = Number(price)
        if(towns.has(town)){
            towns.get(town).set(product,price)
        }
        else{
            let products = new Map()
            products.set(product, price)
            towns.set(town, products)
        }
    }

    uniqueProducts.forEach(el => {
        let lowest = {
            town:'',
            price: Number.MAX_VALUE
        }
        for(let [town, products] of towns){
            if(products.has(el) && products.get(el) < lowest.price){
               lowest.town = town
                lowest.price = products.get(el)
            }
        }
        console.log(`${el} -> ${lowest.price} (${lowest.town})`)
    })
}

function uniqueWords(arr){
    let uniqueWords = new Set()
    let regex = /[^a-zA-Z0-9_]+/g
    for (let i = 0; i < arr.length; i++) {
       let  words = arr[i].split(regex).filter(a => a!=='')
        words.forEach(word => {

            uniqueWords.add(word.toLowerCase())
        })
    }
    console.log([...uniqueWords.values()].join(', '))

}

//uniqueWords(['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. \n' +
 //   'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. \n' +
//    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. \n' +
//    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. \n' +
//    'Morbi in ipsum varius, pharetra diam vel, mattis arcu. \n' +
//    'Integer ac turpis commodo, varius nulla sed, elementum lectus. \n' +
//    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.\n'])

function sortObjectByValue(){                  //МНОГО ВАЖНО СОРТИРАНЕ!!!!!!!!!!!!!!!!!!!
    let obj = {
        obj1: {'value': 3},
        obj2: {'value': 1},
        obj3: {'value': 2},
        obj4: {'value': 5},
        obj5: {'value': 4},
    }
    let arrKeys = Object.keys(obj).sort(function (w,v){
        if(obj[w].value > obj[v].value){
            return 1
        }else if(obj[w].value < obj[v].value){
            return -1
        }
        return 0
    }).forEach(key => console.log(key + ' -> ' + JSON.stringify(obj[key])))


    let myMap = new Map([
        ['obj1', {value: 3}],
        ['obj2', {value: 1}],
        ['obj3', {value: 2}],
        ['obj4', {value: 5}],
        ['obj5', {value: 4}]
    ])

    let mapKeys = Array.from(myMap.keys())
        .sort((w,v) => myMap.get(w)['value'] - myMap.get(v)['value'])
        .forEach(key => console.log(key + ' -> ' + JSON.stringify(myMap.get(key))))

}
sortObjectByValue()