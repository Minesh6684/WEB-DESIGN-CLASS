//1). Display all cats name in decending order

const url3 = 'https://api.thecatapi.com/v1/breeds';

async function catsNameDescending(url) {
    const answer3_1 = document.querySelector('.API3_1');
    const response3_1 = await fetch(url);
    const data3_1 = await response3_1.json();
    //array.map() ---> renderes privillege to store it's return statement in an array
    // Here All the names (element.name) of Cats will be stored in catsDescending Array
    const catsDecending = data3_1.map(element => {
        return element.name
    }).sort().reverse().forEach(element => { //sortes and reverse the order of sorted 'catsDecending' array
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(element));
        answer3_1.appendChild(li);
    });

}

catsNameDescending(url3)

//2). Get the Cats with country-code='US

    //made catsOfUs function universal by defining parameter countryCode of the function
async function catsOfCountry(url, countryCode) {
    const answer3_2 = document.querySelector('.API3_2');
    const response3_2 = await fetch(url);
    const data3_2 = await response3_2.json();

    // data filteration based on a specific parsed country_codes
    const US_Cats = data3_2.filter(element => {
        return element.country_codes === countryCode;
        
        //for every cat object of the country, gets name only 
    }).forEach(cat => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(cat.name));
        answer3_2.appendChild(li);
    })
}

catsOfCountry(url3, 'US') // country_codes = 'US'
