// RANDY D'ABBRACCIO 6.12.2022

// TO DO:
// remove photos - maybe not with refresh
// remove player turn on win
// fix bug
// set doc font
// tie is busted


// GENERAL NOTES
    // you can store box data/state in object properties and
        // don't need to use class to store data. use object.content = whateverdata
    // set a boolean var to undefined if you need to clear it
    // put eventlistener higher up and have it bubble up
    // run two functions on click with onclick instead of eventlisteners in JS
        // IN HTML DIVS
            // run two functions on click with onclick
            // make an event listener onclick="canplaynow(topLeftBox)'anotherfunc()


    // can set array after the fact
    // you can pass in just an DOMobject and its properties will come with it

    // ?? Should you use UNDEFINED as state holder???
    // ?? Do you leave in testing code and comment it out??


// START WITH "X" player

//**************************** DEFINE VARIABLES********************************************* */




// var of whos turn. True equals player1,X ; false = player2,"O". Set to player1 by default
let whosTurn = true

// var for end of game
let gameOver = false

// var for winner, True is player 1, False 2
// can you set a variable to null?
let playerWinner = null

let turnCounter = 1

  //init playerDislay DOM object
const displayBox = document.getElementById('displayBox')
displayBox.innerText = "It is Player 1's turn (X)"
// const winnerDisplay = document.getElementById('winnerMessage')


// General NOTE: domObj.squarePlayed = true/false, which is NOT the type of mark





// ***************************************************************
//*********Create DOM objects W/ Game logic**************** */

const mainBoxExecutions = (domObj) => {
    // mark box with X or O
    insertXO(whosTurn,domObj)     
    domObj.squarePlayed = true // set it to true when clicked
    playerChanger(whosTurn)
    checkIfWin()
    checkForTie()  
    turnCounter++
}


// init DOM objects
const tlbObj = document.getElementById('topLeftBox')
const tmbObj = document.getElementById('topMiddleBox')
const trbObj = document.getElementById('topRightBox')
const mlbObj = document.getElementById('middleLeftBox')
const mmbObj = document.getElementById('middleMiddleBox')
const mrbObj = document.getElementById('middleRightBox')
const blbObj = document.getElementById('BottomLeftBox')
const bmbObj = document.getElementById('BottomMiddleBox')
const brbObj = document.getElementById('BottomRightBox')

const domObjList = [tlbObj,tmbObj,trbObj,mlbObj,mmbObj,mrbObj,blbObj,bmbObj,brbObj]
console.log(tlbObj===domObjList[0])
// init var squarePlayed. Hold if a box has been played. Set to FALSE for start
tlbObj.squarePlayed = false 

// init DOM object event listeners
// for (let i = 0; i < domObjList.length; i++) {  // trying to use a FOR loop instead
//     domObjList[i].addEventListener('click',function() {mainBoxExecutions(i)})
// }
tlbObj.addEventListener('click', function() {mainBoxExecutions(tlbObj)},{once:true})
tmbObj.addEventListener('click', function() {mainBoxExecutions(tmbObj)},{once:true})
trbObj.addEventListener('click', function() {mainBoxExecutions(trbObj)},{once:true})
mlbObj.addEventListener('click', function() {mainBoxExecutions(mlbObj)},{once:true})
mmbObj.addEventListener('click', function() {mainBoxExecutions(mmbObj)},{once:true})
mrbObj.addEventListener('click', function() {mainBoxExecutions(mrbObj)},{once:true})
blbObj.addEventListener('click', function() {mainBoxExecutions(blbObj)},{once:true})
bmbObj.addEventListener('click', function() {mainBoxExecutions(bmbObj)},{once:true})
brbObj.addEventListener('click', function() {mainBoxExecutions(brbObj)},{once:true})


//****************DomObjects var inits */

// init the mark types if X
for (let i = 0; i < domObjList.length; i++) {  // trying to use a FOR loop instead
    domObjList[i].isMarkTypeX = undefined 
}
// tmbObj.isMarkTypeX = undefined 
// trbObj.isMarkTypeX = undefined
// mlbObj.isMarkTypeX = undefined
// mmbObj.isMarkTypeX = undefined
// mrbObj.isMarkTypeX = undefined
// blbObj.isMarkTypeX = undefined
// bmbObj.isMarkTypeX = undefined
// brbObj.isMarkTypeX = undefined



//****************************************************************** */


// NOTE DONE!! function to restart game on load
    // CAN'T you just force a page reset??
const restartGame = () =>{
    location.reload()
    // setAllBoxesToNotPlayed()
    // whosTurn = true
    // turnCounter = 1
    // remove all ticks
}
    // zero out all relevant variables
        // whosTurn, state of clicks
            // https://www.w3schools.com/howto/howto_js_remove_class.asp


// function to change turns
// INPUT: boolean , output:NA , but need to change whosTurn
const playerChanger = (whoTurnVar) => {
    if (whoTurnVar === true){
        whosTurn = false
    } else {
        whosTurn = true
    }    
    
    if (gameOver === false){    
        if (whosTurn === true){ 
            displayBox.innerText = "It is Player 1's turn (X)"
        } else {
            displayBox.innerText = "It is Player 2's turn (O)"
        }
    }
}

// method to display marking on box
    // input user as true or false AND the box id
    // method called grabber
    // HOW TO PASS  IN ELEMENT ID?
const insertXO = (user,elementObj) => {
    
    // let addMarkObj = document.getElementById("topLeftBox") //need to pass in elemtn later
    // player1 = True and "X"
    if (hasBoxBeenPlayed(elementObj) === false){  //box is not filled
        if (user === true){  // aka player 1
            elementObj.isMarkTypeX = true
            let img = document.createElement('img')
            img.src = "img/X_edited_50prct.png"
            elementObj.appendChild(img) 

        } else if (hasBoxBeenPlayed(user) === false){ // aka player 2
            elementObj.isMarkTypeX = false
            let img = document.createElement('img')
            img.src = "img/O_edited_50prct.png"
            elementObj.appendChild(img)  
        } else{}

    } else {// don't set box cos box is filled
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

// sets the class for all the boxes to played for restart or otherwise
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

// sets the class for all the boxes as NOT played for restart or otherwise
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



// function to check if theres a tie
// i think if the turn = 9 and no win, then a tie
const checkForTie = () => {
    if (turnCounter >= 9) {
        displayBox.innerText = "IT WAS A TIE!" 
        setAllBoxesToPlayed()
        
    }
}


// method to check if theres a win
    // check if there are wins in rows
    // check what the rows are composed of
    // !! DON"T want to check the squarePlayed state, I want the type of marking
const checkIfWin = () => {

    if (

        // For X Win states
        // row wins
        tlbObj.isMarkTypeX === true && tmbObj.isMarkTypeX === true && trbObj.isMarkTypeX === true ||
        mlbObj.isMarkTypeX === true && mmbObj.isMarkTypeX === true && mrbObj.isMarkTypeX === true ||
        blbObj.isMarkTypeX === true && bmbObj.isMarkTypeX === true && brbObj.isMarkTypeX === true ||

        // column wins
        tlbObj.isMarkTypeX === true && mlbObj.isMarkTypeX === true && blbObj.isMarkTypeX === true ||
        tmbObj.isMarkTypeX === true && mmbObj.isMarkTypeX === true && bmbObj.isMarkTypeX === true ||
        trbObj.isMarkTypeX === true && mrbObj.isMarkTypeX === true && brbObj.isMarkTypeX === true ||
        
        // x wins
        tlbObj.isMarkTypeX === true && mmbObj.isMarkTypeX === true && brbObj.isMarkTypeX === true ||
        trbObj.isMarkTypeX === true && mmbObj.isMarkTypeX === true && blbObj.isMarkTypeX === true

    ) { displayBox.innerText = "Player 1 (X) IS WINNER!!!" 

        setAllBoxesToPlayed()

        // removeTurnDisplay()

        gameOver = true
        }

    else if (


        // For Y Win states
        // row wins
        tlbObj.isMarkTypeX === false && tmbObj.isMarkTypeX === false && trbObj.isMarkTypeX === false ||
        mlbObj.isMarkTypeX === false && mmbObj.isMarkTypeX === false && mrbObj.isMarkTypeX === false ||
        blbObj.isMarkTypeX === false && bmbObj.isMarkTypeX === false && brbObj.isMarkTypeX === false ||

        // column wins
        tlbObj.isMarkTypeX === false && mlbObj.isMarkTypeX === false && blbObj.isMarkTypeX === false ||
        tmbObj.isMarkTypeX === false && mmbObj.isMarkTypeX === false && bmbObj.isMarkTypeX === false ||
        trbObj.isMarkTypeX === false && mrbObj.isMarkTypeX === false && brbObj.isMarkTypeX === false ||
        
        // x wins
        tlbObj.isMarkTypeX === false && mmbObj.isMarkTypeX === false && brbObj.isMarkTypeX === false ||
        trbObj.isMarkTypeX === false && mmbObj.isMarkTypeX === false && blbObj.isMarkTypeX === false

        
    ) { displayBox.innerText = "Player 2 (O) IS WINNER!!!" 

        setAllBoxesToPlayed()
        // removeTurnDisplay()

        gameOver = true
        }
    
}


// function to check if box is alreay set
// INPUT: DOMobj, OUTPUT: T/F
const hasBoxBeenPlayed = (domObj) => {
    if (domObj.squarePlayed === true){
        return true
    } else {return false}
}

// method to display the winner
// set innertext of winnerMessage div
// inputs needs true of false or none
// const displayWinner = (winner) => {
//     let displayWinner = document.getElementById('winnerMessage')
//     if (winner === true) {
//         displayWinner.innerText = "Player 1 is the Winner!"
//     } else if (winner === false) {
//         displayWinner.innerText = "Player 2 is the Winner!"
//     } else (displayWinner.innerText = "Game on!")
// }

const removeTurnDisplay = () => {
    displayBox.innerText = ""
}


// restart button function
let restartButtonObj = document.getElementById('restartButton')
restartButtonObj.addEventListener('click',function() {
    restartGame()
})


// NOT functional
// const removeAllBoxEventListeners = () => {
//     tlbObj.removeEventListener('click', mainBoxExecutions)

//     tmbObj.removeEventListener("click")
//     trbObj.removeEventListener("click")
//     mlbObj.removeEventListener("click")
//     mmbObj.removeEventListener("click")
//     mrbObj.removeEventListener("click")
//     blbObj.removeEventListener("click")
//     bmbObj.removeEventListener("click")
//     brbObj.removeEventListener("click")
// }

//********************************************* */
// TESTING AREA
const testArray = [tlbObj,tmbObj,trbObj,mlbObj,mmbObj,mrbObj,blbObj,bmbObj,brbObj]


// TEST button output
// const divTestObj = document.getElementById('testButton')  // TESTING
// divTestObj.addEventListener('click', function(event) {
//    console.log("tl.square played:"+testArray[0].squarePlayed)
//    console.log("tm.square played:"+testArray[1].squarePlayed)
//    console.log("tr.square played:"+testArray[2].squarePlayed)
//    console.log("ml.square played:"+testArray[3].squarePlayed)
//    console.log("mm.square played:"+testArray[4].squarePlayed)
//    console.log("mr.square played:"+testArray[5].squarePlayed)
//    console.log("bl.square played:"+testArray[6].squarePlayed)
//    console.log("bm.square played:"+testArray[7].squarePlayed)
//    console.log("br.square played:"+testArray[7].squarePlayed)

//    console.log("tl.isMarkTypeX:"+testArray[0].isMarkTypeX)
//    console.log("tm.isMarkTypeX:"+testArray[1].isMarkTypeX)
//    console.log("tr.isMarkTypeX:"+testArray[2].isMarkTypeX)
//    console.log("ml.isMarkTypeX:"+testArray[3].isMarkTypeX)
//    console.log("mm.isMarkTypeX:"+testArray[4].isMarkTypeX)
//    console.log("mr.isMarkTypeX:"+testArray[5].isMarkTypeX)
//    console.log("bl.isMarkTypeX:"+testArray[6].isMarkTypeX)
//    console.log("bm.isMarkTypeX:"+testArray[7].isMarkTypeX)
//    console.log("br.isMarkTypeX:"+testArray[7].isMarkTypeX)

//     console.log()
//     console.log("whosTurn:"+ whosTurn)
//     console.log("turnCounter:"+turnCounter)
// })