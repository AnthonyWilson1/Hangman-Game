document.addEventListener("keydown", function() {
    var userGuess = event.key
    userGuess.toLowerCase();
    console.log(userGuess);
    var names = ["Anthony", "Edgar", "Mohammad", "Kan", "Michael"];
    var chosenName = names[Math.floor(Math.random() * names.length)];
    var aChosenName = chosenName.split("");
    var boardName = document.getElementById("word-blanks").textContent;
    var aBoardName = boardName.split("");


    //function set_score_str(char_array){
           //var char_str = char_array.toString()
           //char_str = char_str.replace(/\,/g, " ")
           //return char_str
           //};
   

    function insertUserGuess(letter) {
         for ( i= 0; i < aChosenName.length; i++) {
             if (letter === aChosenName[i]) {
                var replaceLetter = aChosenName[i];
                aBoardName[i] = replaceLetter;
                var noComma = aBoardName.join("");
                var rightGuess = document.getElementById("word-blanks");
                rightGuess.innerHTML = noComma
             }
             
         }
    };
        if (chosenName.includes(userGuess)) {
            insertUserGuess(userGuess);
            console.log("True");
            console.log(aChosenName);
            console.log(aBoardName);


        } else {
            var wrongGuesses = document.getElementById("wrong-guesses")
            //var newDiv = document.createElement("div")
            //newDiv.innerHTML = userGuess
            //wrongGuesses.appendChild(newDiv)
            wrongGuesses.append(userGuess)
        }
});


 
    