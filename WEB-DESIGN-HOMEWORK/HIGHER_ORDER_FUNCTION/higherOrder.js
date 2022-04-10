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
// function side() {
//     let a = prompt('Enter size of a side A: ');
//     let area = a*a;
//     alert(`${area}`);
// }

// function squareArea(callback) {
//     callback();
// }

// squareArea(side)

/*
array.forEach method insted of for loop 
*/
companies.forEach((object) => console.log(object.name))
