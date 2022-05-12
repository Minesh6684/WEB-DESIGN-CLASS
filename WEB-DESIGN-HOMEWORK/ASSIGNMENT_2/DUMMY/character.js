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

    //Usage of DOM to get element through its class and store it as an object
const answer1 = document.querySelector('.answer1')

    //Iteration over cityOfCharacters elements and fetchiong it's name value
cityOfCharacters.forEach((character) => {
    const userName = character.name;
    const li = document.createElement('li');
    li.innerHTML = `${userName}`;
    answer1.appendChild(li);
})


//B). DISPLAY ALL USERNAME FROM CITY OF LONDON
const answer2 = document.querySelector('.answer2');

    // ARRAY.filter() method filter the ARRAY based on passed condition in callBack Function
    // ARRAY.map() method executes all the statements and stores return statement in a new array.
const userFromLondon = cityOfCharacters.filter((element) => {
    return element.city === 'London';
}).map(elementFromLondon => 
    elementFromLondon.name).forEach(Name => {
        const li = document.createElement('li');
        li.innerHTML = `${Name}`;
        answer2.appendChild(li);
})


//C). DISPLAY USERNAME FROM SAME CITY

const answer3 = document.querySelector('.answer3')
const userNameFromSameCity = [];
cityOfCharacters.forEach((element,index, array) => {
    const cityAndUser = {}; // To store city along with it's userName 
    const sameCityUserName = []; // TO store Multiple user if any from same place
    array.reduce((PV, CV, arr) => {
        // Storing the name of user if their city is same
        if(PV.city === CV.city) {
            sameCityUserName.push(PV.name);
            sameCityUserName.push(CV.name);
        }
        return PV // To keep previous value same everytime
    },)
    if (sameCityUserName.length > 1) {
        cityAndUser.city = element.city;
        cityAndUser.name = sameCityUserName;
        userNameFromSameCity.push(cityAndUser)
    }
    /* To avoid Duplicating of result, removing first element of array after
        first loop */
    array.shift(); 
})
userNameFromSameCity.forEach(element => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(JSON.stringify(element)));
    answer3.appendChild(li);
})





