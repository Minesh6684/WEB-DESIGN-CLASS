
// 'CONTACT US FORM' FUNCTIONALITY
var submitButton = document.getElementById("submit_form"); // FETCHES the submit button element through DOM
var form = document.getElementById("email_form"); // Accesses whole form through it's ID
      /*Event addition to form element, 
        function initialization and calling it at the same time,
        whenever the submit button of the form get clicked 
       */
form.addEventListener("submit", function (e) {
        /* setTimeout function takes in two arguments 
        1). A callback function
        2). delayTime in miliseconds
        after feeded time, the callback function will be called*/
    setTimeout(function() {
        submitButton.value = "Sending..."; //changes the value(text appearing on element) of submit button
        submitButton.disabled = true; // Disables the submit button for 1milisecond
    }, 1);
});



// 'ABOUT US SECTION' TAB FUNCTIONALITY
const displayTab = document.querySelector('.about_text'); //Fetches empty section to display 'mission', 'vision', 'value' contents
const aboutUsTab = document.querySelectorAll('.about_us_tab') // get all the button elements of about_us section
    
    /* Iteration over each TAB 
       and adding event to them, upon click on the TAB the arrow function 
       will execute the instruction inside it.*/
aboutUsTab.forEach(element => {
    element.addEventListener('click', () => {
        //Gets all the contents of TABS
    const tabColorVision = document.querySelector('.vision');
    const tabColor_mission = document.querySelector('.mission');
    const tabColorValue = document.querySelector('.value');

    const classNameOfSelectedTab = element.className; //stores className of clicked TAB
    //Compares the selected element and assign content of respective tab to display
    if( classNameOfSelectedTab === 'about_us_tab mission') {
        //Changing color combination to give user a better idea about selected Tab content relevancy
        tabColor_mission.style.backgroundColor = 'black';
        tabColorVision.style.backgroundColor = 'rgb(179, 178, 178)';
        tabColorValue.style.backgroundColor = 'rgb(179, 178, 178)';
        //Assignment of content to display according to respective tab
        displayTab.textContent = 'Spend less time in the kitchen and more time doing what you love!';
    }
    else if(classNameOfSelectedTab === 'about_us_tab vision') {
        tabColor_mission.style.backgroundColor = 'rgb(179, 178, 178)';
        tabColorVision.style.backgroundColor = 'black';
        tabColorValue.style.backgroundColor = 'rgb(179, 178, 178)';
        displayTab.textContent = 'We are onto the project of preparing Plant-based meat that tastes exactly like your favourite fish.';
    }
    else if(classNameOfSelectedTab=== 'about_us_tab value') {
        tabColor_mission.style.backgroundColor = 'rgb(179, 178, 178)';
        tabColorVision.style.backgroundColor = 'rgb(179, 178, 178)';
        tabColorValue.style.backgroundColor = 'black';
        displayTab.textContent = 'As a pioneer in the meal subscription market, unique offer of FishOn has quickly made it Quebec\'s leader in the rapidly growing field.';
    }
    })
});




// SERVICES SECTION FUNCTIONALITY
const carouselButton = document.querySelectorAll('.carousel-button'); // Accessing both navigaion button elements and storing it as an array
    /* Iteration over each navigation button element 
       and adding event to them, upon click on the buttons the arrow function 
       will execute the instruction inside it.*/

carouselButton.forEach(element => {
    element.addEventListener('click', () => {
        let activeSlide = document.querySelector('.slide.active'); //Fetches current displayed content element
        let activeSlideIndex = parseInt(activeSlide.id); // conversion of (typeof id)-string to integer of current displaying element
        
        /* Ternary Operator: if condition is true {statement after ? will be executed}
                             else {staement after : will be executed} */
        const indexChange = element.className === 'prev carousel-button' ? -1 : 1; // if (previous carousel button is clicked) {indexChange = -1} else {indexChange = 1}
        let newIndex = activeSlideIndex + indexChange; // Needed index to get next/previous content element can be get by adding index change to current element index
        
        //To prevent undefined element displaying on the services section
        if (newIndex === 0 || newIndex === 4) {
            return 0
        }
        else {
            let newId = (newIndex).toString(); // converts newIndex to string, to get an element by that id
            let newActiveSlide = document.getElementById(newId) //gets an element based on direction of button pressed
            newActiveSlide.className = 'slide active' // changes it's classname to active, which gives it opacity 1 to show it on the section
            activeSlide.className = 'slide'; // previous content element will get opacity 0
        }
    })
});
