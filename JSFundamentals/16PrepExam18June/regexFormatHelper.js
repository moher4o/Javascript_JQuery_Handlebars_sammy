function format(arr){

    let regex1 = /[.,!?:;][^ ]/gm
    let input = arr[0]
    let match = input.match(regex1)
    let output = input
    while(match){
        let strMatch = match[0]
        let result = strMatch[0] + ' ' + strMatch[1]
        if (output === undefined)
        output = input.replace(match[0],result)
        else
            output = output.replace(match[0],result)
         match = output.match(regex1)
    }
    console.log(input)
    //console.log(output)

    let regex2 = /\s+[.,!?:;]/g
    match = []
    match = output.match(regex2)
    while(match){
        let strMatch = match[0]
        let result =strMatch[strMatch.length-1]
        output = output.replace(match[0],result)
        match = output.match(regex2)

    }
    //console.log(output)

    let regex3 = /[.,!?:;][\s]{2,}/gm
    match = []
    match = output.match(regex3)
    while(match){
        let strMatch = match[0]
        let result =strMatch[0]+ ' '
        output = output.replace(match[0],result)
        match = output.match(regex3)

    }
    //console.log(output)

    let regex4 = /\s*\.\s*\.\s*\.\s*!/gm
    match = []
    match = output.match(regex4)
    while(match){
        let strMatch = match[0]
        if(strMatch === '...!') break
        let result ='...!'
        output = output.replace(match[0],result)
        match = output.match(regex4)

    }
    //console.log(output)

    let regex5 = /\.\s+\d/gm
    match = []
    match = output.match(regex5)
    while(match){
        let strMatch = match[0]
        let result =strMatch[0] + strMatch[strMatch.length-1]
        output = output.replace(match[0],result)
        match = output.match(regex5)

    }
    //console.log(output)

    let regex6 = /"(.*)"/gm
    match = []
    match = regex6.exec(output)
    while(match){
        let strMatch = match[1]
        strMatch = strMatch.trim()
        let result =`"${strMatch}"`
        output = output.replace(match[0],result)
        match = regex6.exec(output)

    }
    console.log(output)

}

//format(['Terribly formatted text      .  With chaotic spacings." Terrible quoting   "! Also this date is pretty confusing : 20   .   12.  16 . '])
//format(['Make,sure to give:proper spacing where is needed... ! '])
format(['Test everything, including:dates    : 4.     3         .10, digits:1,2,3,4,numbers :  14.4,15.6,3. Quotation should be should be trimmed after additional spaces are given:"Quote should remain the same, even with explanation mark in the end!"; this quote should be trimmed in the beginning: "   Trim start"!'])