class Stringer{
    constructor(word,length){
        this.word = word
        this.length = length
    }

    set word(word){
        this.innerString = word
    }

    set length(length){
        if(length < 0){
           this.innerLength = 0
        }
        else{
            this.innerLength = length
        }
    }

    get word(){
        return this.innerString
    }

    get length(){
        return this.innerLength
    }

    increase(length){
        this.length += length
    }

    decrease(length){
        this.length -= length
    }

    toString(){
        if(this.length >= this.word.length) return this.word
        else if(this.length === 0) return '...'
        else{
            let newString =  this.word.slice(0,this.length)
            newString = newString + '...'
            return newString
        }
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString()); //Te...

test.decrease(5);
console.log(test.toString()); //...

test.increase(4);
console.log(test.toString()); //Test
