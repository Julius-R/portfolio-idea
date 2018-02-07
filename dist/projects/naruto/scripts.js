let msgContainer = document.querySelector('.message');
let msgBody = document.querySelector('.message .message-body');
let btn = document.querySelector('.button');
let val = document.querySelector('.jutsu');
let green = "is-primary";
let red = "is-danger";
let clk = document.querySelector('.message-header');
let counter = 0;

const success = function(){
  msgContainer.classList.add(green);
  msgBody.textContent = "Your attack hits!";
}

const fail = function() {
  msgContainer.classList.add(red);
  msgBody.textContent = "Your attack missed!";
}

const attack = function() {
  counter ++;
  clk.textContent = "Number of clicks: " + counter;
  if (val.value == "") {
    msgContainer.classList.add(red);
    msgBody.textContent = "You must choose a rank to get a result";
  } else {
    if (msgContainer.classList == "green") {
      msgContainer.classList.remove(green);
    } else {
      msgContainer.classList.remove(red);
    }
    let chance = Math.floor(Math.random() * 10) + 1;
    switch (val.value) {
      case "Forbidden":
      if (chance > 9) {
        success();
      } else {
        fail();
      }
        break;
      case "S":
      if (chance > 8) {
        success();
      } else {
        fail();
      }if (chance > 7) {
        success();
      } else {
        fail();
      }
        break;
      case "A":
      if (chance > 6) {
        success();
      } else {
        fail();
      }
        break;
      case "B":
        if (chance > 5) {
          success();
        } else {
          fail();
        }
        break;
      case "C":
      if (chance > 3) {
        success();
      } else {
        fail();
      }
        break;
      case "D":
      if (chance > 2 ) {
        success();
      } else {
        fail();
      }
        break;
      default:

    }
  }
}

val.addEventListener('change', () => {
  counter = 0;
  clk.textContent = "";
  msgBody.textContent = "Result will be shown here";
});
btn.addEventListener('click', attack);
