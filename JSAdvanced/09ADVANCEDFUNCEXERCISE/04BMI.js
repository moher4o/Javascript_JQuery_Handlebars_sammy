function solve(name, age, weight, height){
    let person = {}

    person.name = name
    person.personalInfo = {}
    person.personalInfo.age = age
    person.personalInfo.weight = Number(weight)
    person.personalInfo.height = Number(height)

    person.BMI = person.personalInfo.weight / (person.personalInfo.height/100*person.personalInfo.height/100)

    person.status = (function status(bmi){
        if(bmi < 18.5) return 'underweight'
        else if(bmi < 25) return 'normal'
        else if(bmi < 30) return 'overweight'
        else if(bmi >= 30) {
            return 'obese'
        }
    })(person.BMI)
    if(person.status === 'obese')
    person.recommendation = 'admission required'
    person.BMI = Math.round(person.BMI)
    //console.log(person)
    return person
}

solve('Peter', 9, 57, 137)

function inp(){
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}