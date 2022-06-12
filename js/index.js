// TO DO playerChanger is NOT working

// GENERAL NOTES
    // you can store box data/state in object properties and
        // don't need to use class to store data. use object.content = ...
    // set a boolean var to undefined if you need to clear it
    // put eventlistener higher up and have it bubble up
    // run two functions on click with onclick
        // IN HTML DIVS
            // run two functions on click with onclick
            // make an event listener onclick="canplaynow(topLeftBox)'anotherfunc()


    // can set array after the fact


// START WITH "X" player

// var of whos turn. True equals player1,X ; false = player2,O
let whosTurn = true  // set to player1 by default

// var for end of game
let gameOver = false

// var for winner, True is player 1, False 2
// can you set a variable to null?
let playerWinner = null

// var for box state FORMAT
// domObj.squarePlayed = true/false


let turnCounter = 1




//*********************************************** */
// set event listeners to the divs
const tlbObj = document.getElementById('topLeftBox')
tlbObj.addEventListener('click', function(event) {
    console.log(event.target)  // TESTING give where it took place

    // mark box with X or O
    insertXO(whosTurn,tlbObj)

    // check if this square is filled

    // check for win state

    markBoxAsPlayed(tlbObj)
    playerChanger()
    turnCounter++
})

const tmbObj = document.getElementById('topMiddleBox')
tmbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

    // mark box with X or O
    insertXO(whosTurn,tmbObj)

    // check if this square is filled

    // check for win state

    markBoxAsPlayed(tmbObj)
    playerChanger()
    turnCounter++

    
})

const trbObj = document.getElementById('topRightBox')
trbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place
    console.log(event.target)  // give where it took place

    // mark box with X or O
    insertXO(whosTurn,trbObj)

    // check if this square is filled

    // check for win state

    markBoxAsPlayed(trbObj)
    playerChanger()
    turnCounter++
})

const mlbObj = document.getElementById('middleLeftBox')
mlbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

    markBoxAsPlayed(mlbObj)
})

const mmbObj = document.getElementById('middleMiddleBox')
mmbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const mrbObj = document.getElementById('middleRightBox')
mrbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const blbObj = document.getElementById('BottomLeftBox')
blbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const bmbObj = document.getElementById('BottomMiddleBox')
bmbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const brbObj = document.getElementById('BottomRightBox')
brbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

//****************************************************************** */

// NOTE DONE!! function to restart game on load
const restartGame = () =>{
    setAllBoxesToNotPlayed()
    whosTurn = true
    turnCounter = 1
    // remove all ticks
}
    // zero out all relevant variables
        // whosTurn, state of clicks
            // https://www.w3schools.com/howto/howto_js_remove_class.asp

// function to restart game after end
    // see if its end by running checkEnd
    // run restartgame func




// //loop / function of whos turn its is check
// //DON"T think i need this
// //input:none output t/f
// const checkTurn = () => {
//     if (whosTurn === true) {
//         return true
//     } else {return false}
// }


// function to change turns
const playerChanger = (whosTurn) => {
    if (whosTurn === true){
        whosTurn === false
    } else {
        whosTurn === true
    }
}

// method to display marking on box
    // input user as true or false AND the box id
    // method called grabber
    // HOW TO PASS  IN ELEMENT ID?
const insertXO = (user,elementObj) => {
    
    // let addMarkObj = document.getElementById("topLeftBox") //need to pass in elemtn later
    if (hasBoxBeenPlayed(user) === false){
        if (user === true){  // aka player 1
            // player1 = True and "X"
            // is block set - do function here
            let img = document.createElement('img')
            img.src = "img/x.png"
            elementObj.appendChild(img) 

        } else if (user === false){
            let img = document.createElement('img')
            img.src = "img/o_300x300px.png"
            elementObj.appendChild(img)  
        } else{}

    } else {// don't set box
      }      
    
}
// function remove image from square
// INPUT: element to remove
const removeImageFromSquare = () => {
    let grabImage = document.getElementById('image_X')
    grabImage.parentNode.removeChild(image_x) // NOT FUNCT YET
}

// function to mark div as filled
// INPUT:element OUTPUT: nothing
const markBoxAsPlayed = (elementObj) => {
    elementObj.squarePlayed = true
}

// removes class of element fullbox
const markBoxAsNotPlayed = (elementObj) => {
    elementObj.squarePlayed = false
}

// sets the class for all the boxes as NOT played
const setAllBoxesToPlayed = () => {
    markBoxAsPlayed(tlbObj)
    markBoxAsPlayed(tmbObj)
    markBoxAsPlayed(trbObj)
    markBoxAsPlayed(mlbObj)
    markBoxAsPlayed(mmbObj)
    markBoxAsPlayed(mrbObj)
    markBoxAsPlayed(blbObj)
    markBoxAsPlayed(bmbObj)
    markBoxAsPlayed(brbObj)
}

const setAllBoxesToNotPlayed = () => {
    markBoxAsNotPlayed(tlbObj)
    markBoxAsNotPlayed(tmbObj)
    markBoxAsNotPlayed(trbObj)
    markBoxAsNotPlayed(mlbObj)
    markBoxAsNotPlayed(mmbObj)
    markBoxAsNotPlayed(mrbObj)
    markBoxAsNotPlayed(blbObj)
    markBoxAsNotPlayed(bmbObj)
    markBoxAsNotPlayed(brbObj)
}

// turn counter will HAVE To be a number

// method to check if theres a win
    // check if there are wins in rows
    // check what the rows are composed of

const checkIfWin = () => {
}


// method to check if the game is over
const endGameCheck = () => {
}

// function to check if box is alreay set

const hasBoxBeenPlayed = (domObj) => {
    if (domObj.squarePlayed === true){
        return true
    } else {return false}
}

// method to display the winner
// set innertext of winnerMessage div
// inputs needs true of false or none
const displayWinner = (winner) => {
    let displayWinner = document.getElementById('winnerMessage')
    if (winner === true) {
        displayWinner.innerText = "Player 1 is the Winner!"
    } else if (winner === false) {
        displayWinner.innerText = "Player 2 is the Winner!"
    } else (displayWinner.innerText = "Game on!")
}


// restart button function
let restartButtonObj = document.getElementById('restartButton')
restartButtonObj.addEventListener('click',function() {
    restartGame()
})


/////////////////////////////// BELOW ARE NOTE functions

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


// ***************testing below
//callback function passed to another function
//USEOBJEct.addEventListener('click', tehfunction)   // don't want to invoke it but pass it, so passing function on

//generate.addEventListener('click', makePalette)

const addColor = (event) => {

    // seledt the clicked squares background color
    const color = event.target.style.backgroundColor  //not square, but the certain thing by using event.target

    // add the class of square to my new square
    newSquare.classList.add('square')


    // add my new square to my-palette
myPalette.appendChild(newSquare)
}


//********************************************* */
// TESTING AREA
const testArray = [tlbObj,tmbObj,trbObj,mlbObj,mmbObj,mrbObj,blbObj,bmbObj,brbObj]

const divTestObj = document.getElementById('testButton')  // TESTING
divTestObj.addEventListener('click', function(event) {
   console.log("square played:"+testArray[0].squarePlayed)
   console.log("square played:"+testArray[1].squarePlayed)
   console.log("square played:"+testArray[2].squarePlayed)
   console.log("square played:"+testArray[3].squarePlayed)
   console.log("square played:"+testArray[4].squarePlayed)
   console.log("square played:"+testArray[5].squarePlayed)
   console.log("square played:"+testArray[6].squarePlayed)
   console.log("square played:"+testArray[7].squarePlayed)

    console.log("whosTurn:"+ whosTurn)
    console.log("turnCounter:"+turnCounter)
})

// setTimeout(function(){ /// SLEEP through delayed funct in 
//     markBoxAsNotPlayed (divTest)
// },5000)
