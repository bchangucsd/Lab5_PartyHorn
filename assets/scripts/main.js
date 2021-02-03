// main.js

// TODO
document.getElementById("honk-btn").addEventListener("click", cancelSubmission);
document.getElementById("honk-btn").addEventListener("click", honk);

function honk() {
    document.getElementById("horn-sound").play();
}

function cancelSubmission(event) {
    event.preventDefault();
}