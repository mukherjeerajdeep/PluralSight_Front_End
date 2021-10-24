// // index.js
// var number = 10;
// let fieldName = "Rajdeep";

// number = 12;
// namfieldNamee = "Mukherjee ";
// // writing to the document
// document.writeln(number);
// document.writeln(fieldName + number);
// //alert("Hello World");

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
    document.writeln("<p>" + message + "</p>");
    document.writeln("<hr/>");
}