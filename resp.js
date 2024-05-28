var humanscore = 0;
var computerscore = 0;
var hvar = 0;
function rock() {
    hvar = 1
}
function paper() {
    hvar = 2
}
function Scissors() {
    hvar = 3
}


function gethchoice() {
    let uimg = document.getElementById('userimg')
    var humanchoice = hvar
    if (humanchoice == 1) {
        uimg.src = 'Rock.png'
        return "Rock";
    } else if (humanchoice == 2) {
        uimg.src = 'hand-paper.png'
        return "Paper";
    } else if (humanchoice == 3) {
        uimg.src = 'scissors.png'
        return "Scissors";
    }
}

function getcompchoice() {
    cimg = document.getElementById('compimg')
    var computerchoice = Math.floor(Math.random() * 3);
    if (computerchoice == 0) {
        cimg.src = 'Rock.png'
        return "Rock";
    } else if (computerchoice == 1) {
        cimg.src = 'hand-paper.png'
        return "Paper";
    } else {
        cimg.src = 'scissors.png'
        return "Scissors";
    }
}

function playround(humanvariable, compvariable) {
    var resElement = document.getElementById('res');
    if (humanvariable == compvariable) {
        res = "It's a Tie 😒";

    } else if (
        (humanvariable == "Rock" && compvariable == "Scissors") ||
        (humanvariable == "Paper" && compvariable == "Rock") ||
        (humanvariable == "Scissors" && compvariable == "Paper")
    ) {
        res = "You Win! 😁";
        humanscore++;
    } else {
        res = "You lose! 👎🏻";
        computerscore++;
    }
    resElement.innerHTML = res;
}

function playGame() {
    var humanvariable = gethchoice();
    var compvariable = getcompchoice();
    playround(humanvariable, compvariable);
}