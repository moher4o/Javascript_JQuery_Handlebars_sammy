function airportStats(arr){
    let airport = new Set()
    let towns = {}

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split(' ').filter(a => a!=' ')
        let action = tokens[3]
        if (action === undefined) continue
        let plane = tokens[0]
        let currenttown = tokens[1]
        let currentpassengers = Number(tokens[2])

        if(action === 'land'){
            if(airport.has(plane)) continue
            else airport.add(plane)

            if(towns.hasOwnProperty(currenttown)){
                towns[currenttown]['arrivals'] += currentpassengers
            }
            else{
                towns[currenttown]={}
                towns[currenttown]['arrivals'] = currentpassengers
                towns[currenttown]['departures'] = 0
                towns[currenttown]['planes'] = new Set()
            }
        }

        if(action === 'depart'){
            if(!airport.has(plane)) continue
            else airport.delete(plane)

            if(towns.hasOwnProperty(currenttown)){
                towns[currenttown]['departures'] += currentpassengers
            }
            else{
                towns[currenttown]={}
                towns[currenttown]['arrivals'] = 0
                towns[currenttown]['departures'] = currentpassengers
                towns[currenttown]['planes'] = new Set()
            }
        }
        towns[currenttown]['planes'].add(plane)
    }

    let planeOutput = Array.from(airport).sort((a,b) => a.localeCompare(b))
    let townsOutput = Object.keys(towns).sort((a,b) => {
        if(towns[a].arrivals > towns[b].arrivals) return -1
        else if(towns[a].arrivals < towns[b].arrivals) return 1
        else{
            return a.localeCompare(b)
        }
    })

    console.log('Planes left:')
    planeOutput.forEach(plane => console.log(`- ${plane}`))

    for(let town of townsOutput){
        console.log(town)
        console.log(`Arrivals: ${towns[town].arrivals}`)
        console.log(`Departures: ${towns[town].departures}`)
        console.log('Planes:')
        Array.from(towns[town].planes).sort((a,b) => a.localeCompare(b))
            .forEach(pl => console.log(`-- ${pl}`))

    }

}

airportStats([  "Boeing474 Madrid 300 land",  "AirForceOne WashingtonDC 178 land",  "Airbus London 265 depart",  "ATR72 WashingtonDC 272 land",  "ATR72 Madrid 135 depart" ] )