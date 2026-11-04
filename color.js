let text = document.getElementById("text");
let button = document.getElementById("button");
let isBlue = false;

button.addEventListener("click", () => {
    if (isBlue){
        text.style.color = "black";
        isBlue = false;
    } else {
        text.style.color = "blue";
        isBlue = true;
    }
});