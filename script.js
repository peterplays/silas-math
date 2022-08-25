///////////////
// VARIABLES //
///////////////

let field1 = document.getElementById("field1");
let field2 = document.getElementById("field2");
let field3 = document.getElementById("field3");
let operator = document.getElementById("operator");
let message = document.getElementById("message");
let inputGuess = document.getElementById("Guess");
let addCheckbox = document.getElementById("add");
let subtCheckbox= document.getElementById("subt");
let multCheckbox = document.getElementById("mult");
let divideCheckbox = document.getElementById("divide");


let numberField = 0;
let numberField2 = 0;
let guessValue = inputGuess.value;
let solution = 0;

let counter = 0;
let correctGuesses = 0;
let wrongGuesses = 0;
let randomQuestionType = 1;


////////////////
// FUNCTIONS //
///////////////
// function numberLog() {for (let step = 0; step < 2; step++) 
//                         { console.log(Math.floor(Math.random() * 100))}
                          
//                         } 

function randomNumberSubtraction() {
    numberField = (Math.floor(Math.random() * 100) + 1);
    numberField2 = (Math.floor(Math.random() * 100) + 1);
    while (numberField <= numberField2) {
        randomNumberSubtraction();
    }
    operator.innerText = " - "
    solution = numberField - numberField2;
}

function randomNumberAddition() {
    numberField = (Math.floor(Math.random() * 100) + 1);
    numberField2 = (Math.floor(Math.random() * 100) + 1);
    operator.innerText = " + "
    solution = numberField + numberField2;
}

function randomNumberMult() {
    numberField = (Math.floor(Math.random() * 12) + 1);
    numberField2 = (Math.floor(Math.random() * 12) + 1);
    operator.innerText = " x "
    solution = numberField * numberField2;
}

function randomNumberDivide() {
    numberField = (Math.floor(Math.random() * 144) + 1);
    numberField2 = (Math.floor(Math.random() * 72) + 1);
    if (numberField <= numberField2 || numberField2 == 1) {
        randomNumberDivide();
    }
    operator.innerHTML = " &#247; "
    if (numberField % numberField2 == 0) {
    solution = numberField / numberField2
    } else { randomNumberDivide()
    }
}

function answer() {
    // console.log(numberField - numberField2);
    // solution = numberField - numberField2;
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
    randomQuestionType = (Math.floor(Math.random() * 4))
    console.log(randomQuestionType)
    if (randomQuestionType == 0 && addCheckbox.checked == true) {
        randomNumberAddition();
    } else if (randomQuestionType == 1 && subtCheckbox.checked == true) {
        randomNumberSubtraction();
    } else if (randomQuestionType == 2 && multCheckbox.checked == true) {
        randomNumberMult();
    } else if (randomQuestionType == 3 && divideCheckbox.checked == true) {
        randomNumberDivide();
    } else {
        nextQuestion();
    }

        field1.textContent = numberField;
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
    if (addCheckbox.checked == true || subtCheckbox.checked == true || multCheckbox.checked == true || divideCheckbox.checked == true) {
    nextQuestion();
    correctGuesses = 0;
    counter = 0;
    finishButton.style.visibility = "visible";
    startButton.style.visibility = "hidden";
    }
});

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


