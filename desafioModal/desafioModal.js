let buttonWindow = document.getElementById("buttonWindow");
let body = document.body;
let alert = document.getElementById("alert");

buttonWindow.addEventListener("click", function() {
    alert.classList.remove("invisible")
});

body.addEventListener("keydown", function(event) {

    if (!alert.classList.contains("invisible")) {
        if (event.key === "Escape") {
            alert.classList.add("invisible");
        }
    }
});