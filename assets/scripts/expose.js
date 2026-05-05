// expose.js
window.addEventListener('DOMContentLoaded', init);

let select = document.querySelector("select");
let range = document.getElementById("volume");
let button = document.querySelector("button");
const audioFile = document.querySelector("audio");
const jsConfetti = new JSConfetti();

function init() {
    select.addEventListener("input", updateImage);
    select.addEventListener("input", updateAudio);

    range.addEventListener("input", updateVolume);

    button.addEventListener("click", playAudio);
}

function updateImage(){
    const imageValue = document.querySelector("select").value;

    let image = document.querySelector("img");
    
    if(imageValue == "air-horn"){
        image.src = "assets/images/air-horn.svg";
    }

    if(imageValue == "car-horn"){
        image.src = "assets/images/car-horn.svg";
    }

    if(imageValue == "party-horn"){
        image.src = "assets/images/party-horn.svg"
    }
}

function updateAudio(){
    const audioValue = document.querySelector("select").value;

    let audio = document.querySelector("audio");

    if(audioValue == "air-horn"){
        audio.src = "assets/audio/air-horn.mp3";
    }

    if(audioValue == "car-horn"){
        audio.src = "assets/audio/car-horn.mp3";
    }

    if(audioValue == "party-horn"){
        audio.src = "assets/audio/party-horn.mp3"
    }
}

function updateVolume(){
    let icon = document.getElementById("volume-controls").querySelector("img");

    range.setAttribute("value", this.value);
    audioFile.volume = (range.value/100);

    console.log(audioFile.volume);

    if(range.value == 0){
        icon.src = "assets/icons/volume-level-0.svg";
    }
    else if(range.value < 33){
        icon.src = "assets/icons/volume-level-1.svg";
    }
    else if(range.value < 67){
        icon.src = "assets/icons/volume-level-2.svg";
    }
    else{
        icon.src = "assets/icons/volume-level-3.svg";
    }
}

function playAudio(){
    audioFile.play();

    if(select.value == "party-horn"){
        jsConfetti.addConfetti();
    }
}