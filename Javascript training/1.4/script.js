const root = document.getElementById("root");
const submit = document.getElementById("submit");

const firstScreen = `
    <div class="active">
        <h1> Choose your title </h1>
        <input type="submit" value="next" id="submit" onclick="nextScreen(event, secondScreen, 'first', 'second')" />
    </div>
`;

const secondScreen = `
    <div class="active">
        <h1> Choose description content </h1>
        <input type="submit" value="back" id="back" onclick="previousScreen(event, firstScreen, 'second', 'first')" />
        <input type="submit" value="next" id="submit" onclick="nextScreen(event, thirdScreen, 'second', 'third')" />
    </div>
`;

const thirdScreen = `
    <div class="active">
        <h1>Confirm data?</h1>
        <input type="submit" value="back" id="back" onclick="previousScreen(event, secondScreen, 'third', 'second')" />
        <input type="submit" value="yes" id="submit" onclick="nextScreen(event, finalScreen, 'third', 'third')" />      
    </div>
`;

const finalScreen = `
    <div>
        <h1>k</h1>
    </div>
`;

root.innerHTML = firstScreen;


function nextScreen(event, nextObj, li_1, li_2) {
    event.target.parentNode.className = "none";
    root.innerHTML = nextObj;
    document.getElementById(li_1).className = "";
    document.getElementById(li_2).className = "active-li"
}

function previousScreen(event, nextObj, li_1, li_2) {
    event.target.parentNode.className = "none";
    root.innerHTML = nextObj;
    document.getElementById(li_1).className = "";
    document.getElementById(li_2).className = "active-li"
}