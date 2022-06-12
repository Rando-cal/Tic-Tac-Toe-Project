// TO DO
// remove photos - maybe not with refresh


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
    // you can pass in just an DOMobject and its properties will come with it


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


//*********Create DOM objects W/ Game logic**************** */

const tlbObj = document.getElementById('topLeftBox')

tlbObj.squarePlayed = false // init squarePlayed to F to start

    console.log("tlbObj.squarePlayed.outsd:"+tlbObj.squarePlayed)


//********* */
tlbObj.addEventListener('click', function(event) {

    // mark box with X or O
    insertXO(whosTurn,tlbObj) 


    // check for win state
    
    tlbObj.squarePlayed = true // set it to true when clicked
    playerChanger(whosTurn)
    turnCounter++
})

//***

const tmbObj = document.getElementById('topMiddleBox')
tmbObj.squarePlayed = false // init

tmbObj.addEventListener('click', function(event) {


    // mark box with X or O
    insertXO(whosTurn,tmbObj) 

    // check for win state

    // console.log("bxPlyd?:"+hasBoxBeenPlayed(tmbObj.squarePlayed))
    
    tmbObj.squarePlayed = true // set it to true when clicked
    playerChanger(whosTurn)
    turnCounter++
    
})


//******

const trbObj = document.getElementById('topRightBox')
trbObj.squarePlayed = false // init

trbObj.addEventListener('click', function(event) {


    // console.log("trbObj.squarePlayed.insid:"+trbObj.squarePlayed)


    // mark box with X or O
    insertXO(whosTurn,trbObj) 


    // check for win state

    // console.log("bxPlyd?:"+hasBoxBeenPlayed(trbObj.squarePlayed))
    
    trbObj.squarePlayed = true // set it to true when clicked
    playerChanger(whosTurn)
    turnCounter++

})

const mlbObj = document.getElementById('middleLeftBox')
mlbObj.squarePlayed = false // init

mlbObj.addEventListener('click', function(event) {



    // console.log("mlbObj.squarePlayed.insid:"+trbObj.squarePlayed)


    // mark box with X or O
    insertXO(whosTurn,mlbObj) 


    // check for win state

    // console.log("bxPlyd?:"+hasBoxBeenPlayed(mlbObj.squarePlayed))
    
    mlbObj.squarePlayed = true // set it to true when clicked
    playerChanger(whosTurn)
    turnCounter++

})

const mmbObj = document.getElementById('middleMiddleBox')
mmbObj.squarePlayed = false // init

mmbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place


    // mark box with X or O
    insertXO(whosTurn,mmbObj) 


    // check for win state
    
    mmbObj.squarePlayed = true // set it to true when clicked
    playerChanger(whosTurn)
    turnCounter++


})

const mrbObj = document.getElementById('middleRightBox')
mrbObj.squarePlayed = false // init

mrbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place


    // mark box with X or O
    insertXO(whosTurn,mrbObj) 


    // check for win state
    
    mrbObj.squarePlayed = true // set it to true when clicked
    playerChanger(whosTurn)
    turnCounter++


})

const blbObj = document.getElementById('BottomLeftBox')
blbObj.squarePlayed = false // init

blbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place


    // mark box with X or O
    insertXO(whosTurn,blbObj) 


    // check for win state
    
    blbObj.squarePlayed = true // set it to true when clicked
    playerChanger(whosTurn)
    turnCounter++


})

const bmbObj = document.getElementById('BottomMiddleBox')
bmbObj.squarePlayed = false // init

bmbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place


    // mark box with X or O
    insertXO(whosTurn,bmbObj) 


    // check for win state
    
    bmbObj.squarePlayed = true // set it to true when clicked
    playerChanger(whosTurn)
    turnCounter++



})

const brbObj = document.getElementById('BottomRightBox')
brbObj.squarePlayed = false // init

brbObj.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place


    // mark box with X or O
    insertXO(whosTurn,brbObj) 


    // check for win state
    
    brbObj.squarePlayed = true // set it to true when clicked
    playerChanger(whosTurn)
    turnCounter++



})

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
        
            let img = document.createElement('img')
            img.src = "img/x.png"
            elementObj.appendChild(img) 

        } else if (hasBoxBeenPlayed(user) === false){ // aka player 2
            let img = document.createElement('img')
            img.src = "img/o_300x300px.png"
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

// method to check if theres a win
    // check if there are wins in rows
    // check what the rows are composed of
const checkIfWin = () => {
}


// method to check if the game is over
const endGameCheck = () => {
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
   console.log("tl.square played:"+testArray[0].squarePlayed)
   console.log("tm.square played:"+testArray[1].squarePlayed)
   console.log("tr.square played:"+testArray[2].squarePlayed)
   console.log("ml.square played:"+testArray[3].squarePlayed)
   console.log("mm.square played:"+testArray[4].squarePlayed)
   console.log("mr.square played:"+testArray[5].squarePlayed)
   console.log("bl.square played:"+testArray[6].squarePlayed)
   console.log("bm.square played:"+testArray[7].squarePlayed)
   console.log("br.square played:"+testArray[7].squarePlayed)

    console.log("whosTurn:"+ whosTurn)
    console.log("turnCounter:"+turnCounter)
})

// setTimeout(function(){ /// SLEEP through delayed funct in 
//     markBoxAsNotPlayed (divTest)
// },5000)
