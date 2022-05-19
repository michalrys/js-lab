// my scripts
// taken from other example
let div = document.createElement('div');

function removeBoringStuff() {
    document.querySelectorAll("#app .boring").forEach((e) => e.remove());
}

function readValues() {
    const isCheckboxChecked = document.getElementById('myCheckbox').checked
    if (isCheckboxChecked === true) {
        const textFieldValue = document.getElementById('myTextField').value
        alert(textFieldValue)
    }
}

function runStart() {
    let buttonStop = document.querySelector("button.stop");
    let buttonStart = document.querySelector("button.start");
    buttonStart.style.background = "rgb(154,45,217)";
    buttonStart.style.display = "none";
    buttonStop.style.display = "";
}
function runStop() {
    let buttonStop = document.querySelector("button.stop");
    let buttonStart = document.querySelector("button.start");
    buttonStart.style.display = "";
    buttonStop.style.display = "none";
}

