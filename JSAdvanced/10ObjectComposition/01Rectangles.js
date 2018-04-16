function orderRec(arr){
    let orderedRec = []
    for (let rec of arr) {
        let recObj = {
            width: rec[0],
            height: rec[1],
            area: function (){return this.width*this.height},
            compareTo: function(other) {
                let result = other.area() - this.area();
                return result || (other.width - this.width);
            }
        }
        orderedRec.push(recObj)
    }

    return orderedRec.sort((a,b) => a.compareTo(b))
}

console.log(orderRec([[1,20],[20,1],[5,3],[5,3]]));