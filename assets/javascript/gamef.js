var pickedName = [];
var boardName = [];
var guessesLeft = 9;
var winCounter = 0;
var lossCounter = 0;
var wrongGuesses = [];

var wordBank= ["anthony", "edgar", "mohammad", "kan", "michael"];

var validLetters = ["a", 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Set Name
function getPickedName(array) {
    var final = array[Math.floor(Math.random() * array.length)];
    var afinal = final.split("");
    return  pickedName = afinal;
};


//Set BoardName
function getBoardName() {
    var clone = pickedName.slice(0);
    var board = clone.fill("_");
    return  boardName = board;
};

//Validate Letters
function validateLetters (userInput) {
if (validLetters.indexOf(userInput) === -1) return false;
if (wrongGuesses.indexOf(userInput) >= 0) return false;
if (boardName.indexOf(userInput) >= 0) return false; 
return true;
};

//Update the BaordName
function updateBoardName(userInput) {
    for (i = 0; i < pickedName.length; i++) {
        if (userInput === pickedName[i]) {
            var letter = pickedName[i];
            boardName[i] = letter;
        }      
    }
};

//Increment Win
function addWin() {
    winCounter ++;
    var updateWin = document.getElementById("win-counter");
    updateWin.innerHTML = winCounter;
};

//Increment Loss
function addLoss() {
    lossCounter ++;
    var updateLoss = document.getElementById("loss-counter");
    updateLoss.innerHTML = lossCounter;
};

//Update guesses
function updateWrongGuess(userInput) {
    wrongGuesses.push(userInput);
    guessesLeft --;
    var UpdateGuessesLeft = document.getElementById("guesses-left");
    UpdateGuessesLeft.innerHTML = guessesLeft;
};    


//Update BoardWord, GuessCounter, GuessedLetters
function Update(userInput) {
var sPickedName = pickedName.join("");
if (sPickedName.includes(userInput)) {
        updateBoardName(userInput);
        var noComma = boardName.join(" ");
        var wordBlanks = document.getElementById("word-blanks");
        wordBlanks.innerHTML = noComma;      
    }
    else {
        updateWrongGuess(userInput);
        var getWrongGuesses = document.getElementById("wrong-guesses");
        var sWrongGuesses = wrongGuesses.join(" ");
        getWrongGuesses.innerHTML = sWrongGuesses;
    }
};

//Update Loss
function UpdateLoss() {
    if (guessesLeft === 0) {
        addLoss();
        document.getElementById("message").textContent = "Sorry, you have loss. The word was " + pickedName.join(" ");
          reset();
    } else {
        return;
    }
};

//Update Win
function UpdateWin() {
    if (pickedName.toString() === boardName.toString()) {
        addWin();
        document.getElementById("message").textContent = "You have won. The word was " + pickedName.join(" ");
        reset();
    } else {
        return;
    }
};

// Set wrong-guesses to 0
function setZeroOne() {
    wrongGuesses = [];
    var getWrongGuesses = document.getElementById("wrong-guesses");
    getWrongGuesses.innerHTML = wrongGuesses;
};


// Set guess counter to 0
function setCounterZero() {
    guessesLeft = 9;
    var UpdateGuessesLeftEnd = document.getElementById("guesses-left");
    UpdateGuessesLeftEnd.innerHTML = guessesLeft;

};

//reset
function reset() {
getPickedName(wordBank);
getBoardName();
console.log(pickedName);
console.log(boardName);
var rnoComma = boardName.join(" ");
var rwordBlanks = document.getElementById("word-blanks");
rwordBlanks.innerHTML = rnoComma; 
setZeroOne();
setCounterZero();
};

//Start Game Function
function startGame() {
getPickedName(wordBank);
console.log(pickedName);
getBoardName();
console.log(boardName);
var UpdateGuessesLeftBeg = document.getElementById("guesses-left");
UpdateGuessesLeftBeg = guessesLeft;
var winCounterBeg = document.getElementById("win-counter");
winCounterBeg = winCounter;
var lossCounterBeg = document.getElementById("loss-counter");
lossCounterBeg = lossCounter;
};




document.addEventListener("keydown", function() {
    var userInput = event.key
    userInput.toLowerCase();
    console.log(userInput);
    if (validateLetters(userInput)) {
        console.log(validateLetters(userInput));
        updateBoardName(userInput);
        Update(userInput);
        UpdateWin();
        UpdateLoss();

    }


});


startGame();
