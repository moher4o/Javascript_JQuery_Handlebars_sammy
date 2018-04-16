class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}


function persons(){
    class Person{
        constructor(firstName, lastName, age, email){
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
        }

        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }


    let maria = new Person('Maria','Petrova',22,'mp@yahoo.com')
    let uni = new Person('SoftUni')
    let stefan = new Person('Stephan','Nikolov',25)
    let petar = new Person('Peter','Kolev',24,'ptr@gmail.com')
    let arr = []
    arr.push(maria,uni,stefan,petar)
    return arr
}

