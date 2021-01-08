// this is a more shorter way of implementing such type of code
// document.querySelector(".set").addEventListener("click", buttonClick );
// function buttonClick(){
//   alert("i got clicked");
//   console.log (this);
//
// }

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play()


// Detecting Button Press

// using the For Loop method
var numberOfButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButton; i++) {
  // dectecting clicks wth mouse
  document.querySelectorAll(".drum")[i].addEventListener("click", buttonClick)
}
function buttonClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);

}



// Decteting Keyboard Press

/*this line of code does two thing first it when pressed it
trigger to make sound and also it Animate the button to show dark
color when pressed*/
document.addEventListener("keypress", keyboardPress)

function keyboardPress(event) {

  makeSound(event.key);
  buttonAnimation(event.key);
}
//  creating a function for making sound via keyboard press or a click

function makeSound(key) {

  switch (key) {

    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log(key);
  }
}

// ADDING ANIMATION TO THE BUTTON( whereby it will show transparent dark color when pressed)
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
// adding a class to an element using javascript
  var addPressed = activeButton.classList.add("pressed");
  // this line of code will remove the dark color after been pressed

  /* setTimeout Format>>>>  setTimeout(function, time in second)*/
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)

}
