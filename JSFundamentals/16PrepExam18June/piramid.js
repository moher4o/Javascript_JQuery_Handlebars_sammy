function bildMat(base, high) {
    let step = 1
    let stoneCount = 0
    let marbleCount = 0
    let lapisCount = 0
    let goldCount = 0
    for (let i = base; i > 0; i -= 2) {
        //stoneCount += (i-2)*(i-2)
        stoneCount += Math.pow(Math.max(0, (i - 2)), 2)

        if ((i - 2) > 0) {
            let outerLayer = (4 * i) - 4
            if (step % 5 === 0) lapisCount += outerLayer
            else marbleCount += outerLayer
        }
        else {
            goldCount += i * i
        }
        step++
    }
    step--

    console.log(`Stone required: ${Math.ceil(stoneCount * high)}`)
    console.log(`Marble required: ${Math.ceil(marbleCount * high)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisCount * high)}`)
    console.log(`Gold required: ${Math.ceil(goldCount * high)}`)
    console.log(`Final pyramid height: ${Math.floor(step * high)}`)
}


    bildMat(12,1)