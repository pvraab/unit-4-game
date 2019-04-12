// JavaScript for Bootcamp Homework #4
// Paul Raab
// Raab Enterprises LLC
// 4/12/2019
// ## Easier Assignment - Building a Crystals Collector Game
$(document).ready(function () {
    console.log("Start");

    var wins = 0;
    var losses = 0;
    var targetNumber = 0;
    var totalScore = 0;

    initGame();
    initCrystals();

    // Initialize new game
    function initGame() {

        totalScore = 0;

        // Generate a number to which the user will hope to match by clicking on crystals
        targetNumber = Math.floor(Math.random() * 100);
        var myNumber = document.getElementById("currentNumber");
        myNumber.textContent = targetNumber;
        // var myElement = $("#currentNumber");
    };

    // Initialize crystals with a random number from 1 to 10
    function initCrystals() {

        var crystalOne = document.getElementById("crystalOne");
        var iVal = Math.floor(Math.random() * 10) + 1;
        $("#crystalOne").val(iVal);

        var crystalTwo = document.getElementById("crystalTwo");
        iVal = Math.floor(Math.random() * 10) + 1;
        $("#crystalTwo").val(iVal);

        var crystalThree = document.getElementById("crystalThree");
        iVal = Math.floor(Math.random() * 10) + 1;
        $("#crystalThree").val(iVal);

        var crystalFour = document.getElementById("crystalFour");
        iVal = Math.floor(Math.random() * 10) + 1;
        $("#crystalFour").val(iVal);

    }

    // Add number to current score and display
    // Check for win/loss
    function addNumber(iVal) {
        console.log("Here " + iVal);
        totalScore += parseInt(iVal);
        $("#totalScore").text(totalScore);
        if (totalScore === targetNumber) {
            wins++;
            $("#wins").text(wins);
            initGame();
            initCrystals();
        } else if (totalScore > targetNumber) {
            losses++;
            $("#losses").text(losses);
            initGame();
            initCrystals();
        }
    }

    // Handle crystal onclick events
    $("#crystalOne").on("click", function () {
        console.log("in click");
        var iVal = $("#crystalOne").val();
        console.log(iVal);
        addNumber(iVal);
    });
    $("#crystalTwo").on("click", function () {
        console.log("in click");
        var iVal = $("#crystalTwo").val();
        console.log(iVal);
        addNumber(iVal);
    });
    $("#crystalThree").on("click", function () {
        console.log("in click");
        var iVal = $("#crystalThree").val();
        console.log(iVal);
        addNumber(iVal);
    });
    $("#crystalFour").on("click", function () {
        console.log("in click");
        var iVal = $("#crystalFour").val();
        console.log(iVal);
        addNumber(iVal);
    });

});