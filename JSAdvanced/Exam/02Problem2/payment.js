class PaymentProcessor {
    constructor(options){
        if(options === undefined){
            this.options = {
                types: ["service", "product", "other"],
                precision: 2
            }
        }
        else{
            this.options = {
                types: ["service", "product", "other"],
                precision: 2
            }
                for (let key in options) {
                this.options[key] = options[key]
            }
        }
        this.repo = []
    }

    registerPayment(id, name, type, value){
        if(this._validatePayment(id,name,type,value)){
            let obj = {id,name,type,value}
            this.repo.push(obj)
        }
    }

    deletePayment(id){
        if(this.repo.filter(a => a.id === id).length === 1){
            this.repo = this.repo.filter(a => a.id !== id)
        }
        else{
            throw new Error('No payment with such Id!')
        }

    }

    get(id){
        let payment = this.repo.filter(a => a.id === id)[0]
        if(payment){
            return `Details about payment ID: ${payment['id']}\n- Name: ${payment['name']}\n- Type: ${payment['type']}\n- Value: ${payment['value'].toFixed(this.options.precision)}`

        }
        else{
            throw new Error('No payment with such Id!')
        }
    }

    toString(){
        let repoValues = this.repo.map(a => a.value)
        let sum = repoValues.reduce((a, b) => a + b, 0)
        return `Summary:\n- Payments: ${this.repo.length}\n- Balance: ${sum.toFixed(this.options.precision)}`
    }

    setOptions(options){
        if(options === undefined){
            this.options = {
                types: ["service", "product", "other"],
                precision: 2
            }
        }
        else{
            for (let key in options) {
                this.options[key] = options[key]
            }
        }
    }

    _validatePayment(id,name,type,value){
        if(typeof id !== 'string' || typeof name !== 'string' || id === '' || name === '' || typeof value !== 'number'){
            throw new Error('Invalid pyment!')
        }
        if(!this.options.types.includes(type)){
            throw new Error('Invalid type!')
        }
        if(this.repo.filter(a => a.id === id).length > 0){
            throw new Error('Payment with this Id exists!')
        }
        return true
    }
}

const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
//console.log(generalPayments.repo);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

//generalPayments.deletePayment('E027');
//generalPayments.get('E027');
generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());


