class Rat{
    constructor(name){
        this.name = name
        this.tribe = []
    }

    unite(rat){
        if(rat instanceof Rat){
           this.tribe.push(rat)
        }
    }

    getRats(){
       return this.tribe
    }

    toString(){
        let arr = []
        arr.push(this.name)
        for (let rat of this.tribe) {
            arr.push('##' + rat.name)
        }
        return arr.join('\n')
    }
}

let test = new Rat("Pesho");
console.log(typeof test)
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
