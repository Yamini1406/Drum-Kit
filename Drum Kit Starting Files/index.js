var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        //button press
        var buttonInnerHTML = this.innerHTML;//returns the words enclosed in button(w)
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    })
}

//keyboard press
document.addEventListener("keydown", function(event) {
    //console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
    switch(key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;    
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;     
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;   
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);

    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");//used for adding css properties classList
    //should retrieve to original form after being pressed.
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}