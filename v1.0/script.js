

var field1 = document.getElementById("field1");
var field2 = document.getElementById("field2");
var field3 = document.getElementById("field3");
var message = document.getElementById("message");
var inputGuess = document.querySelector('input');

var numberField = 0;
var numberField2 = 0;
var guessValue = inputGuess.value;
var solution = 0;

var counter = -1;
var correctGuesses = 0;
var wrongGuesses = 0;

////////////////
// FUNCTIONS //
///////////////
// function numberLog() {for (let step = 0; step < 2; step++) 
//                         { console.log(Math.floor(Math.random() * 100))}
                          
//                         } 

function randomNumber() {
    numberField = (Math.floor(Math.random() * 100))
    numberField2 = (Math.floor(Math.random() * 100))
}
      
function logNumber1() {
    console.log(numberField, numberField2)
}

function answer() {
    console.log(numberField + numberField2);
    solution = numberField + numberField2;
    // field3.textContent = solution;
    message.style.visibility = "visible";
    guessValue = inputGuess.value;

    // if (solution == guessValue) {
    //     console.log("Correct!");
    //     alert("Correct! " + numberField + " + " + numberField2 + " = " + solution);
    // } else {
    //     console.log("Wrong!");
    //     alert("Wrong! " + numberField + " + " + numberField2 + " = " + solution);
    // }

    if (solution == guessValue) {
        message.textContent = "Correct!"
        correctGuesses += 1;
    } else {
        message.textContent = "Wrong!"
        wrongGuesses += 1;
    }
    inputGuess.focus();
}

function nextQuestion() {
    randomNumber();
    logNumber1();
    field1.textContent = numberField;
    logNumber1();
    field2.textContent = numberField2;
    // field3.textContent = "";
    message.style.visibility = "hidden";
    inputGuess.value = "";
    inputGuess.focus();
    counter += 1;
    console.log(correctGuesses + " / " + counter + " problems correct. ")
}

/////////////
// BUTTONS //
/////////////
let QuestionButton = document.querySelector("button");

QuestionButton.addEventListener("click", function() {
    nextQuestion()
});

let ansButton = document.querySelector('#AnsButton');

ansButton.addEventListener("click", function() {
    answer()
});


