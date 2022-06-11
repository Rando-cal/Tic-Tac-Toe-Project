// function to restart game on load

// function to restart game after end

// var of whos turn. True equals player1, false = player2
let whosTurn = true  // set to player1

// loop / function of whos turn its is check

// function of what was clicked

// function to change turns

// function to check squar

// method to display marking on box

// method to add 

// method to check if theres a win
    // check if there are wins in rows
    // check what the rows are composed of
    // check if 

// method to check if the game is over

// var for end of game
let gameOver = false

// method to display the winner

// var for winner, True is player 1, False 2
// can you set a variable to null?
let playerWinner = null

// method to check and lockout a square

// var for square state
// do i need a state for each one??
// could do filled or not, or square played = t/f
let stateOfSquare = 

// PUT the event listener at the body level so it can take all events
// let bodyEventListener = document.get

// method to check on click what element was clicked
    // check out Nodename 
    // check out bubbling

//function click on box
let someButton = document.getElementById('topLeftBox')

someButton.addEventListener('click', function() {
    console.log('clicked')
})


let restartButton = document.getElementById('restartButton')

restartButton.addEventListener('click',function() {
    console.log('restarted')
})



// trying to get element identifier when clicked
document.body.addEventListener("click",function(e) {
    var t = e.target;
    while(t && t.nodeName != "TAG") { // note, must be uppercase
        t = t.parentNode;
    }
    if( t) {
        alert("You clicked on #"+t.id);
    }
},false);