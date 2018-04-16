let result = (function solve(){
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly')
            }
            this.weight = Number(weight)
            this.melonSort = melonSort
            this.element
        }
        get elementIndex(){
            return this._elementIndex
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }

     class Watermelon extends Melon{
        constructor(weight,melonSort){
            super(weight, melonSort)
            this._elementIndex = this.weight * this.melonSort.length
            this.element = 'Water'
        }
     }
    class Firemelon extends Melon{
        constructor(weight,melonSort){
            super(weight, melonSort)
            this._elementIndex = this.weight * this.melonSort.length
            this.element = 'Fire'
        }
    }
    class Earthmelon extends Melon{
        constructor(weight,melonSort){
            super(weight, melonSort)
            this._elementIndex = this.weight * this.melonSort.length
            this.element = 'Earth'
        }
    }
    class Airmelon extends Melon{
        constructor(weight,melonSort){
            super(weight, melonSort)
            this._elementIndex = this.weight * this.melonSort.length
            this.element = 'Air'
        }
    }
    class Melolemonmelon extends Airmelon{
        constructor(weight,melonSort){
            super(weight, melonSort)
            this._elementIndex = this.weight * this.melonSort.length
            this.element = 'Water'
            this.arrElements = ['Fire','Earth','Air']
        }
        morph(){
            this.arrElements.push(this.element)
            this.element = this.arrElements.shift()
        }
    }


    return {Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon}
})()

let Watermelon = result.Watermelon
let Melolemonmelon = result.Melolemonmelon
let mel = new Melolemonmelon(15, 'MyDinia')
console.log(mel.toString());
mel.morph()
console.log(mel.toString());
console.log(mel.arrElements)
// let watermelon = new Watermelon(12.5, "Kingsize");
// console.log(watermelon.toString());
