class Player{
    constructor(nickName){
        this.nickName = nickName
        this.scores = []
    }

    get scoreCount(){
        return this.scores.length
    }

    get highestScore(){
        if(this.scores.length === 0) return undefined
        return Math.max(...this.scores)
    }

    get topFiveScore(){
        return this.scores.sort((a,b) => b-a).slice(0,5)
    }

    addScore(score){
        if(this._checkScore(score)){
            let num = Number(score)
            this.scores.push(num)
        }
        console.log(this.scores);
    }

    toString(){
        if(this.scores.length === 0){
            return `${this.nickName}: []`
        }
        else{
            return `${this.nickName}: [${this.scores.sort((a,b) => b-a)}]`
        }
    }

    _checkScore(score){
        console.log(typeof score)
        return !isNaN(score)
    }

}

let jon = new Player('John')
// jon.addScore(5)
// jon.addScore('6')
// jon.addScore(2)
// jon.addScore(9)
// jon.addScore(1)
// jon.addScore(12)
// jon.addScore('opit')
console.log(jon.scoreCount);
console.log(jon.highestScore);
console.log(jon.topFiveScore);
console.log(''+ jon)
console.log('Score count: ' + jon.scoreCount);

