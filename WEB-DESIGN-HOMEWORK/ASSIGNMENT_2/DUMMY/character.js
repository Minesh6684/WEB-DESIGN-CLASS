const cityOfCharacters = [
    {
        'name': 'Harry Potter',
        'city': 'London'
    },
    {
        'name': 'Don Quixote',
        'city': 'Madrid'
    },
    {
        'name': 'Joan Of Arc',
        'city': 'Paris'
    },
    {
        'name': 'Rosa Park',
        'city': 'Alabama'
    },
    {
        'name': 'John',
        'city': 'Paris'
    }
];

//A). DISPLAY ALL USERNAME
const answer1 = document.querySelector('.answer1')
cityOfCharacters.forEach((character) => {
    const userName = character.name;
    const li = document.createElement('li');
    li.innerHTML = `${userName}`;
    answer1.appendChild(li);
})

//B). DISPLAY ALL USERNAME FROM CITY OF LONDON
const answer2 = document.querySelector('.answer2');
const userFromLondon = cityOfCharacters.filter((element) => {
    return element.city === 'London';
}).map(elementFromLondon => 
    elementFromLondon.name).forEach(Name => {
        const li = document.createElement('li');
        li.innerHTML = `${Name}`;
        answer2.appendChild(li);
    })


//C). DISPLAY USERNAME FROM SAME CITY
// const usersFromSameCity = cityOfCharacters.map((element, index, array) => {
//     const userFromSameCity = new Object;
//     let userCount = 0;
//     const users = [];
//     array.forEach((el, ind, arr) => {
//         if (element.city === el.city) {
//             userCount++
//             users.push(el.name);
//         }
//     })
//     if (userCount > 1) {
//         userFromSameCity.city = element.city;
//         userFromSameCity.name = users;
//     }
//     return userFromSameCity;
// }).filter((element) => {
//     if(element !== undefined){
//         return true
//     }
//     return false
// })
// console.log(usersFromSameCity)

let k = 1;
const usersWithSameCity = []
for (let i=0; i<cityOfCharacters.length; i++) {
    const userWithSameCity = {}
    let userCount = 1;
    const users = []
    for(let j=k; j<cityOfCharacters.length; j++) {
        if(cityOfCharacters[i].city === cityOfCharacters[j].city) {
            userCount++;
            users.push(cityOfCharacters[i].name)
            users.push(cityOfCharacters[j].name)
        }
    }
    if(userCount > 1) {
        userWithSameCity.city = `${cityOfCharacters[i].city}`;
        userWithSameCity.name = users;
        usersWithSameCity.push(userWithSameCity);
    }
    k++
}

const answer3 = document.querySelector('.answer3')
usersWithSameCity.forEach((element) => {
    const li = document.createElement('li');
    li.innerHTML = `City: ${element.city}, Characters: ${element.name}`;
    answer3.appendChild(li);
})

