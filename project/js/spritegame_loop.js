/***********************************
 * SCRIPT REFERENCES
 ***********************************/
/// <reference path="spritegame_detectCollisions.js" />
/// <reference path="spritegame_keyevents.js" />
/// <reference path="spritegame_player.js" />
/// <reference path="spritegame_main.js" />



/***********************************
 * GAME LOOP
 * **********************************/
function gameLoop() {
    if (KEY_EVENTS.leftArrow) {
        movePlayer((-1) * GAME_CONFIG.characterSpeed, 0, -1);
        PLAYER.spriteImg.style.bottom = "83px"
        animatePlayer();
        updateHUD();
    }
    if (KEY_EVENTS.rightArrow) {
        movePlayer(GAME_CONFIG.characterSpeed, 0, 1);
        PLAYER.spriteImg.style.bottom = "83px"
        animatePlayer();
        updateHUD();
    }
    if (KEY_EVENTS.upArrow) {
        movePlayer(0, (-1) * GAME_CONFIG.characterSpeed, 0);
        PLAYER.spriteImg.style.bottom = "53px"
        animatePlayer();
        updateHUD();
    }
    if (KEY_EVENTS.downArrow) {
        movePlayer(0, GAME_CONFIG.characterSpeed, 0);
        PLAYER.spriteImg.style.bottom = "0px"
        animatePlayer();
        updateHUD();
    }

    setTimeout(gameLoop, 1000 / GAME_CONFIG.gameSpeed); // async recursion
}
