/***********************************
 * SCRIPT REFERENCES
 ***********************************/
/// <reference path="spritegame_detectCollisions.js" />
/// <reference path="spritegame_keyevents.js" />
/// <reference path="spritegame_player.js" />


/***********************************
 * GAME SCREEN
 ***********************************/
let GAME_SCREEN = {
    surface: document.getElementById('surface'),
    surfaceScale: '80%',
    redbox: document.getElementById('redBox'),
    startButton: document.getElementById('startButton'),
    debug_output: document.getElementById('debug_output')
}

// Scale the surface to xx% of the screen width
GAME_SCREEN.surface.style.transform = `scale(${parseFloat(GAME_SCREEN.surfaceScale)/100 * (window.innerWidth / GAME_SCREEN.surface.clientWidth)})`;



/***********************************
 * GAME CONFIG
 ***********************************/
let GAME_CONFIG = {
    gameSpeed: 24, // game loop refresh rate (pictures per second)
    characterSpeed: 5 // move offset in PX
}



/***********************************
 * START GAME
 * **********************************/
function startGame() {
    hom.style.display = "none"
    gam.style.display = "block"

    PLAYER.box.style.left = '350px'; // starting position
    PLAYER.box.style.top = '180px'; // starting position
    PLAYER.box.style.opacity = '1'; // show player
    PLAYER.spriteImg.style.right = '0px'; // starting animation

    GAME_SCREEN.startButton.innerHTML = 'STARTED';
    GAME_SCREEN.startButton.removeAttribute('onclick');

    gameLoop();
}



/***********************************
 * DRAW HUD (debugger box)
 * **********************************/
function updateHUD(){
    // print values in debugger box
    GAME_SCREEN.debug_output.innerHTML = `x: ${PLAYER.box.style.left} | y: ${PLAYER.box.style.top} | animation: ${PLAYER.spriteImgNumber} | count: ${PLAYER.coinCount}`;
}



///
let gam = document.getElementById("game")
let hom = document.getElementById("home")
let rul = document.getElementById("rules")
let log = document.getElementById("logo")

let txt


function startingPage() {
    gam.style.display = "none"
}

startingPage()

function showRules() {
    log.style.display = "none"

    txt = `
        <div>
			<h1>PokeQuest</h1>
			<h3>
				You are a young trainer trying to catch some new Pokemon to face off with against your rival.
			</h3>
			<p>
				Catch as many Pokemon as you can by answering questions and getting them right. You have (???)mins to catch them. Once the time is up you have to choose which Pokemon you will face off with against your rival.
			</p>
			<p>
				Movement is controlled with the arowkeys up, down, left and right.
			</p>
				
        </div>
    `

    rul.innerHTML = txt
    rul.style.width = "50vw"
    rul.style.left = "25%"
}