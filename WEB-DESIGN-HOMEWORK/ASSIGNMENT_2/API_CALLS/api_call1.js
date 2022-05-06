const url1 = 'https://jsonplaceholder.typicode.com/posts';

const answer1 = document.querySelector('.API1')
async function getAllUsersById(id, url) {
    const response1 = await fetch(url);
    const data1 = await response1.json();
    const result1 = data1.filter(element => {
        return element.userId === id}).forEach(element => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${element.title}\n`))
            answer1.appendChild(li);
        });
    
}

getAllUsersById(1, url1)