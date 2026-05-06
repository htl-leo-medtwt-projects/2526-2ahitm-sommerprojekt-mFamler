/***********************************
 * SCRIPT REFERENCES
 ***********************************/
/// <reference path="spritegame_detectCollisions.js" />
/// <reference path="spritegame_keyevents.js" />



/***********************************
 * PLAYER
 ***********************************/
let PLAYER = {
    box: document.getElementById('player'),
    spriteImg: document.getElementById('spriteImg'),
    spriteImgNumber: 0, // current animation frame of sprite image
    spriteDirection: 1,
    coinCount: 0
}



/***********************************
 * MOVE
 * **********************************/
/**
 * @param {number} dx - player x move offset in pixel
 * @param {number} dy - player y move offset in pixel
 * @param {number} dr - player heading direction (-1: look left || 1: look right)
 */
function movePlayer(dx, dy, dr) {
    // save original position
    let originalX = parseFloat(PLAYER.box.style.left);
    let originalY = parseFloat(PLAYER.box.style.top);

    // calculate new position
    PLAYER.box.style.left = (originalX + dx) + 'px';
    PLAYER.box.style.top = (originalY + dy) + 'px';


    // update sprite direction if needed
    if (dr != 0 && dr != PLAYER.spriteDirection) {
        PLAYER.spriteDirection = dr;
        PLAYER.box.style.transform = `scaleX(${dr})`;
    }

    if(isColliding(PLAYER.box, GAME_SCREEN.redbox, -17) == true) {
        console.log("touching")

        GAME_SCREEN.redbox.style.top = Math.floor(Math.random() * 400) + "px"
        GAME_SCREEN.redbox.style.left = Math.floor(Math.random() * 400) + "px"
    }
}



/***********************************
 * ANIMATE PLAYER
 * **********************************/
function animatePlayer() {
    if (PLAYER.spriteImgNumber < 2) { // switch to next sprite position
        PLAYER.spriteImgNumber++;
        let x = parseFloat(PLAYER.spriteImg.style.right);
        x += 40; // ANPASSEN!
        PLAYER.spriteImg.style.right = x + "px";
    } else { // animation loop finished: back to start animation
        PLAYER.spriteImg.style.right = "0px";
        PLAYER.spriteImgNumber = 0;
    }
}

