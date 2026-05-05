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
    surfaceScale: '50%',
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
    home.style.display = "none" 
    game.style.display = "block"
    //score.style.display = "none"
    body.style.backgroundImage = "url(./img/bg/basic/c4m9iW.webp)"

    PLAYER.box.style.left = '350px'; // starting position
    PLAYER.box.style.top = '180px'; // starting position
    PLAYER.box.style.opacity = '1'; // show player
    PLAYER.spriteImg.style.right = '0px'; // starting animation

    //GAME_SCREEN.startButton.innerHTML = 'STARTED';
    //GAME_SCREEN.startButton.removeAttribute('onclick');

    gameLoop();
}



/***********************************
 * DRAW HUD (debugger box)
 * **********************************/
function updateHUD(){
    // print values in debugger box
    GAME_SCREEN.debug_output.innerHTML = `x: ${PLAYER.box.style.left} | y: ${PLAYER.box.style.top} | animation: ${PLAYER.spriteImgNumber} | count: ${PLAYER.coinCount}`;
}

// new code
//
let home = document.getElementById('home')
let game = document.getElementById('game')
let score = document.getElementById('score')
let start = document.getElementById("start")
let rules = document.getElementById("rules")
let idk = document.getElementById("idk")
let logo = document.getElementById("logo")
let text = document.getElementById("text")
let body = document.getElementById("body")

let txt = ""

//
function loadPage() {
    game.style.display = "none"
    score.style.display = "none"
    text.style.display = "none"
}

loadPage()

function showRules() {
    start.style.display = "none"
    rules.style.display = "none"
    idk.style.display = "none"  
    logo.style.display = "none"
    text.style.display = "block"

    txt += `
        <div>
            <div>
                <h1>PokeQuest</h1>
            </div>
            <div>You are a trainer trying to catch some Pokemon to face off with against your rival.</div>
            <div>Catch as many Pokemon as you can in limited time.</div>
            <div>You catch one if you answer the question correctly, you get 3 tries to choose the right answer.</div>
            <div>After the timer is up choose the Pokemon you want to face up with against your rival.</div>
            <div>Movement is controlled with the arow-keys.</div>
            <div onclick="goBackToHome()" class="back">back</div>
        </div>
    `

    text.innerHTML = txt
    txt = ""
}

function goBackToHome() {
    start.style.display = "block"
    rules.style.display = "block"
    idk.style.display = "block"  
    logo.style.display = "block"
    text.style.display = "none"
}

function goBack() {
    home.style.display = "block"
    game.style.display = "none"
    score.style.display = "none"
}

function showScoreBoard() {
    home.style.display = "none"
    game.style.display = "none"
    score.style.display = "block"
}