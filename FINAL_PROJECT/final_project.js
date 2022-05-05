var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});


// TAB FUNCTIONALITY

const displayTab = document.querySelector('.about_text')

function displayTabContent(tab) {
    const tabColor = document.querySelector(`.${tab}`);
    if(tab === 'mission') {
        tabColor.style.backgroundColor = 'black';
        displayTab.textContent = 'Objective of the organization is to ';
    }
    else if(tab === 'vision') {
        tabColor.style.backgroundColor = 'black';
        displayTab.textContent = 'On the basis';
    }
    if(tab === 'value') {
        tabColor.style.backgroundColor = 'black';
        displayTab.textContent = 'pratistha';
    }
}
