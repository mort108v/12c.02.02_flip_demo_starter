"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");
    document.querySelector("#generator").addEventListener("click", generateBox);
}

function generateBox() {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomColor();

    document.querySelector("#generated").append(box);

    // TODO: Create FLIP animation
    // 1. The first: Find the start position
    const start = document.querySelector("#generator").getBoundingClientRect();
    // 2. Second: Find end position
    const end = box.getBoundingClientRect();
    // 3. Third: Translate element to start pos
    const diffX = start.x - end.x;
    const diffY = start.y - end.y;

    box.style.setProperty("--diffX", diffX + "px");
    box.style.setProperty("--diffY", diffY + "px");

    // box.style.transform = `translate(${diffX}px, (${diffY}px)`

    // Make it recalculate layout frames
    box.offsetHeight;

    // Something with get frameAnimation


    // 4. Fourth: Animate element to translate(0,0);
    // box.style.transition = "transform 1s";
    // box.style.transform = "translate(0,0)";
    box.classList.add("animate");

}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}