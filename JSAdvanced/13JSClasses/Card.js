let myModule = (() =>{
    let Suits = {
        CLUBS: "\u2663",    // ♣
        DIAMONDS: "\u2666", // ♦
        HEARTS: "\u2665",   // ♥
        SPADES: "\u2660"    // ♠
    }
    let Faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    class Card{
        constructor(face,suit){
            this.face = face
            this.suit = suit;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if(!Object.values(Suits).includes(value)) throw new Error(`No such Suit: ${value}`)
            this._suit = value;
        }


        set face(face){
            if(Card.validFaces.includes(face)){
                this._face = face
            }
            else{
                throw new Error(`No such face: ${face}`)
            }
        }

        get face(){
            return this._face
        }

        toString(){
            return this.face+this._suit
        }
    }

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    validFaces.push = undefined

    Object.defineProperty(Card,'validFaces', {
        value: validFaces,
        enumerable: false,
        writable: false,
        configurable: false
    })
    return {Suits,Card}
})()

let Card = myModule.Card
let Suits = myModule.Suits

console.log(Card.validFaces);

let c1 = new Card('11',Suits.CLUBS)
console.log('' + c1)