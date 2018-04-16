export default class Entity{
    constructor(name){
        if(new.target === Entity){
            throw new TypeError('Abstract class')
        }
        this.name = name
    }
}

