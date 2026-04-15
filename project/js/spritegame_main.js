/***********************************
 * SCRIPT REFERENCES
 ***********************************/
/// <reference path="spritegame_detectCollisions.js" />
/// <reference path="spritegame_keyevents.js" />
/// <reference path="spritegame_player.js" />


/***********************************
 * GAME SCREEN
 ***********************************/
/*let GAME_SCREEN = {
    surface: document.getElementById('surface'),
    surfaceScale: '80%',
    redbox: document.getElementById('redBox'),
    startButton: document.getElementById('startButton'),
    debug_output: document.getElementById('debug_output')
}*/

// Scale the surface to xx% of the screen width
//GAME_SCREEN.surface.style.transform = `scale(${parseFloat(GAME_SCREEN.surfaceScale)/100 * (window.innerWidth / GAME_SCREEN.surface.clientWidth)})`;



/***********************************
 * GAME CONFIG
 ***********************************/
/*let GAME_CONFIG = {
    gameSpeed: 24, // game loop refresh rate (pictures per second)
    characterSpeed: 5 // move offset in PX
}*/



/***********************************
 * START GAME
 * **********************************/
/*function startGame() {
    hom.style.display = "none"
    gam.style.display = "block"

    PLAYER.box.style.left = '350px'; // starting position
    PLAYER.box.style.top = '180px'; // starting position
    PLAYER.box.style.opacity = '1'; // show player
    PLAYER.spriteImg.style.right = '0px'; // starting animation

    GAME_SCREEN.startButton.innerHTML = 'STARTED';
    GAME_SCREEN.startButton.removeAttribute('onclick');

    gameLoop();
}*/



/***********************************
 * DRAW HUD (debugger box)
 * **********************************/
/*function updateHUD(){
    // print values in debugger box
    GAME_SCREEN.debug_output.innerHTML = `x: ${PLAYER.box.style.left} | y: ${PLAYER.box.style.top} | animation: ${PLAYER.spriteImgNumber} | count: ${PLAYER.coinCount}`;
}*/



///
/*let gam = document.getElementById("game")
let hom = document.getElementById("home")
let rul = document.getElementById("rules")
let log = document.getElementById("logo")
let sta = document.getElementById("start")
let ext = document.getElementById("extra")
let bac

let txt
let count = 0
let isOnRules = false


function startingPage() {
    gam.style.display = "none"
}

startingPage()

function backHome() {
    log.style.display = "block"
    sta.style.display = "block"
    ext.style.display = "block"

    rul.innerHTML = txt
    rul.style = "width: 8vw; height: 15vh; border-radius: 100px; left: 72%; background-color: rgba(255, 255, 255, 0); cursor: url(img/cursor/open.png), auto;"
}

function showRules() {
    if(!isOnRules) {
        isOnRules = true

        //rul.onclick = ""

        log.style.display = "none"
        sta.style.display = "none"
        ext.style.display = "none"
        count++

        //onclick="showRules()"

        txt = `
            <div>
                <h1>PokeQuest</h1>
                <h3>
                    You are a young trainer trying to catch some new Pokemon to face off with against your rival.
                </h3>
                <p>
                    Catch as many Pokemon as you can by answering questions and getting them right. You get 3 tries per question. You have (???)mins to catch them. Once the time is up you have to choose which Pokemon you will face off with against your rival.
                </p>
                <p>
                    Movement is controlled with the arowkeys up, down, left and right.
                </p>
                <div id="back">back</div>
            </div>
        `

        rul.innerHTML = txt
        rul.style = "width: 40vw; left: 28.5%; background-color: rgba(133, 222, 255, 0.74); padding: 1.5%; height: 44vh; font-size: 120%; border-radius: 60px; cursor: url(img/cursor/closed.png), auto;"
        
        bac = document.getElementById("back")
        bac.onclick = showRules
    }
    else if(isOnRules) {
        isOnRules = false

        //rul.onclick = showRules

        txt = ""
        rul.innerHTML = txt

        log.style.display = "block"
        sta.style.display = "block"
        ext.style.display = "block"

        rul.style = "width: 8vw; height: 15vh; border-radius: 100px; left: 72%; background-color: rgba(255, 255, 255, 0); cursor: url(img/cursor/open.png), auto;"
    }
 
    /*    
    log.style.display = "none"
    sta.style.display = "none"
    ext.style.display = "none"
    count++

    txt = `
        <div>
            <h1>PokeQuest</h1>
            <h3>
                You are a young trainer trying to catch some new Pokemon to face off with against your rival.
            </h3>
            <p>
                Catch as many Pokemon as you can by answering questions and getting them right. You get 3 tries per question. You have (???)mins to catch them. Once the time is up you have to choose which Pokemon you will face off with against your rival.
            </p>
            <p>
                Movement is controlled with the arowkeys up, down, left and right.
            </p>
            <div onclick="backHome()" id="back">back</div>
        </div>
        `

    rul.innerHTML = txt
    txt = ""
    rul.style = "width: 40vw; left: 28.5%; background-color: rgba(133, 222, 255, 0.74); padding: 1.5%; height: 44vh; font-size: 120%; border-radius: 60px; cursor: url(img/cursor/closed.png), auto;"
    *//*
}*/