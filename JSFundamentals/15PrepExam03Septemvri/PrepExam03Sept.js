function fatBoy(meals, commands) {
    let mealsEaten = Number(0)

    function serveCommand(){
        if(meals.length > 0) {
            let meal = meals.pop()
            console.log(`${meal} served!`)
        }
    }

    function eatCommand(){
        if(meals.length > 0) {
            let meal = meals.shift()
            mealsEaten++
            console.log(`${meal} eaten`)
        }
    }

    function addCommand(str){
        meals.unshift(str)
    }


    function endCommand(){
        if(meals.length === 0){
            console.log('The food is gone')
        }
        else{
            console.log(`Meals left: ${meals.join(', ')}`)
        }
        console.log(`Meals eaten: ${mealsEaten}`)
    }

    function consumeCommand(start,end){
        if(start >= 0 && start < meals.length && end >= 0 && end < meals.length && start <= end){
            meals.splice(start, end-start+1)
            mealsEaten = mealsEaten + (end-start+1)
            console.log('Burp!')
        }
    }

    function shiftCommand(start,end){
        if(start >= 0 && start < meals.length && end >= 0 && end < meals.length){
            let tempMeal = meals[start]
            meals[start] = meals[end]
            meals[end] = tempMeal
        }
    }

    let endOfCommands = false
    for (let i = 0; i < commands.length; i++) {
        if(endOfCommands) break
        let currentCommand = commands[i].split(' ').filter(a => a !='')

        if(meals.length === 0) {
            if(currentCommand[0] === 'Consume' || currentCommand[0] === 'Shift'
            || currentCommand[0] === 'Eat' || currentCommand[0] === 'Serve')
            continue
        }

        if(currentCommand[0] === 'Shift' && currentCommand.length !== 3) continue
        if(currentCommand[0] === 'Consume' && currentCommand.length !== 3) continue
        if(currentCommand[0] === 'Add' && currentCommand.length !== 2) continue

        switch (currentCommand[0]){
            case 'Serve':
                serveCommand()
                break
            case 'Eat':
                eatCommand()
                break
            case 'Add':
                addCommand(currentCommand[1])
                break
            case 'End':
                endCommand()
                endOfCommands = true
                break
            case 'Shift':
                shiftCommand(Number(currentCommand[1]),Number(currentCommand[2]))
                break
            case 'Consume':
                consumeCommand(Number(currentCommand[1]),Number(currentCommand[2]))
                break
            default:
                break

        }
    }
}

//fatBoy(['carrots', 'apple', 'beet'],['Consume 0 2','End',])

