var humanscore = 0;
var computerscore = 0;
var hvar = 0;
function rock()
{
    hvar = 1
}
function paper()
{
    hvar = 2
}
function Scissors()
{
    hvar = 3
}

function gethchoice() {
    var humanchoice = hvar
    if (humanchoice == 1) {
        return "Rock";
    } else if (humanchoice == 2) {
        return "Paper";
    } else if (humanchoice == 3) {
        return "Scissors";
    }
}

function getcompchoice() {
    var computerchoice = Math.floor(Math.random() * 3);
    if (computerchoice == 0) {
        return "Rock";
    } else if (computerchoice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playround(humanvariable, compvariable) {
    var resElement = document.getElementById('res');
    if (humanvariable == compvariable) {
        res = "It's a Tie 😒";
        console.log(res)
        
    } else if (
        (humanvariable == "Rock" && compvariable == "Scissors") ||
        (humanvariable == "Paper" && compvariable == "Rock") ||
        (humanvariable == "Scissors" && compvariable == "Paper")
    ) {
        res = "You Win! 😁";
        console.log(res)
        humanscore++;
    } else {
        res = "You lose! 👎🏻";
        console.log(res)
        computerscore++;
    }
    resElement.innerHTML = res;
}

function playGame(){
        var humanvariable = gethchoice();
        var compvariable = getcompchoice();
        playround(humanvariable, compvariable);
    }