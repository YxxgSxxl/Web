// Scroll Hiding
document.addEventListener("scroll", function () {
    let isRemoved = false;
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.querySelector("section.top div.welcome div.right-welcome p").classList.add("hide")
    } else {
        document.querySelector("section.top div.welcome div.right-welcome p").classList.remove("hide")
    }
})
// End Scroll Hiding

// Clock
var timerRunning = false;
function runClock() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var timeValue = hours;

    timeValue += ((minutes < 10) ? ":0" : ":") + minutes;
    timeValue += ((seconds < 10) ? ":0" : ":") + seconds;
    document.getElementById("time").value = timeValue;
    timerRunning = true;
}

var timerID = setInterval(runClock, 1000);
// End Clock

// Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: " + (e.pageY -10)+ "px; left: " + (e.pageX -10) + "px;")
})

document.addEventListener("click", () => {
    cursor.classList.add("cursorexpand");

    setTimeout(() => {
        cursor.classList.remove("cursorexpand");
    }, 400)
})
// End Cursor