function getIndexValue(event) {

    event.preventDefault();
    
    let index;
    const formInputField = document.getElementById("formInputField");

    switch (formInputField.value) {
        case "1":
            index = "positive";
            changeValue(index);
            break;
        case "2":
            index = "negative";
            changeValue(index);
            break;
        case "3":
            index = "neutral";
            changeValue(index);
            break;
        default:
            alert("must be a number between 1 and 3")
    }
}

function changeValue(value) {
    resetValues();
    let target = document.getElementById(value)
    console.log(target)
    target.className = "active";
    document.getElementById("root").innerHTML = value + " content";
}

function resetValues() {
    const element = document.getElementsByTagName("a")
    for(let i = 0; i < element.length; i++ ) {
        element[i].className = "";
    }
}