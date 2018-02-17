document.addEventListener("keydown", function() {
    var userGuess = event.key
    userGuess.toLowerCase();

    function name() {
        var names = ["Anthony", "Edgar", "Mohammad", "Kan", "Michael"];
        var randomName = names[Math.floor(Math.random() * names.length)];
        var arrayName = randomName.split("");        
        return arrayName;
    };

    var pickedName = name();

    function boardName(nam) {
        var board = nam.slice(0)
        var aBoard = board.fill("_")
        return aBoard
    };

    var fBoard = boardName(pickedName);

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

    //function validateAnother()

    if (pickedName.includes(userGuess)) {
        insertUserGuess(userGuess);
        console.log("True");
        console.log(pickedName);
        console.log(fBoard);
    } else {
        var wrongGuesses = document.getElementById("wrong-guesses")
        wrongGuesses.append(userGuess)
    }

});


 
    