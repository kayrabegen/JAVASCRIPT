var btnNumber = document.querySelectorAll("#btnNumber");
var screen = document.querySelector(#screen);
var btnop = document.querySelector(#btnop);
var optState = false;
var opt = "";
var final = 0;


btnNumber.forEach(Number => {
    Number.addEventListener("click", showNumber);

    function showNumber() {
        screen.textContent = this.textContent;
    }
});