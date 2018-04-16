//(north|east)(?:(?!\d{2}).)*([\d]{2})[^,]*\,(?:(?!\d{6}).)*(\d{6})
function lostRegex(keyword, text){
    let regex = /(north|east)[\D]*([\d]{2})[^,]*\,[\D]*([\d]{6})/gi

    let match = regex.exec(text)
    let latitude, longitude
    while(match){
        if(match[1].toLowerCase() === 'north')
            latitude = match[2]+'.'+match[3]
        if(match[1].toLowerCase() === 'east')
            longitude = match[2]+'.'+match[3]
        match = regex.exec(text)
    }

    console.log(`${latitude} N`)
    console.log(`${longitude} E`)

    let regexMessage = new RegExp(keyword+'(\.*)'+keyword, 'ig')
    let message = regexMessage.exec(text)
    console.log(`Message: ${message[1]}`)
}

    let key = "&amp"
    let text = "(&ampThe only time to eat diet food is while you're waiting for the steak to cook&amp(east)(23),(234567)\tNORTH\n" +
        "48,(((543678"
lostRegex(key, text)