$(document).ready(function() {
        
    var wins = 0;
    var losses = 0;
    var crystalNum = 0;
    var crystalArray = [];
    var randomNumber = 0;
    var userTotal = 0;
    var gameOver = false;
    var audioElement = document.createElement("audio");
    
    //--run all starting functions.
    newGame();
    checkStatus();
    sendInfo();

    function newGame() {
        
        //--get the random number with a loop so it picks again if it's not at least 19.
        for(var i = 0; randomNumber < 19; i++) {
            randomNumber = [Math.floor(Math.random() * 120) + 1];
            randomNumber = parseInt(randomNumber);
            // console.log("randomNumber: " + randomNumber);
        }
        
        //--loop through all 4 crystals to get a random value for each.
        for(var i = 0; i < 4; i++) {
            // console.log("top of I loop, i=" + i);
            crystalNum = [Math.floor(Math.random() * 12) + 1];
            // console.log("  crystalNum: " + crystalNum);
            
            //--nested loop to see if the crystal value was already assigned to another crystal.
            for(var n = -1; n <= i; n++) {
                // console.log("  top of N loop, n=" + n);
                // console.log("  crystalNum: " + crystalNum);
                // console.log("  crystalArray[" + n + "]: " + crystalArray[n])
                // console.log("  crystalArray[n]: " + crystalArray)

                //--make sure both are integers before comparison.
                crystalNum=parseInt(crystalNum);
                crystalArray[n]=parseInt(crystalArray[n]);

                 //--if crystal value was previously used, select another random value, and decrease indicator so it tests it again.
                if(crystalNum==crystalArray[n]) {
                    // console.log("    crystalArray: " + crystalArray)
                    // console.log("    crystalNum==crystalArray[n]")
                    crystalNum = [Math.floor(Math.random() * 12) + 1];
                    n--;
                }
                
                //--all other values in crystal array were not used, so move this random number to the array and end nested loop.
                else if(n==i) {
                    crystalArray[i] = crystalNum;
                    // console.log("    set crystalArray[i] = crystalNum");
                }
            }
        };
        
        //--write out the main random number to the screen.
        var randomNumberHtml = "<h2>" + randomNumber + "</h2>";
        document.querySelector(".random-number").innerHTML = randomNumberHtml;
        console.log("crystalArray:" + crystalArray);
    };

    function initializeIndicators() {
        gameOver = false;
        crystalNum = 0;
        crystalArray = [];
        randomNumber = 0;
        userTotal = 0;
        gameOver = false;
    }

    //--function to check status and see if game is over.
    function checkStatus() {
        if(userTotal == randomNumber) {
            // Winner
            wins++;
            gameOver = true;
            // --play a sound
            audioElement.setAttribute("src", "assets/audio/win-tada.mp3");
            audioElement.play();
        }
        else if(userTotal > randomNumber) {
            // Loser
            losses++;
            gameOver = true;
            // --play a sound
            audioElement.setAttribute("src", "assets/audio/loss-powerfailure.mp3");
            audioElement.play();
        }
    };

    //--function to send the updated user total and win/loss totals.
    function sendInfo() {
        var userTotalHtml = "<h2>" + userTotal + "</h2>";
        document.querySelector(".user-total").innerHTML = userTotalHtml;
        var totalsHtml = "<h2>Wins: " + wins + "&nbsp &nbsp &nbsp Losses: " + losses + "</h2>";
        document.querySelector(".totals").innerHTML = totalsHtml;
    };

    //--function to send additional display message at bottom when user wins or loses.
    function sendMessage() {
        console.log("function sendMessage()");
        console.log("userTotal" + userTotal);
        console.log("randomNumber" + randomNumber);
        if(userTotal == randomNumber) {
            var messageHtml = "<h2>YOU WIN!</h2>";
        }
        else if(userTotal > randomNumber) {
            var messageHtml = "<h2>YOU LOSE!</h2>";
        }
        else {
            var messageHtml = "";
        }
        console.log("messageHtml: " + messageHtml)
        document.querySelector(".message").innerHTML = messageHtml;
    };

    //--determine which of the 4 crystals was clicked, and add that crystal's amount in the array.
    $("#crystal-1").on("click", function() {
        userTotal = parseInt(userTotal);
        crystalArray[0] = parseInt(crystalArray[0]);
        // console.log("userTotal: " + userTotal);
        userTotal = userTotal += crystalArray[0];
        // console.log("userTotal: " + userTotal);
    });
  
    $("#crystal-2").on("click", function() {
        userTotal = parseInt(userTotal);
        crystalArray[1] = parseInt(crystalArray[1]);
        // console.log("userTotal: " + userTotal);
        userTotal = userTotal += crystalArray[1];
        // console.log("userTotal: " + userTotal);
    });

    $("#crystal-3").on("click", function() {
        userTotal = parseInt(userTotal);
        crystalArray[2] = parseInt(crystalArray[2]);
        // console.log("userTotal: " + userTotal);
        userTotal = userTotal += crystalArray[2];
        // console.log("userTotal: " + userTotal);
    });

    $("#crystal-4").on("click", function() {
        userTotal = parseInt(userTotal);
        crystalArray[3] = parseInt(crystalArray[3]);
        // console.log("userTotal: " + userTotal);
        userTotal = userTotal += crystalArray[3];
        // console.log("userTotal: " + userTotal);
    });

    //--on any crystal clicked, check if the game is over, and send the screen data back.
    $(".crystal").on("click", function() {
        // console.log("ON ALL CLICKS.");
        // console.log("checkStatus call");
        checkStatus();
        sendInfo();
        sendMessage();
        //--if the game is over, send final numbers and message, and play again.
        if(gameOver) {
            sendMessage();
            initializeIndicators();
            newGame();
            sendInfo();
        }
    });

});