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
    gameSpeed: 20, // game loop refresh rate (pictures per second)
    characterSpeed: 5 // move offset in PX
}



/***********************************
 * START GAME
 * **********************************/
function startGame() {
    home.style.display = "none" 
    game.style.display = "block"
    surface.style.display = "block"
    dashboard.style.display = "block"
    //score.style.display = "none"
    body.style.backgroundImage = "url(./img/bg/basic/c4m9iW.webp)"
    questions.style.display = "none"
    endGame.style.display = "none"

    GAME_SCREEN.debug_output.style.backgroundColor = "rgba(170, 201, 175, 0.679)"
    lives = 3

    PLAYER.coinCount = 0
    pokemonCounter = 0

    GAME_SCREEN.redbox.src = pokemon[pokemonCounter].img //how to change the img
    GAME_SCREEN.redbox.style.width = pokemon[pokemonCounter].width + "px"
    GAME_SCREEN.redbox.style.height = pokemon[pokemonCounter].height + "px"

    PLAYER.box.style.left = '5px'; // starting position
    PLAYER.box.style.top = '5px'; // starting position
    PLAYER.box.style.opacity = '1'; // show player
    PLAYER.spriteImg.style.right = '0px'; // starting animation

    //GAME_SCREEN.startButton.innerHTML = 'STARTED';
    //GAME_SCREEN.startButton.removeAttribute('onclick');

    gameLoop();

    gameTimer = setTimeout(endRun, 300000)
    startTime = performance.now()

    updateHUD()

    lives = 3
}



/***********************************
 * DRAW HUD (debugger box)
 * **********************************/
function updateHUD(){
    // print values in debugger box
    GAME_SCREEN.debug_output.innerHTML = `x: ${PLAYER.box.style.left} | y: ${PLAYER.box.style.top} | ${PLAYER.coinCount}/${pokemonCounter + 1} pokemon caught | lives: ${lives}`;
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
let endGame = document.getElementById("endGame")
let questions = document.getElementById("questions")
let dashboard = document.getElementById("dashboard")
let pokemon_caught = document.getElementById("pokemon_caught")
let questionnaire = document.getElementById("questionnaire")
let question_box = document.getElementById("question_box")
let question_txt = document.getElementById("question_txt")
let question_answer = document.getElementById("question_answer")
let pokemon_caught_img = document.getElementById("pokemon_caught_img")
let audioButton = document.getElementById("audioButton")
let offNOn = document.getElementById("offNOn")
let playerScoreSorted = document.getElementById("players")
let trainerPokemon = document.getElementById("trainerPokemon")
let rivalPokemon = document.getElementById("rivalPokemon")

let txt = ""
let musicState = false
let bgmusic
let gameTimer
//let allPlayerName = []
let allPlayerName = JSON.parse( localStorage['highscores'] ?? '[]' );
let allPlayerCounter = 0
let startTime
let pokemonCaughtArray = []
let footsteps = new Audio("./audio/footsteps/Nintendo Switch - Animal Crossing_ New Horizons - Sound Effects - Footsteps/Pl_Footstep_Pumps_GrassAutumn_Walk_00_Ac.wav")

let lives = 3
let pokemonChosen = []
let rivalPokemonArray = []
let rivalCurrPokemon = 0
let trainerCurrPokemon = 0

//
function loadPage() {
    game.style.display = "none"
    score.style.display = "none"
    text.style.display = "none"
    endGame.style.display = "none"
}

loadPage()

function showRules() {
    start.style.display = "none"
    rules.style.display = "none"
    idk.style.display = "none"  
    logo.style.display = "none"
    text.style.display = "block"
    txt = ""

    txt += `
        <div>
            <div>
                <h1>PokeQuest</h1>
            </div>
            <div>You are a trainer trying to catch some Pokemon to face off with against your rival.</div>
            <div>Catch as many Pokemon as you can in limited time.</div>
            <div>You catch one if you answer the question correctly.</div>
            <div>You get 3 lives, if you answer incorrectly you loose one live. Loose all lives and it's game over.</div>
            <div>After the timer is up 3 random Pokemon are choosen to face against your rival.</div>
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
    body.style.backgroundImage = "url(./img/bg/start/adf23c20-d055-4c08-95c9-ac023fcca730.jpg)"

    home.style.display = "block"
    game.style.display = "none"
    score.style.display = "none"
}

function showScoreBoard() {
    body.style.backgroundImage = "url(./img/bg/start/adf23c20-d055-4c08-95c9-ac023fcca730.jpg)"

    home.style.display = "none"
    game.style.display = "none"
    score.style.display = "block"

    localStorage['highscores'] = JSON.stringify(allPlayerName);

    txt = ""
    for(let i = 0; i < allPlayerName.length; i++) {
        txt += `
            <div style="padding-top: 1.5%;">
                ${allPlayerName[i].playerName} // ${allPlayerName[i].time}s // ${allPlayerName[i].coinCount}
            </div>
        `
    }

    playerScoreSorted.style.display = "block"
    playerScoreSorted.innerHTML = txt

    score.style.height = "auto"
}

function endRun() {
    body.style.backgroundImage = "url(./img/bg/start/adf23c20-d055-4c08-95c9-ac023fcca730.jpg)"

    let players = document.getElementById("players")
    let backFromScore = document.getElementById("backFromScore")

    home.style.display = "none"
    game.style.display = "none"
    score.style.display = "block"
    players.style.display = "block"
    backFromScore.style.display = "none"
    endGame.style.display = "none"

    txt = ""
    txt = `
        <div style="display: flex; flex-direction: row; padding-top: 1.5%; justify-content: center; align-items: center;">
            <div>
                <input type="text" id="playerName">
            </div>
            <div onclick="addScore()" id="scoreAdder" style="margin-left: 2.5%">
                add score
            </div>
        </div>
    `
    players.innerHTML = txt

    scoreOfPlayer = {
        "playerName": `player${allPlayerCounter}`,
        "coinCount": PLAYER.coinCount,
        "time": Math.floor(((performance.now() - startTime)/1000))
    }

    clearInterval(gameTimer)
}

function addScore() {
    allPlayerName = JSON.parse( localStorage['highscores'] ?? '[]' );

    let playerNameInput = document.getElementById("playerName")
    //let playerInfo = document.getElementById("playerInfo")
    
    let playerName = playerNameInput.value

    if(playerName != "") {
        players.style.display = "none"
        backFromScore.style.display = "block"

        clearTimeout(timer)

        score.style.height = "auto"

        scoreOfPlayer.playerName = playerName
        allPlayerCounter++

        allPlayerName.push(scoreOfPlayer)
        allPlayerName.sort((a,b) =>{
            if(b.coinCount != a.coinCount)
                return b.coinCount - a.coinCount
            return a.time - b.time
        })
        localStorage['highscores'] = JSON.stringify(allPlayerName);

        txt = ""
        for(let i = 0; i < allPlayerName.length; i++) {
            //playername // pokemoncaught // rivalbeat // time
            txt += `
                <div style="padding-top: 1.5%;">
                    ${allPlayerName[i].playerName} // ${allPlayerName[i].time}s // ${allPlayerName[i].coinCount}
                </div>
            `
        }

        playerScoreSorted.style.display = "block"
        playerScoreSorted.innerHTML = txt
    }
}

function catchPokemon() {
    console.log("pokemon catching in progress")

    questions.style.display = "block"
    surface.style.display = "none"
    dashboard.style.display = "none"

    console.log(pokemonCounter)
    pokemon_caught_img.src = pokemon[pokemonCounter].img

    //
    question_txt.innerHTML = pokemon[pokemonCounter].question
    
    txt = ""
    for(let i = 0; i < pokemon[pokemonCounter].choices.length; i++) {
        txt += `<div onclick="checkAnswer(this)">${pokemon[pokemonCounter].choices[i]}</div>`
    }
    
    question_answer.innerHTML = txt
    txt = ""

    //pokemonCounter++
    //console.log("after catch ..." + pokemonCounter)
}

function checkAnswer(choice) {
    questions.style.display = "none"
    surface.style.display = "block"
    dashboard.style.display = "block"
    //pokemonCounter++

    console.log(choice.innerHTML)
    console.log(pokemon[pokemonCounter].answer)
    console.log(choice.innerHTML == pokemon[pokemonCounter].answer)

    if(choice.innerHTML == pokemon[pokemonCounter].answer) {
        pokemonCaughtArray[PLAYER.coinCount] = pokemon[pokemonCounter]

        PLAYER.coinCount++
        console.log("true" + PLAYER.coinCount)
        updateHUD()
    }
    else {
        lives--
        updateHUD()

        if(lives == 0) {
            endRun()
        }
    }

    pokemonCounter++

    if(63 == pokemonCounter) {
        //endRun()
        if(0 < lives) {
            bossFight()
        }
    }
    else {
        //console.log("after check ..." + pokemonCounter)
        GAME_SCREEN.redbox.src = pokemon[pokemonCounter].img //how to change the img
        GAME_SCREEN.redbox.style.width = pokemon[pokemonCounter].width + "px"
        GAME_SCREEN.redbox.style.height = pokemon[pokemonCounter].height + "px"
    }
}

function muteUnmute() {
    if(musicState == false) {
        //start music
        bgmusic = new Audio("./audio/bg_music/end.mp3")
        bgmusic.play()

        offNOn.src = "./img/audio_icon/on.png"
        musicState = true
    }
    else {
        //stop music
        bgmusic.pause()

        offNOn.src = "./img/audio_icon/off.png"
        musicState = false
    }
}

function bossFight() {
    endGame.style.display = "block"
    surface.style.display = "none"

    body.style.backgroundImage = "url(./img/bg/basic/wp8862046.jpg)"
    GAME_SCREEN.debug_output.style.backgroundColor = "rgba(107, 176, 209, 0.679)"

    rivalCurrPokemon = 0
    trainerCurrPokemon = 0

    //clearTimeout(timer)
    clearInterval(gameTimer)

    //randomly choose 3 pokemon for player
    let random = Math.floor(Math.random() * PLAYER.coinCount)
    let randomArray = []
    for(let i = 0; i < 3; i++) {
        randomArray[i] = random
        random = Math.floor(Math.random() * PLAYER.coinCount)
        //endless need to fix
        /*while(randomArray.includes(random)) {
            random = Math.floor(Math.random() * PLAYER.coinCount)
        }*/
    }

    for(let i = 0; i < 3; i++) {
        pokemonChosen[i] = pokemonCaughtArray[randomArray[i]]
    }

    //pokemon chosen for the rival
    for(let i = 0; i < 3; i++) {
        randomArray[i] = random
        random = Math.floor(Math.random() * pokemon.length)
        //endless need to fix
        /*while(randomArray.includes(random)) {
            random = Math.floor(Math.random() * pokemon.length)
        }*/
    }

    for(let i = 0; i < 3; i++) {
        rivalPokemonArray[i] = pokemon[randomArray[i]]
    }

    //display the pokemon
    rivalPokemon.src = rivalPokemonArray[rivalCurrPokemon].img
    trainerPokemon.src = pokemonChosen[trainerCurrPokemon].back

    //rivalPokemon.style.width = rivalPokemonArray[rivalCurrPokemon].width + "px"
    //rivalPokemon.style.height = rivalPokemonArray[rivalCurrPokemon].height + "px"

    //trainerPokemon.style.width = pokemonChosen[trainerCurrPokemon].width + "px"
    //trainerPokemon.style.height = pokemonChosen[trainerCurrPokemon].height + "px"
}

function roll() {

}