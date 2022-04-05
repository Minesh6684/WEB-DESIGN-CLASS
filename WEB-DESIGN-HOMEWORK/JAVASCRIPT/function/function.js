// 1. Calculate the sum of array of numbers: using reduce() method
var nums = [10, 40, 50, 60];
let sum = nums.reduce((accumulator, currentValue) =>  accumulator + currentValue)
console.log(sum);

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

];

// a. iterate through the object,
// b. Diplay the name of the people on the UI(index.html)
// c. Whose age is less than or equal to 25.
document.write('People, whose age is less than or equal to 25:\n')
for (let i=0; i<object.length; i++) {
    if (object[i].Age<= 25) {
        document.write(`\n${object[i].Name}`);
    }
}

/* 3. Multiply each element of nums array 
and store result as an array to new array 
using array.map() method */

var nums = [10, 40, 50, 60];
let newArrayOfNums = nums.map( (currentValue) => currentValue * 3);
console.log(newArrayOfNums);

/* 4.Create new array of elements,
 where each array element when divided by 2, 
 yields remainder 0. */

var nums = [10, 40, 50, 60, 5, 23, 24];
const divisibleByTwo = Array();
for (element of nums) {
    if (element%2 === 0) {
        divisibleByTwo.push(element);
    }
}
console.log(divisibleByTwo)

/* 5. Using setTimeout(), print from 1 to 5,
    wherre each element need to be display
    after 2seconds delay.*/

const printNumberAt2SecondsInterval = (endpoint) => {
    for(let i=1; i<=endpoint; i++) {
        setTimeout( () => {
            console.log(`${i} *(after 2 seconds)*`)
        }, i * 2000)
    }
}
printNumberAt2SecondsInterval(5)
