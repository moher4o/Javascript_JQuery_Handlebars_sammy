function elections(arr){
    let allCandidates = {}

    let systemWinners = []
    let starSystems = new Map()
    let votesSum = 0
    sumVotes()
    rearangeVotes()

    let sortedCandidates = Object.keys(allCandidates).sort((a,b) => {
        if(allCandidates[a] > allCandidates[b]){
            return -1
        }else if(allCandidates[a] < allCandidates[b]){
            return 1
        }
        return 0
    })

    if(allCandidates[sortedCandidates[0]] > votesSum/2){
        console.log(`${sortedCandidates[0]} wins with ${allCandidates[sortedCandidates[0]]} votes`)

     let secondPlaceWinner = systemWinners.sort(function (a,b){
            if(a.votes < b.votes){
                return 1
            }else if(a.votes > b.votes){
                return -1
            }
            return 0
        }).filter(c => c.name === sortedCandidates[1])

        if(secondPlaceWinner.length>0){
        console.log(`Runner up: ${sortedCandidates[1]}`)
        for (let i = 0; i < secondPlaceWinner.length; i++) {
            console.log(`${secondPlaceWinner[i].system}: ${secondPlaceWinner[i].votes}`)

        }
        }
        else{
           console.log(`${sortedCandidates[0]} wins unopposed!`)
        }

    }
    else{
        let winnerPercent = Math.floor(allCandidates[sortedCandidates[0]]*100/votesSum)
        let secondPlacePercent = Math.floor(allCandidates[sortedCandidates[1]]*100/votesSum)
        console.log(`Runoff between ${sortedCandidates[0]} with ${winnerPercent}% and ${sortedCandidates[1]} with ${secondPlacePercent}%`)
    }

    // console.log(starSystems)
    // console.log(allCandidates)
    // console.log(sortedCandidates)
    // console.log(votesSum);

    function sumVotes() {
        for (let i = 0; i < arr.length; i++) {
            votesSum+=Number(arr[i].votes)
            if (starSystems.has(arr[i].system)) {
                let candidates = starSystems.get(arr[i].system)
                if (candidates.has(arr[i].candidate)) {
                    candidates.set(arr[i].candidate, candidates.get(arr[i].candidate) + Number(arr[i].votes))
                    starSystems.set(arr[i].system, candidates)
                }
                else {
                    candidates.set(arr[i].candidate, arr[i].votes)
                    starSystems.set(arr[i].system, candidates)
                }
            }
            else {
                let newCandidate = new Map()
                newCandidate.set(arr[i].candidate, arr[i].votes)
                starSystems.set(arr[i].system, newCandidate)
            }

            if(!allCandidates.hasOwnProperty(arr[i].candidate)){
                allCandidates[arr[i].candidate] = 0
            }
        }
    }

    function rearangeVotes(){

            for (let [system, candidates] of starSystems) {
                let systemWinner = {}
                let totalSystemVotes = 0
                let maxVotes = 0
                let winnerName
                for(let [name, votes] of candidates){
                   totalSystemVotes+=votes
                   if(votes > maxVotes){
                       maxVotes = votes
                       winnerName = name
                   }
                }
                allCandidates[winnerName] += totalSystemVotes
                systemWinner.system = system
                systemWinner.name = winnerName
                systemWinner.votes = totalSystemVotes
                systemWinners.push(systemWinner)
            }

    }


}

elections([ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
    { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
    { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
    { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
    { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
    { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
    { system: 'Omicron', candidate: 'Octocat',       votes: 75 } ]
)