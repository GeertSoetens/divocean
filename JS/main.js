'use strict';

// Execute script when page is loaded
window.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const herocontent = document.getElementById("herocontent");
    const video = document.getElementById("video");
    const playbtn = document.getElementById("playbtn");

    // Make play button clickable
    playbtn.addEventListener("click", () => {
        herocontent.style.display = "none";
        video.style.display = "block";
        video.play();
    });
})