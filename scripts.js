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

function runningButtonClicked() {
    let button = document.querySelector("button.runningButton");
    var currentText = button.innerText;
    if(currentText === "START") {
        button.innerText = "STOP";
        button.style.background = "rgb(255, 0, 0)";
        button.style.borderColor = "rgb(255, 0, 0)";
    } else {
        button.innerText = "START";
        button.style.background = "rgb(66, 255, 12)";
        button.style.borderColor = "rgb(66, 255, 12)";
    }
}
function runStop() {
    let buttonStop = document.querySelector("button.stop");
    let buttonStart = document.querySelector("button.start");
    buttonStart.style.display = "";
    buttonStop.style.display = "none";
}

