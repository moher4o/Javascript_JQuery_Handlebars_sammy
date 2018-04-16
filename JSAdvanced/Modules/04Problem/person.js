import Entity from './entity.js'
import Dog from './dog.js'

export default class Person extends Entity{
    constructor(name, phrase, dog){
        super(name)
        this.phrase = phrase
        this.dog = dog
    }

    saySomething(){
        return `${this.name} says: ${this.phrase}${this.dog.name} barks!`
    }
}

