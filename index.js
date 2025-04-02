// Your code here
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
