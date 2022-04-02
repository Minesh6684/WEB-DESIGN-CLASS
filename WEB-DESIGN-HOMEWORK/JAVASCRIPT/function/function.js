// // 1. Calculate the sum of array of numbers: using reduce() method
// nums = [10, 40, 50, 60];
// let sum = nums.reduce((accumulator, currentValue) =>  accumulator + currentValue)
// console.log(sum)


// 2. Create an array of objects as below:
let object = [
    {
        Id: 1,
        Name: 'John',
        Age: 25
    },
    {
        Id: 2,
        Name: 'Sam',
        Age: 28
    },
    {
        Id: 3,
        Name: 'Sara',
        Age: 23
    }

]

// a. iterate through the object,
// b. Diplay the name of the people on the UI(index.html)
// c. Whose age is less than or equal to 25.
document.write('People, whose age is less than or equal to 25:\n')
for (let i=0; i<object.length; i++) {
    if (object[i].Age <= 25) {
        document.write(`${object[i].Name}`)
    }
}

// 3. array.map() method

nums = [10, 40, 50, 60];
let newArrayOfNums = nums.map( (currentValue) => currentValue*3(newArrayOfNums)

/* 4.Create new array of elements,
 where each array element when divided by 2, yields remaindie() */

nums = [10, 40, 50, 60, 5, 23, 24];
const divisibleByTwo = Array()
for (element of nums) {
    if (element%2 === 0) {
        divisibleByTwo.push(element);
    }
}
console.log(divisibleByTwo)

// // 5. 
// function numbers(j) {
//     console.log(`${j} *(after 2 seconds)*`)
// }

// for(let i=1; i<6; i++) {
//     setTimeout(numbers(i), 2000)
// }
