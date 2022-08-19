

var field1 = document.getElementById("field1");
var field2 = document.getElementById("field2");
var field3 = document.getElementById("field3");
var message = document.getElementById("message");
var inputGuess = document.querySelector('input');

var numberField = 0;
var numberField2 = 0;
var guessValue = inputGuess.value;
var solution = 0;

var counter = 0;
var correctGuesses = 0;
var wrongGuesses = 0;

////////////////
// FUNCTIONS //
///////////////
// function numberLog() {for (let step = 0; step < 2; step++) 
//                         { console.log(Math.floor(Math.random() * 100))}
                          
//                         } 

function randomNumber() {
    numberField = (Math.floor(Math.random() * 100) + 1)
    numberField2 = (Math.floor(Math.random() * 100) + 1)
    while (numberField <= numberField2) {
        randomNumber();
    }
}
      
function logNumber1() {
    console.log(numberField, numberField2)
}

function answer() {
    // console.log(numberField - numberField2);
    solution = numberField - numberField2;
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
        message.textContent = "Correct!";
        message.style.color = "green";
        correctGuesses += 1;
        setTimeout(() => {
            nextQuestion();
          }, 2000)
          
    } else {
        message.textContent = "Wrong! " + solution;
        message.style.color = "red";
        wrongGuesses += 1;
        setTimeout(() => {
            nextQuestion();
          }, 5000)
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
const startButton = document.querySelector("button");
const ansButton = document.querySelector('#AnsButton');
const finishButton = document.getElementById("finish");

startButton.addEventListener("click", function() {
    nextQuestion();
    correctGuesses = 0;
    counter = 0;
    finishButton.style.visibility = "visible";
    startButton.style.visibility = "hidden";

});

// ansButton.addEventListener("click", function() {
//     answer()
// });

inputGuess.addEventListener("keyup", function(event) {
    if (event.code === 'Enter')
        {
            answer();
    }
});
 

finishButton.addEventListener("click", function() {
    alert(`Well done! You got ${correctGuesses}/${counter} problems correct. You finished with an accuracy score of ${correctGuesses / counter * 100}%`);
    finishButton.style.visibility = "hidden";
    startButton.style.visibility = "visible";
    field1.textContent = "";
    field2.textContent = "";
})


