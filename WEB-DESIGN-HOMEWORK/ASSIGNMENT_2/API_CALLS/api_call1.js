const url1 = 'https://jsonplaceholder.typicode.com/posts';

const answer1 = document.querySelector('.API1')
async function getAllUsersById(id, url) {
    // await operator is used to wait for a response from fetch(url).
    const response1 = await fetch(url); 
    //response1 will bw JSON data 
    // .json() method takes in a JSON as an input and returns javascript object
    const data1 = await response1.json();
    //data1 is javascript object
    const result1 = data1.filter(element => {
        //filtering data by userID
        return element.userId === id}).forEach(element => {
            //Creates <li> element to store required data
            const li = document.createElement('li');
            //created TextNode of perticular element's title and appending it to created <li> element.
            li.appendChild(document.createTextNode(`${element.title}\n`));
            // Whole <li> element with required data will be appended to answer field on UI
            answer1.appendChild(li);
        });
    
}

getAllUsersById(1, url1)