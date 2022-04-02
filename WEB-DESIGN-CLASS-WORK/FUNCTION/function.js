function showMessage() {
    console.log('Message from normal function')
}


// E6+ Arrow function

showMessageWithArrow = (function_type) => {
    console.log(`Message with ${function_type} Function`)
}

showMessageWithArrow('Arrow1')

// store the return value of a function at begining to use it

const result = arrowFunction = (number) => {
    let sum = 20 + number
    console.log(`Sum: ${sum}`)
}

arrowFunction(10)

greet = (Name) => {
    return `Good Morning ${Name}`
}

Name = () => {
    return 'Minesh'
}

const result = greet('MInesh')
console.log(result)

setTimeout( delayFunction = () => {
    console.log("Delayed function")
}, 3000)

console.log('2nd Execution')

const listPlayer = Array();
let listFunction = new Array();

const arrayNumber = [1, 2, 3, 4, 5]

for (let i=0; i<arrayNumber.length; i++) {
    ar.push(arrayNumber[i] * 2)
}
console.log(arrayNumber)

map function
let results = new Array()
arrayNumber.map((element) => {
    results.push(element * 2);
})

console.log(results)

const results = arrayNumber.map ((element) => element * 3)
console.log(results)