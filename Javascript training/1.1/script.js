
const btnContainer = document.getElementById("btn-group");
const btns = btnContainer.getElementsByClassName("btn");
const selections = document.getElementById("form-select");
let currentBtn = document.getElementsByClassName("active");
let currentSelectedValue = selections.options[selections.selectedIndex].value;


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    currentBtn[0].className = currentBtn[0].className.replace(" active", "");
    this.className += " active";
    selections.value = this.value;
    });
}

    selections.addEventListener("change", function(event) {
        console.log("changed")
    });


// selections.addEventListener("change", function() {
//     let currentSelectedValue = selections.options[selections.selectedIndex].value;
//     changeBtnValue(currentSelectedValue)
// });


// function changeBtnValue(selectedValue) {
//     switch(selectedValue) {
//         case "left":
//             console.log(`its ${selectedValue}!`)
//           break;
//         case "middle":
//             console.log(`its ${selectedValue}!`)
//             console.log(selectedValue.className);
//
//           break;
//         case "right":
//             console.log(`its ${selectedValue}!`)
//             console.log(selectedValue.className);
//
//     }
// }

function mediaQuery(x) {
    if (x.matches) { // If media query matches
        document.getElementById("btn-group").style.display = "none";
        document.getElementById("form-select").style.display = "inline-flex";
      } else {
        document.getElementById("btn-group").style.display = "inline-flex";
        document.getElementById("form-select").style.display = "none";
      }
}

var x = window.matchMedia("(max-width: 768px)")
mediaQuery(x) // Call listener function at run time
x.addListener(mediaQuery) // Attach listener function on state changes
