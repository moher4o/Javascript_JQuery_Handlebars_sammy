function operands(arr){
    let numbers = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== '+' && arr[i] !== '-' && arr[i] !== '*' && arr[i] !== '\/') numbers.push(Number(arr[i]))
        else{
            let result = calculate(arr[i])
            if (result === 'error') return
        }

    }

    if(numbers.length === 1)
        console.log(numbers[0])
    else
        console.log(`Error: too many operands!`)

    function calculate(operand){
        if(numbers.length<2){
            console.log(`Error: not enough operands!`)
            return 'error'
        }
        else{
            switch (operand){
                case '+':
                    numbers[numbers.length-2] = numbers[numbers.length-2] + numbers[numbers.length-1]
                    numbers.pop()
                    break
                case '-':
                    numbers[numbers.length-2] = numbers[numbers.length-2] - numbers[numbers.length-1]
                    numbers.pop()
                    break
                case '*' :
                    numbers[numbers.length-2] = numbers[numbers.length-2] * numbers[numbers.length-1]
                    numbers.pop()
                    break
                case '\/' :
                    numbers[numbers.length-2] = numbers[numbers.length-2] / numbers[numbers.length-1]
                    numbers.pop()
                    break
                default:
                    break
            }
            return 'ok'
        }
    }
}

operands([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
)