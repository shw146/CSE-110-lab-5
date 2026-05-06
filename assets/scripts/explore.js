// explore.js

window.addEventListener('DOMContentLoaded', init);
let voiceList = [];
let spokenVoice;

function init() {
    window.speechSynthesis.addEventListener("voiceschanged", populateVoices);

    document.getElementById("voice-select").addEventListener("change", updateVoice);
    
    document.querySelector("button").addEventListener("click", speak);
}

function populateVoices() {
    if (typeof speechSynthesis === "undefined") {
        return;
    }

    voiceList = speechSynthesis.getVoices();

    console.log(voiceList);

    for (const voice of voiceList) {
        const option = document.createElement("option");
        option.textContent = `${voice.name} (${voice.lang})`;

        if (voice.default) {
            option.textContent += " — DEFAULT";
        }

        option.setAttribute("data-lang", voice.lang);
        option.setAttribute("data-name", voice.name);
        document.getElementById("voice-select").appendChild(option);
    }
}

function updateVoice(){
    const chosenVoice = document.getElementById("voice-select").value;

    for(const voice of voiceList){
        if(chosenVoice == (voice.name + " (" + voice.lang + ")")){
            spokenVoice = voice;
            break;
        }
    }
}

function speak(){
    document.querySelector("img").src = "assets/images/smiling-open.png";
    const textInput = document.getElementById("text-to-speak")
    const utter = new SpeechSynthesisUtterance(textInput.value);
    utter.addEventListener("end", closeMouth); 
    utter.voice = spokenVoice;
    window.speechSynthesis.speak(utter);
}

function closeMouth(){
    document.querySelector("img").src = "assets/images/smiling.png";
}
