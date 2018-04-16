function mapSort(map, sortFn){
    let mapKeys = []
    if(sortFn){
        mapKeys = Array.from(map.keys())
            .sort(sortFn)
    }
    else{
        mapKeys = Array.from(map.keys())
            .sort((w,v) => {
                if(typeof w === 'number')
                    return w-v
                else
                    return w.localeCompare(v)
            })
    }
    let myMap = new Map()
    for (let key of mapKeys) {
        myMap.set(key, map.get(key))
    }
    return myMap

}

module.exports = mapSort
