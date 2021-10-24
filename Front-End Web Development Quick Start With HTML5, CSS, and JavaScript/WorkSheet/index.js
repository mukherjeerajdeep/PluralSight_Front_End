// // index.js
// var number = 10;
// let fieldName = "Rajdeep";

// number = 12;
// namfieldNamee = "Mukherjee ";
// // writing to the document
// document.writeln(number);
// document.writeln(fieldName + number);
// //alert("Hello World");

const formInfo = document.getElementById("formInfo");

let hasJob = true;

if(hasJob) {
    showMessage("Thanks for visitng the page, I am currently employed");
} else {
    showMessage("I am jobless now");
}

let today = new Date();
let dayOfWeek = today.getDay();

if(dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Please come back on the weekdays");
}

function showMessage(message) {    
    // This will change the way the form looks like, more control to show
    // a message to a user.
    formInfo.innerHTML = "<p>" + message + "</p>";    
}

function clearMessage(){
    formInfo.innerHTML = "";
}

// Add event for the buttons 
const contactForm = document.getElementById("contact");
contactForm.addEventListener("submit",function(event){
    event.preventDefault();
    showMessage("Sending your message...");
});

// function sendMessage() {
//     showMessage("Sending your message...");
// }

// Add events for collections 
const experiences = 
    document.getElementsByClassName("experience"); //Returns collections instead of the items

for (let x = 0; x < experiences.length; x++){
    const item = experiences[0];
    item.addEventListener("mouseenter", function(event){
        event.target.style = "background-color : #808080;";
    });
    item.addEventListener("mouseleave", function(event){
        event.target.style = "";
    });
}