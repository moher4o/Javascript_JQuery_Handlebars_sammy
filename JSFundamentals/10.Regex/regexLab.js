function checkInput(str){
    console.log(str);
}

function matchAllWords10(str){
    let regex = /\w+/g
    let arr = []
    str.match(regex).forEach(r => {
        arr.push(r)
    })
    console.log(arr.join('|'))
}
//matchAllWords10('A Regular Expression needs to have the global flag in order to match all occurrences in the text')

function simpleEmailValidation11(str){
    let regex = /^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/
    if(regex.test(str)) {
        console.log('Valid')
    }
    else{
        console.log('Invalid')
    }
}

//simpleEmailValidation11('valid@email.bg')


function expressionSplit(str){
    let arr = str.split(/[(),;.\s]+/)
    console.log(arr.join('\n'))
}
//expressionSplit('let sum = 4 * 4,b = "wow";')

function matchDates(arr){
    let regex = /\b(\d{1,2})-([a-zA-Z]{3})-(\d{4})/gm
    let match=[]
    arr.forEach(str => {
        while(match = regex.exec(str)){
            console.log(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`)
        }
    })
}

//matchDates(['I am born on 30-Dec-1994.','This is not date: 512-Jan-1996.',
   // 'My father is born on the 29-Jul-1955.'])

function employeeData(arr){
    let regex = /^\b([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([a-zA-Z0-9 -]+)$/g
    let employees = [],match
    arr.forEach(str => {
        while(match = regex.exec(str)){
            employees.push(`Name: ${match[1]}`)
            employees.push(`Position: ${match[3]}`)
            employees.push(`Salary: ${match[2]}`)
        }
    })
    console.log(employees.join('\n'))
}

//employeeData(['Jonathan - 2000 - Manager',
//'Peter- 1000- Chuck',
//'George - 1000 - Team Leader'])

function placeHolders(username, email, phone, text){
    text.forEach(line => {
        line = line.replace(/<![A-Za-z]+!>/g, username)
        line = line.replace(/<@[A-Za-z]+@>/g, email)
        line = line.replace(/<\+[A-Za-z]+\+>/g, phone)
        console.log(line);
    })
}

function replaceFunction(text) {
    text = text.replace(/\b(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1) * Number(num2));
    console.log(text);
}
replaceFunction('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')