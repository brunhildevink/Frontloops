

function check(id) {
    let randomNumber = getRandomNumber(id);
    let randomNumber_2 = getRandomNumber(id);
    checkRandomSlider(randomNumber);
    unCheckRandomSlider(randomNumber_2);
}

function checkRandomSlider(id) {
    document.getElementById(id).checked = true;
}

function unCheckRandomSlider(id) {
    document.getElementById(id).checked = false;
}

function getRandomNumber(id) {
    let randomNumber = (Math.floor(Math.random() * 4) + 1).toString();
    while(randomNumber === id) {
        randomNumber = (Math.floor(Math.random() * 4) + 1).toString();
    }
    return randomNumber;
}

