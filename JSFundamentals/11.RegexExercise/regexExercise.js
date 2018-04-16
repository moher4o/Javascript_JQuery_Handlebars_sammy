function splitString(str, del){
    let arr = str.split(del)
    arr.forEach(el => {
        console.log(el);
    })
}

//splitString('One-Two-Three-Four-Five', '-')

function repeatString(str,n){
    console.log(str.repeat(Number(n)))
}

//repeatString('repeat',5)

function startWithEl(str, startEl){
    if(str.startsWith(startEl)){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

//startWithEl('How have you been?','How have you been?')

function endsWithEl(str, startEl){
    if(str.endsWith(startEl)){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

function capitalize(str){
    let arr = str.split(' ')
    let capitalized = []
    arr.forEach(el => {
        capitalized.push(el[0].toUpperCase() + el.substring(1).toLowerCase())
    })
    console.log(capitalized.join(' '))
}

//capitalize('Was that Easy? tRY thIs onE for SiZe!')

function numbers(arr){
    let regex = /\d+/g
    let numbers = [], match = []
    arr.forEach(str => {
        //match.push(str.match(regex))
        if(match = str.match(regex)){
          match.forEach(el => {
              numbers.push(el)
          })
        }

    })

    console.log(numbers.join(' '));
}

//numbers(['The300','What is that?','I think it’s the 3rd movie.','Lets watch it at 22:45'])

function variables(str){
    let regex = /\b_([a-zA-Z0-9]+)\b/g
    let strVar = []
    while(match = regex.exec(str)){
        strVar.push(match[1])
    }

    console.log(strVar.join(','))
}
//variables("__invalidVariable _evenMoreInvalidVariable_ _validVariable")

function wordRepeat(text,str){
    str = '\\b'+str+'\\b'
    let regex = new RegExp(str,'ig')
    let match = text.match(regex)
    if(match)
        console.log(match.length)
    else
        console.log(0)
}
//wordRepeat('The waterfall was so high, that the child couldn’t see its peak.','the')

function extractDomain(arr){
    let regex = /\bwww\.[a-zA-Z0-9-]+\.[.a-z]+\b/g
    let match = []
    arr.forEach(str => {
       match = str.match(regex)
        if(match)
       match.forEach(domain => console.log(domain))
    })
}

//extractDomain([ 'Join WebStars now for free, at www.web-stars.com',
//    'You can also support our partners:',
 //   'Internet - www.internet.com',
//    'WebSpiders - www.webspiders101.com',
  //  'Sentinel - www.sentinel.-ko ' ])

function hide(arr){
    let regexNames = /(\*[A-Z]{1}[a-zA-z]*)(?= |\t|$)/g
    let regexPhones = /(\+[0-9\-]{10})(?= |\t|$)/g
    let regexId = /(\![a-zA-Z0-9]+)(?= |\t|$)/g
    let regexBases = /(\_[a-zA-Z0-9]+)(?= |\t|$)/g

    let output = ''
    arr.forEach(str => {
        //let matchFirst = str.exec(regexNames)
        str = str.replace(regexNames, (match)=>'|'.repeat(match.length))
        str = str.replace(regexPhones, (match)=>'|'.repeat(match.length))
        str = str.replace(regexId, (match)=>'|'.repeat(match.length))
        str = str.replace(regexBases, (match)=>'|'.repeat(match.length))
        output += str + '\n'
    })

    console.log(output)
}

hide([ 'Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number. ',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...' ])