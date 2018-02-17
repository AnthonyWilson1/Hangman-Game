function name() {
    var names = ["anthony", "edgar", "mohammad", "kan", "michael"];
    var randomName = names[Math.floor(Math.random() * names.length)];
    var arrayName = randomName.split("");        
    return arrayName;
};

var pickedName = name();

function boardName(nam) {
    var board = nam.slice(0);
    var aBoard = board.fill("_");
    return aBoard;
};

var fBoard = boardName(pickedName);

var options =["a", 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wrong = [];

var counter = document.getElementById("guesses-left").textContent

var losses = 0

var win = 0

function validateUserGuess(letter) {
    for ( i= 0; i < pickedName.length; i++) {
        if (letter === pickedName[i]) {
        var replaceLetter = pickedName[i];
        fBoard[i] = replaceLetter;
        var noComma = fBoard.join(" ");
        var rightGuess = document.getElementById("word-blanks");
        rightGuess.innerHTML = noComma
        }           
    }
};

function validateUserGuess2(userGuess1) {
    if (pickedName.includes(userGuess1)) {
    }  else {
    var wrongGuesses = document.getElementById("wrong-guesses");
    var wrong1 = wrong.join(" ");
    wrongGuesses.innerHTML = wrong1
    }    
};

function repeat(userGuess2) {
if (pickedName.includes(userGuess2)) {
    }  else {
    for (i = 0; i < wrong.length; i++) {
       if (userGuess2 === wrong[i]) {
           return;
       }  
        else {}
    }
    var wrongGuesses1 = userGuess2
    wrong.push(wrongGuesses1)
    }
};

function lower() {
    var swrong = wrong.toString();
    var ncounter = Number(counter);
    var lwrong = wrong.length;
    var fcounter = ncounter - lwrong;
    var ucounter = document.getElementById("guesses-left");
    ucounter.innerHTML = fcounter;   
};

function loss() {
    var xwrong = wrong.toString();
    var twrong = wrong.length;
    if (twrong === 9) {
        losses++;
        var los = document.getElementById("loss-counter");
        los.innerHTML = losses;
        document.getElementById("message").textContent = "Sorry, you have loss. The word was " + pickedName.join(" ");
        reset();
    }
    else {}
};

function addWin() {
    var oneName = pickedName.toString();
    var twoName = fBoard.toString();
    if (oneName === twoName) {
        win++;
        var aWin = document.getElementById("win-counter");
        aWin.innerHTML = win;
        document.getElementById("message").textContent = "You have won. The word was " + pickedName.join(" ");
        reset();
    }
    else {}
};

function reset() {
    var rwrong = wrong.toString();
    var zwrong = wrong.length;
    var threeName = pickedName.toString();
    var fourName = fBoard.toString();
    if ((zwrong === 9) || (threeName === fourName)) {
        return;
        //name();
        //var newName = name();
        //console.log(newName);
        //var rBoard = boardName(newName);
        //console.log(rBoard);
        //var wrongGuesses = document.getElementById("wrong-guesses");
        //wrongGuesses.innerHTML = " ";
        //var ucounter = document.getElementById("guesses-left");
        //ucounter.innerHTML = "9";
        //var noComma = rBoard.join(" ");
        //var rightGuess = document.getElementById("word-blanks");
        //rightGuess.innerHTML = noComma

    }
};


document.addEventListener("keydown", function() {
    var userGuess = event.key
    userGuess.toLowerCase();
    console.log(userGuess);
    console.log(pickedName);

    if (options.includes(userGuess)) {
        validateUserGuess(userGuess);
        repeat(userGuess);
        validateUserGuess2(userGuess);
        lower();   
        loss();
        addWin();
        reset();
    }
    


});


 
    