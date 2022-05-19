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
    let currentText = button.innerText;
    if (currentText === "START") {
        button.innerText = "STOP";
        button.style.background = "rgb(255, 0, 0)";
        button.style.borderColor = "rgb(255, 0, 0)";
        relaxMeterRun();
    } else {
        button.innerText = "START";
        button.style.background = "rgb(66, 255, 12)";
        button.style.borderColor = "rgb(66, 255, 12)";
    }
}


function relaxMeterRun() {
    let amountOfClicks = 5;
    let clickArea = document.querySelector("div.clickArea");
    let colors = ["rgb(45, 137, 217)", "rgb(154, 45, 217)", "rgb(200, 217, 45)"];

    let i = 1;
    let time = Math.random() * 4000 + (-1) ^ i * 500;
    // var time = 1000 * i;
    let interval = setInterval(() => {
        clickArea.style.backgroundColor = colors[i % colors.length];
        console.log("i = " + i + " color = " + colors[i % colors.length] + " time: " + time);
        i++;
        time = Math.random() * 4000 + (-1) ^ i * 500;
        if (i > amountOfClicks) {
            clearInterval(interval);
            runningButtonClicked();
        }
    }, time);

    // after first click turn on statistics
    document.querySelector("div.statistics").style.visibility = "visible";
}





function clickOnClickArea() {
    let button = document.querySelector("button.runningButton");
    let currentText = button.innerText;
    if (currentText === "STOP") {
        // so START was pressed
        console.log("Clicked !");
    }

}


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

