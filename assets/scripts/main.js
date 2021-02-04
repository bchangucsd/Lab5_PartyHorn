// main.js

let honkBtn = document.getElementById("honk-btn");
let numberInput = document.getElementById("volume-number");
let slider = document.getElementById("volume-slider");

let hornSound = document.getElementById("horn-sound");

let volumeIcon = document.getElementById("volume-image");
let soundImage = document.getElementById("sound-image");

let radioAir = document.getElementById("radio-air-horn");
let radioCar = document.getElementById("radio-car-horn");
let radioParty = document.getElementById("radio-party-horn");

// input field changes audio volume and slider
numberInput.addEventListener("input", numberUpdateVolume);

// slider changes audio volume and input field
slider.addEventListener("input", sliderUpdateVolume);

// clicking the button plays the sound
honkBtn.addEventListener("click", cancelSubmission);
honkBtn.addEventListener("click", honk);

// update the horn image and sound when a radio button is changed
radioAir.addEventListener("input", updateHorn);
radioCar.addEventListener("input", updateHorn);
radioParty.addEventListener("input", updateHorn);


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
    updateIcon();
}

// function for updating audio volume from slider
function sliderUpdateVolume() {
    hornSound.volume = slider.value / 100;
    numberInput.value = slider.value;
    updateIcon();
}

// function to update the volume icon based on the selected volume level
function updateIcon() {
    if (slider.value >= 67) {
        volumeIcon.src = "./assets/media/icons/volume-level-3.svg";
    }
    else if (slider.value >= 34) {
        volumeIcon.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if (slider.value >= 1) {
        volumeIcon.src = "./assets/media/icons/volume-level-1.svg";
    }
    else {
        volumeIcon.src = "./assets/media/icons/volume-level-0.svg";
    }
}

// function to update the horn image and sound when the user selects a radio button
function updateHorn() {
    if (radioAir.checked) {
        soundImage.src = "./assets/media/images/air-horn.svg";
        hornSound.src = "./assets/media/audio/air-horn.mp3";
    }
    else if (radioCar.checked) {
        soundImage.src = "./assets/media/images/car.svg";
        hornSound.src = "./assets/media/audio/car-horn.mp3";
    }
    else if (radioParty.checked) {
        soundImage.src = "./assets/media/images/party-horn.svg";
        hornSound.src = "./assets/media/audio/party-horn.mp3";
    }
}