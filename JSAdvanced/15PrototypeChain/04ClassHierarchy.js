function solve(){
    class Figure{

    constructor(){
        if (new.target === Figure)
            throw new Error("Cannot instantiate an abstract class.");
    }
    get area(){
        switch (this.constructor){
            case Circle:
                return Math.PI * this.radius * this.radius
            case Rectangle:
                return this.width*this.height
        }
    }

    toString(){
        let type = this.constructor.name
        let props = Object.getOwnPropertyNames(this)
        return type + ' - '+props.map(p => `${p}: ${this[p]}`).join(', ')
    }
}

class Circle extends Figure{
    constructor(radius){
        super()
        this.radius = radius
    }
}

class Rectangle extends Figure{
    constructor(width,height){
        super()
        this.width = width
        this.height = height
    }
}
return {
        Figure,
    Circle,
    Rectangle
}
}

let r = new Rectangle(4,5)
console.log(r.area);
console.log('' + r)