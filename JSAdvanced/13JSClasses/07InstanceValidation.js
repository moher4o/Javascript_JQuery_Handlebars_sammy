class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    set clientId(value) {
        if(!/^\d{6}$/g.test(value)) throw new TypeError('Client ID must be a 6-digit number')
        this._clientId = value;
    }

    set email(value) {
        if(!/[A-za-z0-9]+@[A-za-z.]+/g.test(value)) throw new TypeError('Invalid e-mail')
        this._email = value;
    }

    set firstName(value) {
        if(value.length<3 || value.length>20) throw new TypeError('First name must be between 3 and 20 characters long')
        if(!/^[A-za-z]+$/g.test(value)) throw new TypeError('First name must contain only Latin characters')
        this._firstName = value;
    }

    set lastName(value) {
        if(value.length<3 || value.length>20) throw new TypeError('Last name must be between 3 and 20 characters long')
        if(!/^[A-za-z]+$/g.test(value)) throw new TypeError('Last name must contain only Latin characters')
        this._lastName = value;
    }
    get clientId() {
        return this._clientId;
    }

    get email() {
        return this._email;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

}

let acc = new CheckingAccount('4234145', 'petkan@another.co.uk', 'Petkan', 'Draganov')