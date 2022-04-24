const url = 'https://restcountries.com/v2/all';

async function getAllCountriesFromApi() {
    const response = await fetch(url);
    const data = await response.json();
    const out = document.querySelector('#displayData');
    
    const ul = document.createElement('ul')
    data.forEach(function (element) {
        const li = document.createElement('li');
        const countryName = document.createTextNode(`${element.name}`);
        li.appendChild(countryName);
        ul.appendChild(li);
    })
    out.appendChild(ul)
}

getAllCountriesFromApi();
