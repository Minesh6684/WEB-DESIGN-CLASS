// 1).Products Name and Price, whose price is greater than 100
const url2 = 'https://fakestoreapi.com/products';


async function getNameAndPriceOfProduct(url){
    const response2_1 = await fetch(url);
    const data2_1 = await response2_1.json();
    const answer2_1 = document.querySelector('.API2_1')
    const result2 = data2_1.filter(element => {
        return element.price > 100}).forEach(element => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`Product Name:${element.title},\tPrice:${element.price}`));
            answer2_1.appendChild(li);
        })
    
}

getNameAndPriceOfProduct(url2)

//2).Sort by product name in ascending order

async function sortProductsByName(url){
    const answer2_2 = document.querySelector('.API2_2');
    const response2_2 = await fetch(url);
    const data2_2 = await response2_2.json();
    function sortByTitle(a,b) {
        const first = a.title.toLowerCase();
        const second = b.title.toLowerCase();
        if(first>second) {
            return 1;
        }
        else if(second>first) {
            return -1;
        }
        else {return 0}
    }
    data2_2.sort(sortByTitle)
    data2_2.forEach(element => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(JSON.stringify(element)));
        answer2_2.appendChild(li);
    })
}

sortProductsByName(url2)