var answer1 = document.getElementById(flexRadioDefault3);
var answer2 = document.getElementById(flexRadioDefault6);
var answer3 = document.getElementById(flexRadioDefault9);
var answer4 = document.getElementById(flexRadioDefault15);
var answer5 = document.getElementById(flexRadioDefault20);
var btn = document.getElementById(submit-btn);
var start = document.getElementById(start-btn);
var timer = document.getElementById(timer);
var question1 = document.getElementById(question1);
var question2 = document.getElementById(question2);
var question3 = document.getElementById(question3);
var question4 = document.getElementById(question4);
var question5 = document.getElementById(question5);

function q1() {
   if (question1 === answer1) {
    alert("That's Correct!")
} 
    else {
        alert("Sorry, that is incorrect.")
    }
}

