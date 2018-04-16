function heroes(arr){
    let heroes = []
    let regex = /\s*\/\s*/
    for (let i = 0; i < arr.length; i++) {
        let [nameHero, levelHero, itemsString] = arr[i].split(' / ').filter(a => a != '')
        let items = []
        if(itemsString)
        items = itemsString.split(', ').filter(a => a != '')
        let hero = {}
        hero.name = nameHero
        hero.level = Number(levelHero)
        hero.items = items
        heroes.push(hero)
    }

    //heroes.forEach(hero => console.log(JSON.stringify(hero)))
    console.log(JSON.stringify(heroes))
}

//heroes(['Isacc / 25','Derek / 12 / BarrelVest, DestructionSword','Hes / 1 / Desolator, Sentinel, Antara','Jake / 1000 / Gauss, HolidayGrenade'])

function tableJson(arr){
    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }


    let result = '<table>\n'

    for (let i = 0; i < arr.length; i++) {
        let obj = JSON.parse(arr[i])
        result += '    <tr>\n'
        result += `        <td>${htmlEscape(obj.name)}</td>\n`
        result += `        <td>${htmlEscape(obj.position)}</td>\n`
        result += `        <td>${obj.salary}</td>\n`
        result += '    <tr>\n'
    }

    result += '</table>'
    console.log(result);
}

//tableJson(['{"name":"Pesho","position":"Promenliva","salary":100000}','{"name":"Teo","position":"Lecturer","salary":1000}','{"name":"Georgi","position":"Lecturer","salary":1000}'])

function juice(arr){
    let ceh = new Map()
    let order = []
    for (let i = 0; i < arr.length; i++) {
        let [juice, quantity] = arr[i].split(' => ').filter(a => a !== '')
        quantity = Number(quantity)
        if(ceh.has(juice)){
             ceh.set(juice, ceh.get(juice)+ quantity)
            if(Math.floor(ceh.get(juice)/1000) > 0 && !order.includes(juice)) order.push(juice)
        }
        else{
            ceh.set(juice,quantity)
            if(Math.floor(quantity/1000) > 0 && !order.includes(juice)) order.push(juice)
        }
    }

    for (let i = 0; i < order.length; i++) {
        console.log(`${order[i]} => ${Math.floor(ceh.get(order[i])/1000)}`)
    }

}
//juice(['Kiwi => 234','Pear => 2345','Watermelon => 3456','Kiwi => 4567','Pear => 5678','Watermelon => 6789'])

function storeCatalogue(arr){
    let catalogue = {}
    for (let i = 0; i < arr.length; i++) {
        let [name,price] = arr[i].split(' : ').filter(a => a!=='')
        catalogue[name] = price
    }
    let letter = 'A'

    let arrKeys = Object.keys(catalogue).sort().forEach((el,i) => {
        if(i === 0 && el[0]==='A') console.log(el[0])
        if(el[0]!==letter) {
            console.log(el[0])
            letter = el[0]
        }
        console.log(`  ${el}: ${catalogue[el]}`)
    })
}

//storeCatalogue(['Anti-Bug Spray : 15','Apple : 1.25', 'Appricot : 20.4','Banana : 2','Rubic\'s Cube : 5','Raspberry P : 4999','Rolex : 100000','Rollon : 10','Rali Car : 2000000','Pesho : 0.000001','Barrel : 10'])

function autoStore(arr){
    let brands = new Map()
    for (let i = 0; i < arr.length; i++) {
        let [brand, model, price] = arr[i].split(/\s*\|\s*/)
        price = Number(price)
        if(brands.has(brand)){
            let currentModels = brands.get(brand)
            if(currentModels.has(model)){
                currentModels.set(model, currentModels.get(model) + price)
            }
            else{
                currentModels.set(model,price)
            }
            brands.set(brand, currentModels)
        }
        else{
            let models = new Map()
            models.set(model, price)
            brands.set(brand, models)
        }
    }
    for(let [brand, models] of brands){
        console.log(`${brand}`)
        for(let[model, price] of models){
            console.log(`###${model} -> ${price}`)
        }
    }
}
//autoStore(['Audi | Q7 | 1000','Audi | Q6 | 100','BMW | X5 | 1000','BMW | X6 | 100','Citroen | C4 | 123','Volga | GAZ-24 | 1000000',
// 'Lada | Niva | 1000000','Lada | Jigula | 1000000','Citroen | C4 | 22','Citroen | C5 | 10'])

function systemComponents(arr){
    let mySystem = new Map()
    for (let i = 0; i < arr.length; i++) {
        let [system, component, subComponent] = arr[i].split(/\s*\|\s*/)
        if(mySystem.has(system)){
            let currentComponents = mySystem.get(system)
            if(currentComponents.has(component)){
                let subComponents = currentComponents.get(component)
                subComponents.add(subComponent)
                currentComponents.set(component, subComponents)
            }
            else{
                let subComponents = new Set()
                currentComponents.set(component,subComponents.add(subComponent))
            }
            mySystem.set(system, currentComponents)
        }
        else{
            let newComponent = new Map()
            let newSubComponent = new Set()
            newSubComponent.add(subComponent)
            newComponent.set(component, newSubComponent)
            mySystem.set(system, newComponent)
        }

    }

    let systemKeys = Array.from(mySystem.keys())
        .sort((a,b) => {
       if(mySystem.get(a).size > mySystem.get(b).size){
           return -1
       }
       else if(mySystem.get(b).size > mySystem.get(a).size){
           return 1
       }
       else{
           return a.localeCompare(b)
       }
   })

    for (let i = 0; i < systemKeys.length; i++) {
        console.log(systemKeys[i])
        let componentKeys = Array.from(mySystem.get(systemKeys[i]).keys())
            .sort((a,b) => {
                if(mySystem.get(systemKeys[i]).get(a).size > mySystem.get(systemKeys[i]).get(b).size){
                    return -1
                }
                else if(mySystem.get(systemKeys[i]).get(b).size > mySystem.get(systemKeys[i]).get(a).size){
                    return 1
                }
                else{
                    return a.localeCompare(b)
                }
            })
        for (let j = 0; j < componentKeys.length; j++) {
            console.log('|||'+componentKeys[j])
            for (let setValue of mySystem.get(systemKeys[i]).get(componentKeys[j])) {
                console.log('||||||'+setValue)

            }
        }
    }
}

function inf(arr){
    console.log(arr);
}

// systemComponents([ 'SULS | Main Site | Home Page',
//     'SULS | Main Site | Login Page',
//     'SULS | Main Site | Register Page',
//     'SULS | Judge Site | Login Page',
//     'SULS | Judge Site | Submittion Page',
//     'Lambda | CoreA | A23',
//     'SULS | Digital Site | Login Page',
//     'Lambda | CoreB | B24',
//     'Lambda | CoreA | A24',
//     'Lambda | CoreA | A25',
//     'Lambda | CoreC | C4',
//     'Indice | Session | Default Storage',
//     'Indice | Session | Default Security' ]
// )

function usernames(arr){
    let userSet = new Set()
    arr = arr.sort((a,b) => {
        if(a.length - b.length > 0){
            return 1
        }
        else if(b.length - a.length > 0){
            return -1
        }
        else{
            return a.localeCompare(b)
        }
    })

    for (let i = 0; i < arr.length; i++) {
        userSet.add(arr[i])
    }

    for (let el of userSet) {
        console.log(el)
    }
}

// usernames(['Ashton',
//     'Kutcher',
//     'Ariel',
//     'Lilly',
//     'Keyden',
//     'Aizen',
//     'Billy',
//     'Braston']
// )

function uniqueSeq(arr){
    let uniSet = new Set()
    for (let i = 0; i < arr.length; i++) {
        let currentArray = JSON.parse(arr[i]).sort((a,b) => b-a)
        let checkUnique = true
        for(let el of uniSet){
            if(el.length === currentArray.length) {
                let checkCurrent = true
                for (let j = 0; j < el.length; j++) {
                    if (el[j] !== currentArray[j]) {
                        checkCurrent = false
                        break
                    }
                }
                if(checkCurrent) checkUnique = false
                break
            }
        }
        if(checkUnique)
        uniSet.add(currentArray)
    }

    let sortedArray = Array.from(uniSet).sort((a,b) => {
        if(a.length > b.length) return 1
        else if(b.length > a.length) return -1
        else return 0
    })

    for (let el of sortedArray) {
        console.log(`[${el.join(', ')}]`)
    }

}


uniqueSeq([ '[-3, -2, -1, 0, 1, 2, 3, 4]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]' ]
)