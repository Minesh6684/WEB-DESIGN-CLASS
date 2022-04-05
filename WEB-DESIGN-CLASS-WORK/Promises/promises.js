function displayMessage () {
    /* new used for objectCreation */
    let promiseObj = new Promise((resolve, reject) => {
        resolve('Hello');
        reject('rejected');
    })  
}