let mypromiseObj = new Promise((myResolve, myReject) => {
    setTimeout()
})

/* Regular use of setTimeout*/
function timeOutDisplay() {
    document.getElementById('timeOut').innerHTML = 'Learn setTimeout()'
}

setTimeout(timeOutDisplay, 3000);
