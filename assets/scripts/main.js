// main.js

let honkBtn = document.getElementById("honk-btn");
let numberInput = document.getElementById("volume-number");
let hornSound = document.getElementById("horn-sound");
let slider = document.getElementById("volume-slider");

// input field changes audio volume and slider
numberInput.addEventListener("input", numberUpdateVolume);

// slider changes audio volume and input field
slider.addEventListener("input", sliderUpdateVolume);

// clicking the button plays the sound
honkBtn.addEventListener("click", cancelSubmission);
honkBtn.addEventListener("click", honk);

// functions for the button click
function honk() {
    hornSound.play();
}

function cancelSubmission(event) {
    event.preventDefault();
}

// function for updating audio volume from input field
function numberUpdateVolume() {
    hornSound.volume = numberInput.value / 100;
    slider.value = numberInput.value;
}

// function for updating audio volume from slider
function sliderUpdateVolume() {
    hornSound.volume = slider.value / 100;
    numberInput.value = slider.value;
}