let solve = (function () {
    class Person{
        constructor(name, email){
            this.name = name
            this.email = email
        }
        toString(){
            let className = this.constructor.name
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person{
        constructor(name, email, subject){
            super(name,email)
            this.subject = subject
        }
        toString(){
            let parentStr = super.toString().slice(0,-1)
            return `${parentStr}, subject: ${this.subject})`
        }
    }

    class Student extends Person{
        constructor(name, email, course){
            super(name,email)
            this.course = course
        }
        toString(){
            let parentStr = super.toString().slice(0,-1)
            return `${parentStr}, course: ${this.course})`
        }

    }

    return {
        Person,
        Teacher,
        Student
    }

}())

let Person = solve.Person
let Teacher = solve.Teacher
let Student = solve.Student
let p = new Person("Pesho",'Pesho@pesh.com');
//console.log(Person);
let maria = new Person('Maria','maria@abv.bg')
let pesho = new Student('Pesho','pesho@abv.bg', 'C#')
//
//console.log(maria.toString());
//console.log(p.toString())

function extendPrototype(baseClass){
    baseClass.prototype.species = 'Human'
    baseClass.prototype.toSpeciesString = function(){
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendPrototype(Person)
console.log(p.toSpeciesString());
