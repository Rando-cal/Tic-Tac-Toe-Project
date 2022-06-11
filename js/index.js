// GENERAL NOTES
    // set a boolean var to undefined if you need to clear it
    // put eventlistener higher up and have it bubble up


const divTest = document.getElementById('topLeftBox')  // TESTING

// set event listeners to the divs
const tlb = document.getElementById('topLeftBox')
tlb.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place
})


const tmb = document.getElementById('topMiddleBox')
tmb.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const trb = document.getElementById('topRightBox')
trb.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const mlb = document.getElementById('middleLeftBox')
mlb.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const mmb = document.getElementById('middleMiddleBox')
mmb.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const mrb = document.getElementById('middleRightBox')
mrb.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const blb = document.getElementById('BottomLeftBox')
blb.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const bmb = document.getElementById('BottomMiddleBox')
bmb.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

const brb = document.getElementById('BottomRightBox')
brb.addEventListener('click', function(event) {
    console.log(event.target)  // give where it took place

})

// function to restart game on load
    // zero out all relevant variables
        // whosTurn, state of clicks
            // https://www.w3schools.com/howto/howto_js_remove_class.asp

// function to restart game after end
    // see if its end by running checkEnd
    // run restartgame func


// var of whos turn. True equals player1,X ; false = player2,O
let whosTurn = undefined  // set to player1 by default

// loop / function of whos turn its is check
// DON"T think i need this
// input:none output t/f
const checkTurn = () => {
    if (whosTurn === true) {
        return true
    } else {return false}
}

// function of what was clicked
    // get an element and give the id or class

// function to change turns
const turnChanger = () => {
    if (whosTurn === true){
        whosTurn === false
    } else {
        whosTurn === true
    }
}

// function to check square



// method to display marking on box
    // input user as true or false AND the box id
    // method called grabber
    // HOW TO PASS  IN ELEMENT ID?
const setMoveToSquare = (user,elementId) => {
    // check if its fill or not
    // run checkbox 
    // let addMarkObj = document.getElementById("topLeftBox") //need to pass in elemtn later

        if (user === true){
            // player1 = T,x
            // is block set - do function here
            let img = document.createElement('img')
            img.src = "img/x.png"
            elementId.appendChild(img) 

        } else if (user === false){
            let img = document.createElement('img')
            img.src = "img/o_300x300px.png"
            elementId.appendChild(img)  
        } else{}
}

// function remove image from square
// INPUT: element to remove
const removeImageFromSquare = () => {
    let grabImage = document.getElementById('image_X')
    grabImage.parentNode.removeChild(image_x) // NOT FUNCT YET
}

// function to mark div as filled
// INPUT:element OUTPUT: nothing
const markBoxAsPlayed = (element) => {
    element.classList.add("fullBox")
}

// removes class of element fullbox
const markBoxAsNotPlayed = (element) => {
    element.classList.remove('fullBox');
}

// sets the class for all the boxes
// const setAllBoxesAsPlayed = () => {
//     const allBoxes = document.getElementsByClassName('box'){
//         for (let i = 0; i < allBoxes.length; i++ ) {
//         allBoxes.classList.add("fullBox")
//     }
// }

// *** get the element. will be dervied from EVENT LISTENER


// method to check if theres a win
    // check if there are wins in rows
    // check what the rows are composed of

const checkIfWin = () => {

}


// method to check if the game is over
const endGameCheck = () => {

}

// var for end of game
let gameOver = false

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

// var for winner, True is player 1, False 2
// can you set a variable to null?
let playerWinner = null

// method to check on click what element was clicked
    // check out Nodename ==> I don't think this give enough info
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

// const makePalette = () => {

// }

//callback function passed to another function
// USEOBJEct.addEventListener('click', tehfunction)   // don't want to invoke it but pass it, so passing function on

// generate.addEventListener('click', makePalette)

// const addColor = (event) => {

//     // seledt the clicked squares background color
//     const color = event.target.style.backgroundColor  //not square, but the certain thing by using event.target

//     // add the class of square to my new square
//     newSquare.classList.add('square')


//     // add my new square to my-palette
// myPalette.appendChild(newSquare)
// }


//********************************************* */
//  TESTING AREA
// setMoveToSquare(true,divTest)

// markBoxAsNotPlayed (divTest)



// setTimeout(function(){ /// SLEEP through delayed funct in 
//     markBoxAsNotPlayed (divTest)
// },5000)


