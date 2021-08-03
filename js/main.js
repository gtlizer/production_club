var strings = ["Production Club", "Los Angeles, CA", "The Sunshine State","Hello World"];
var counter = 0;
var text = document.getElementById("changingText");


window.setInterval(function() {
    text.innerHTML = strings[counter];
    counter++;
    if (counter >= strings.length) {
        counter = 0;
    }
}, 3000);
