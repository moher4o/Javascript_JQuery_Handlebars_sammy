function acomodateCouple(roomsArr,couplesArr){
    let roomsMap = parseRooms(roomsArr)
    let teaGuest = coupleWellcome(couplesArr)
    //console.log(roomsMap)

    let sortedRooms = Array.from(roomsMap.keys()).sort()
        .forEach(key => {
            console.log(`Room number: ${key}`)
            let guestsInRoom = []

             roomsMap.get(key).guests.forEach((el,i) => {
                 if(i%2 === 0){
                     let guest = {}
                     guest.name = el
                     guest.age = roomsMap.get(key).guests[i+1]
                     guestsInRoom.push(guest)
                 }
             })
            guestsInRoom = guestsInRoom.sort((a,b) => a.name.localeCompare(b.name))
            guestsInRoom.forEach(g => {
                console.log(`--Guest Name: ${g.name}`)
                console.log(`--Guest Age: ${g.age}`)
            })
            console.log(`Empty beds in the room: ${roomsMap.get(key).beds}`)
        })
    console.log(`Guests moved to the tea house: ${teaGuest}`)



    function coupleWellcome(couplesInnerArr){
        let teaGroup = 0
            for (let couple of couplesInnerArr) {
            if(couple.first.gender != couple.second.gender){
                teaGroup += accomodateStrait(couple)
            }
            else{
               teaGroup += accomodateHomo(couple)
            }
        }
        return teaGroup
    }

    function accomodateHomo(innerCouple){
        let peoples = Object.keys(innerCouple)
            for (let [number, value] of roomsMap){
                if (value.type === 'triple' && value.beds > 0 && (value.gender === undefined || value.gender === innerCouple.first.gender)) {
                    value.gender = innerCouple.first.gender
                    while (value.beds > 0 && peoples.length > 0) {
                        value.guests.push(innerCouple[peoples[0]].name)
                        value.guests.push(innerCouple[peoples[0]].age)
                        peoples.shift()
                        value.beds--
                    }
                }
                if(peoples.length === 0) {
                    return 0
                }
            }

            return peoples.length
    }


    function accomodateStrait(innerCouple){
        for (let [number,value] of roomsMap) {
            if(value.type === 'double' && value.beds>0){
                value.guests.push(innerCouple.first.name)
                value.guests.push(innerCouple.first.age)
                value.guests.push(innerCouple.second.name)
                value.guests.push(innerCouple.second.age)
                value.beds = 0
                value.gender = 'couple'
                return 0
            }
        }
        return 2
    }

    function parseRooms(rooms){
        let inerRoomMap = new Map()
        for (let room of rooms) {
            let bedCount = room.type === 'triple' ? Number(3) : Number(2)
            inerRoomMap.set(room.number, {type: room.type === 'triple' ? 'triple' : 'double', beds: bedCount, gender: undefined, guests: []})
        }
        return inerRoomMap
    }
}

let roomObj = [ { number: '101A', type: 'double-bedded' },
    { number: '104', type: 'triple' },
    { number: '101B', type: 'double-bedded' },
    { number: '102', type: 'triple' } ]
let couplesObj = [ { first: { name: 'Sushi & Chicken', gender: 'female', age: 15 },
    second: { name: 'Salisa Debelisa', gender: 'female', age: 25 } },
    { first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 },
        second: { name: 'Jeko Snejev', gender: 'male', age: 18 } },
    { first: { name: 'Pesho Goshov', gender: 'male', age: 20 },
        second: { name: 'Gosho Peshov', gender: 'male', age: 18 } },
    { first: { name: 'Conor McGregor', gender: 'male', age: 29 },
        second: { name: 'Floyd Mayweather', gender: 'male', age: 40 } } ]

acomodateCouple(roomObj,couplesObj)