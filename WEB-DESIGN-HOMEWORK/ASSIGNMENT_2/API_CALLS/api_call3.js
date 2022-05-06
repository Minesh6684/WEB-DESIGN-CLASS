//1). Display all cats name is decending order

const url3 = 'https://api.thecatapi.com/v1/breeds';

async function catsNameDescending(url) {
    const answer3_1 = document.querySelector('.API3_1');
    const response3_1 = await fetch(url);
    const data3_1 = await response3_1.json();
    const catsDecending = data3_1.map(element => {
        return element.name
    }).sort().reverse().forEach(element => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(element));
        answer3_1.appendChild(li);
    });

}

catsNameDescending(url3)

//2). Get the Cats with country-code='US
async function catsOfUS(url, countryCode) {
    const answer3_2 = document.querySelector('.API3_2');
    const response3_2 = await fetch(url);
    const data3_2 = await response3_2.json();
    const US_Cats = data3_2.filter(element => {
        return element.country_codes === countryCode;
    }).forEach(element => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(element.name));
        answer3_2.appendChild(li);
    })
}

catsOfUS(url3, 'US')
