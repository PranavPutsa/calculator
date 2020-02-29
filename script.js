const calculatorScreen = document.querySelector('.calculator_screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) =>{
    if(currentInput === '0')
    {
        currentInput = number
    }
    else
    {
        currentInput += number
    }
}

const inputOperator = (operator) =>{
    prevInput = currentInput
    calculationOperator = operator
    currentInput = '0'
}

const numbers=document.querySelectorAll(".number")

numbers.forEach((number) =>
{
    number.addEventListener("click",(event)=>
    {
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})

let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'

const operators=document.querySelectorAll(".operator")

operators.forEach((operator) =>
{
    operator.addEventListener("click",(event)=>
    {
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal_sign')

equalSign.addEventListener('click',()=>{
    calculate()
    updateScreen(currentInput)
})

const allClear = document.querySelector('.all_clear')

allClear.addEventListener('click',()=>{
    currentInput = '0'
    updateScreen(currentInput)
})

const Decimal = document.querySelector('.decimal')

Decimal.addEventListener('click',()=>{
    currentInput = currentInput + '.'
    updateScreen(currentInput)
})

const percent = document.querySelector('.percentage')

percent.addEventListener('click',()=>{
    result = parseFloat(currentInput) / 100
    currentInput = result.toString()
    updateScreen(currentInput)
})

const calculate = () =>{
    let result = 0
    switch(calculationOperator)
    {
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput)
            break
        case '-':
            result = parseFloat(prevInput) - parseFloat(currentInput)
            break
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput)
            break
        case '/':
            result = parseFloat(prevInput) / parseFloat(currentInput)
            break
        default:
            return
    }
    currentInput = result.toString()
    calculationOperator = ''
}