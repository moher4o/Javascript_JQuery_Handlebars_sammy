let arr = require('./data')

function sort(property) {
   return arr.sort((a,b) => a[property].localeCompare(b[property]))

    //return arr
}

function filter(property, value){
    arr = arr.filter(a => a[property] === value)
    return arr
}

module.exports = {sort,filter}