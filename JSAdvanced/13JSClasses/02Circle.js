class Circle{
    constructor(radius){
        this.radius = radius
    }
    get radius(){
        return this._radius
    }
    set radius(radius){
        if(radius <= 0) throw new Parametererror('Radius can not be 0 or negative')
        this._radius = radius
    }

    set diameter(diameter){
        this.radius = diameter / 2
    }

    get diameter(){
        return this.radius*2
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }

}

let c = new Circle(7)
console.log(c)
console.log(c.diameter);
c.diameter = 12
console.log(c)
console.log(c.area);