$(document).ready(function() {
        
    var wins = 0;
    var losses = 0;
    var crystalNum = 0;
    var crystalArray = [];
    var randomNumber = 0;
    var userTotal = 0;
    var firstTimeIn = true;
    var gameOver = false;

    if (firstTimeIn) {
        for(var i = 0; randomNumber < 19; i++) {
            randomNumber = [Math.floor(Math.random() * 120) + 1];
            randomNumIsChosen = true;
            console.log("randomNumber: " + randomNumber);
        }
        for(var i = 0; i < 4; i++) {
            crystalNum = [Math.floor(Math.random() * 12) + 1];
            // console.log("crystalNum: " + crystalNum);
            crystalArray[i] = crystalNum;
            console.log("crystalArray" + i + ": " + crystalArray[i]);
        };
        firstTimeIn = false;
    };

    var randomNumberHtml = "<h2>" + randomNumber + "</h2>";
    document.querySelector(".random-number").innerHTML = randomNumberHtml;

    // function initializeIndicators() {
    //     gameOver = false;
    //     $("#crystal-1, #crystal-2, #crystal-3, #crystal-4").empty();
    // }

    $("#crystal-1").on("click", function() {
        userTotal = parseInt(userTotal);
        crystalArray[0] = parseInt( crystalArray[0]);
        // console.log("userTotal: " + userTotal);
        userTotal = userTotal += crystalArray[0];
        console.log("userTotal: " + userTotal);
        checkStatus();
        sendInfo();
    });
  
    $("#crystal-2").on("click", function() {
        userTotal = parseInt(userTotal);
        crystalArray[1] = parseInt( crystalArray[1]);
        // console.log("userTotal: " + userTotal);
        userTotal = userTotal += crystalArray[1];
        console.log("userTotal: " + userTotal);
    });

    $("#crystal-3").on("click", function() {
        userTotal = parseInt(userTotal);
        crystalArray[2] = parseInt( crystalArray[2]);
        // console.log("userTotal: " + userTotal);
        userTotal = userTotal += crystalArray[2];
        console.log("userTotal: " + userTotal);
    });

    $("#crystal-4").on("click", function() {
        userTotal = parseInt(userTotal);
        crystalArray[3] = parseInt( crystalArray[3]);
        // console.log("userTotal: " + userTotal);
        userTotal = userTotal += crystalArray[3];
        console.log("userTotal: " + userTotal);
    });

    $(".crystal").on("click", function() {
        console.log("ALL TIMES CLICKED");
        checkStatus();
        sendInfo();
    });

    function checkStatus() {
        if(userTotal==randomNumber) {
            // Winner
        }
        else if(userTotal>randomNumber) {
            // Loser
        }
        // else continue playing
    };

    function sendInfo() {

    };

});