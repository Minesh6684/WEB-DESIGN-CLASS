const companies = [
    {name: 'company 1', category: 'Finance', start: 1981, end: 2003},
    {name: 'company 2', category: 'Retail', start: 1992, end: 2008},
    {name: 'company 3', category: 'Auto', start: 1999, end: 2007},
    {name: 'company 4', category: 'Retail', start: 1989, end: 2010},
    {name: 'company 5', category: 'Technology', start: 2009, end: 2014},
    {name: 'company 6', category: 'Finance', start: 1987, end: 2010},
    {name: 'company 7', category: 'Auto', start: 1986, end: 1996},
    {name: 'company 8', category: 'Technology', start: 2011, end: 2016},
    {name: 'company 9', category: 'Retail', start: 1981, end: 1989},
]

const ages = [23, 24, 25, 26, 30, 35, 27, 78, 89, 56]

// Higher-Order Function - Function takes another function as parameter
function side() {
    let a = prompt('Enter size of a side A: ');
    let area = a*a;
    alert(`${area}`);
}

function squareArea(callback) {
    callback();
}

squareArea(side)

/*
array.forEach method insted of for loop 
*/
companies.forEach((object) => console.log(object.name))

/* 
    Use of array.reduce() method

    array.reduce(callback fn, initialValue)
    --> callback fn(previousValue, currentValue, index, array) {
        return 
    }

    return of a current callback will be previousValue of the next iteration,
    while currentValue for the next iteration will be array element 
*/

const nums = [10, 11, 12, 13, 14]
function reducer (previousValue, currentValue, index, array) {
    sum = previousValue + currentValue;
    console.log(`Previous: ${previousValue}, Current: ${currentValue}, Index: ${index}, Array: ${array}`);
    return sum;
}

nums.reduce(reducer)

/*
    array.filter(callback fn, thisArg) method

    callback fn (element, index, array) {}
    
*/