class SortedList{
    constructor(){
        this.arr = []
        this.size = Number(0)
    }

    add(value){
        this.arr.push(value)
        this.arr = this.arr.sort((a,b) => a-b)
        this.size++
    }

    remove(index){
        if(this.size>0 && index>=0 && index<=this.size) {
            this.arr.splice(index, 1)
            this.size--
        }
    }
    get(index){
        if(this.size>0 && index>=0 && index<=this.size)
        return this.arr[index]
    }
}

let arr = new SortedList()
console.log(arr.get(0))
console.log(arr.size); //0
arr.add(5)
arr.add(2)
arr.add(3)
console.log(arr.get(1));// 3
console.log(arr.size); //3
arr.remove(0)
console.log(arr.size); //2
arr.add(1)
console.log(arr.get(0));// 1