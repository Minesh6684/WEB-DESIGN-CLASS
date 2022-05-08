var submitButton = document.getElementById("submit_form");
var form = document.getElementById("email_form");
form.addEventListener("submit", function (e) {
    setTimeout(function() {
        submitButton.value = "Sending...";
        submitButton.disabled = true;
    }, 1);
});


// TAB FUNCTIONALITY

const displayTab = document.querySelector('.about_text');

function displayTabContent(tab) {
    const tabColorVision = document.querySelector('.vision');
    const tabColor_mission = document.querySelector('.mission');
    const tabColorValue = document.querySelector('.value');
    if(tab === 'mission') {
        tabColor_mission.style.backgroundColor = 'black';
        tabColorVision.style.backgroundColor = 'rgb(179, 178, 178)';
        tabColorValue.style.backgroundColor = 'rgb(179, 178, 178)';
        displayTab.textContent = 'Objective of the organization is to provide fresh-cut meat from Ocean';
    }
    else if(tab === 'vision') {
        tabColor_mission.style.backgroundColor = 'rgb(179, 178, 178)';
        tabColorVision.style.backgroundColor = 'black';
        tabColorValue.style.backgroundColor = 'rgb(179, 178, 178)';
        displayTab.textContent = 'On the basis';
    }
    if(tab === 'value') {
        tabColor_mission.style.backgroundColor = 'rgb(179, 178, 178)';
        tabColorVision.style.backgroundColor = 'rgb(179, 178, 178)';
        tabColorValue.style.backgroundColor = 'black';
        displayTab.textContent = 'pratistha';
    }
}

// SERVICES SECTION

const carouselButton = document.querySelectorAll('.carousel-button');
const content = document.querySelectorAll('[data-slides]');
carouselButton.forEach(element => {
    element.addEventListener('click', () => {
        let activeSlide = document.querySelector('.slide.active');
        let activeSlideIndex = parseInt(activeSlide.id);
        const indexChange = element.className === 'carousel-button prev' ? -1 : 1;
        let newIndex = activeSlideIndex + indexChange;
        if (newIndex === 0 || newIndex === 4) {
            return 0
        }
        else {
            let newId = (newIndex).toString();
            let newActiveSlide = document.getElementById(newId)
            newActiveSlide.className = 'slide active'
            activeSlide.className = 'slide';
        }
    })
});
