"use strict";

const dodger = document.getElementById("dodger");
dodger.style.bottom = "175px";
dodger.style.left = "175px";

document.addEventListener("keydown", function (event) {
  console.log(event);
});

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();

    } 
    
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    }

    if (event.key === "ArrowUp") {
        moveDodgerUp();
    }

    if (event.key === "ArrowDown") {
        moveDodgerDown();
    }
});

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
    dodger.style.left = `${left - 10}px`;
} else {
    playGameOverSound();
}
    playSoundOnMovement();
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 10}px`;
    } else {
        playGameOverSound();
    }
    playSoundOnMovement();
}

function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 360) {
        dodger.style.bottom = `${bottom + 10}px`;
    } else {
        playGameOverSound();
    }
    playSoundOnMovement();
}

function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 10}px`;
    } else {
        playGameOverSound();
    }
    playSoundOnMovement();
}

const movementSound = document.getElementById("movementSound");

function playSoundOnMovement() {
    movementSound.currentTime = 0;
    movementSound.play();
}

const gameoverSound = document.getElementById("gameoverSound");

function playGameOverSound() {
    gameoverSound.currentTime = 0;
    gameoverSound.play();
}