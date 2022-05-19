// my scripts
// taken from other example
let div = document.createElement('div');
let clicks = 0;
let interval;
let statisticBestTime = 0;
let statisticWorstTime = 0;
let statisticAverageTime = 0;
let isClickAreaClicked = false;
let startTime;
let clickedTimes;
let amountOfClicks = 5;

function runningButtonClicked() {
    let button = document.querySelector("button.runningButton");
    let currentText = button.innerText;

    if (currentText === "START") {
        button.innerText = "STOP";
        button.style.background = "rgb(255, 0, 0)";
        button.style.borderColor = "rgb(255, 0, 0)";
        setAmountOfClicksIfPossible();
        relaxMeterRun();
        startClock();
        resetStatistics();
    } else {
        button.innerText = "START";
        button.style.background = "rgb(66, 255, 12)";
        button.style.borderColor = "rgb(66, 255, 12)";
        relaxMeterStop();
    }
}

function setAmountOfClicksIfPossible() {
    let attemps = document.querySelector("input.attemps");
    let value = parseInt(attemps.value);
    if (!Number.isNaN(value) && value > 0) {
        amountOfClicks = value;
    } else {
        amountOfClicks = 5
        attemps.value = 5;
    }
}

function relaxMeterRun() {
    let clickArea = document.querySelector("div.clickArea");
    let colors = ["rgb(45, 137, 217)", "rgb(154, 45, 217)", "rgb(200, 217, 45)"];

    let i = 1;
    let time = Math.random() * 1000 + (-1) ^ i * 500;
    interval = setInterval(() => {
        if (isClickAreaClicked === false) {
            stopClock();
        }
        startClock();
        clickArea.style.backgroundColor = colors[i % colors.length];
        console.log("i = " + i + " color = " + colors[i % colors.length] + " time: " + time);
        i++;
        time = Math.random() * 1000 + (-1) ^ i * 500;
        if (i > amountOfClicks) {
            relaxMeterStop();
            runningButtonClicked();
        }
    }, time);

    // after first click turn on statistics
    document.querySelector("div.statistics").style.visibility = "visible";
}

function relaxMeterStop() {
    clearInterval(interval);
}


function clickOnClickArea() {
    let button = document.querySelector("button.runningButton");
    let currentText = button.innerText;
    if (currentText === "STOP" && isClickAreaClicked === false) {
        stopClock();
        console.log("Clicked !");
        clicks++;
    }
}

function resetStatistics() {
    var best = document.querySelector("li.timeBest");
    var worst = document.querySelector("li.timeWorst");
    var average = document.querySelector("li.timeAverage");

    statisticBestTime = 0;
    statisticWorstTime = 0;
    statisticAverageTime = 0;

    best.innerText = "Best time: -";
    worst.innerText = "Worst time: -";
    average.innerText = "Average time: -";

    clickedTimes = [];
}

function startClock() {
    isClickAreaClicked = false;
    startTime = new Date().getTime();
}

function stopClock() {
    isClickAreaClicked = true;
    let endTime = new Date().getTime();
    let timeForClick = endTime - startTime;

    clickedTimes.push(timeForClick);
    clickedTimes.sort();
    statisticBestTime = clickedTimes[0];
    statisticWorstTime = clickedTimes[(clickedTimes.length - 1)];
    if (clickedTimes.length >= 2) {
        statisticAverageTime = (clickedTimes.reduce((a, b) => a + b, 0) / clickedTimes.length)
    }

    var best = document.querySelector("li.timeBest");
    var worst = document.querySelector("li.timeWorst");
    var average = document.querySelector("li.timeAverage");

    best.innerText = "Best time: " + statisticBestTime + " msec"; //FOR TEST ONLY
    worst.innerText = "Worst time: " + statisticWorstTime + " msec"; //FOR TEST ONLY
    average.innerText = "Average time: " + statisticAverageTime + " msec"; //FOR TEST ONLY
}

