let solution = function(){
    let store = {
        protein: Number(0),
        carbohydrate: Number(0),
        fat: Number(0),
        flavour: Number(0)
    }
    return function(str){
        let [command, food, quantity] = str.split(' ').filter((a) => a!=='')
        switch (command){
            case 'restock':
                store[food] += Number(quantity)
                //return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
                return 'Success'
            case 'prepare' :
                return prepareMeal(food, quantity)
            case 'report':
                return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
            default:
                return 'problem'

        }
        function prepareMeal(meal,quantity){
            switch (meal){
                case 'apple':
                    if(store.carbohydrate < 1*quantity) return 'Error: not enough carbohydrate in stock'
                    if(store.flavour < 2*quantity) return 'Error: not enough flavour in stock'
                    store.carbohydrate -= 1*quantity
                    store.flavour -= 2*quantity
                    return 'Success'
                case 'coke':
                    if(store.carbohydrate < 10*quantity) return 'Error: not enough carbohydrate in stock'
                    if(store.flavour < 20*quantity) return 'Error: not enough flavour in stock'
                    store.carbohydrate -= 10*quantity
                    store.flavour -= 20*quantity
                    return 'Success'
                case 'burger':
                    if(store.carbohydrate < 5*quantity) return 'Error: not enough carbohydrate in stock'
                    if(store.fat < 7*quantity) return 'Error: not enough fat in stock'
                    if(store.flavour < 3*quantity) return 'Error: not enough flavour in stock'
                    store.carbohydrate -= 5*quantity
                    store.flavour -= 3*quantity
                    store.fat -= 7*quantity
                    return 'Success'
                case 'omelet':
                    if(store.protein < 5*quantity) return 'Error: not enough protein in stock'

                    if(store.fat < 1*quantity) return 'Error: not enough fat in stock'
                    if(store.flavour < 1*quantity) return 'Error: not enough flavour in stock'
                    store.protein -= 5*quantity
                    store.flavour -= 1*quantity
                    store.fat -= 1*quantity
                    return 'Success'
                case 'cheverme':
                    if(store.protein < 10*quantity) return 'Error: not enough protein in stock'
                    if(store.carbohydrate < 10*quantity) return 'Error: not enough carbohydrate in stock'
                    if(store.fat < 10*quantity) return 'Error: not enough fat in stock'
                    if(store.flavour < 10*quantity) return 'Error: not enough flavour in stock'
                    store.protein -= 10*quantity
                    store.carbohydrate -= 10*quantity
                    store.flavour -= 10*quantity
                    store.fat -= 10*quantity
                    return 'Success'
                default:
                    return 'No such food'
            }
        }

    }
}

let manager = solution();
console.log(manager("restock protein 100")); // Success
console.log(manager("restock carbohydrate 100"));
console.log(manager("restock fat 100"));
console.log(manager("restock flavour 100"));
console.log(manager("report"));
console.log(manager("restock fat 10"));
console.log(manager("prepare cheverme 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare cheverme 1"));

console.log(manager("report"));





