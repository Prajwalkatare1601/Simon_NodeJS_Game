var pattern = [];
var count = 0;
var level = 1;
var patternLength = 0;
var i = 0;


function Restart() {
  pattern = [];
  count = 0;
  level = 1;
  patternLength = 0;
  i = 0;
  window.location.reload();
  RandomNumberGenerator();
}

$("button").hide();


$(document).click(function () {
  $("p").remove();
  $("ul").remove();
  if (count == 0) {
    $("button").show();
    setTimeout(RandomNumberGenerator, 500);
    $("h1").text("Level 1");
    count++;
  }
});

function RandomNumberGenerator() {
  var RandomNumber = Math.floor(Math.random() * 4) + 1;
  pattern.push(RandomNumber)
  var colorCode = pattern[(pattern.length) - 1];
  console.log(pattern);
  playSound(colorCode);
}


function playSound(colorCode) {
  switch (colorCode) {
    case 1:
      var sound = new Audio("sounds/simonSound1.mp3");
      $("#1").fadeOut().fadeIn(100);
      sound.play();
      break;
    case 2:
      var sound = new Audio("sounds/simonSound2.mp3");
      $("#2").fadeOut().fadeIn(100);
      sound.play();
      break;
    case 3:
      var sound = new Audio("sounds/simonSound3.mp3");
      $("#3").fadeOut().fadeIn(100);
      sound.play();
      break;
    case 4:
      var sound = new Audio("sounds/simonSound4.mp3");
      $("#4").fadeOut().fadeIn(100);
      sound.play();
      break;
    default:
      console.log("bye");
  }
}

function increaseLevel() {
  i = 0;
  level++;
  $("h1").text("Level" + (level));
  console.log("level is " + level);
  if (level == 10)
    winner();
  else
    setTimeout(RandomNumberGenerator, 600);
}

function winner() {
  $("h1").text("You Won!🎉")
  $("button").remove();
  $("h1").after("<button type='button' class='restart btn btn-light'>Restart</button>");
  $("button").click(function () {
    Restart();
  });
}

$("button").click(function () {
  console.log("current i value" + i);
  if (pattern[i] === parseInt(event.target.id)) {
    i++;
    playSound(parseInt(event.target.id));
    if (i == (pattern.length)) {
      increaseLevel();
    }
  }
  else {
    playSound(parseInt(event.target.id))
    $("h1").text("GameOver");
    $("button").remove();
    $("h1").after("<button type='button' class='restart btn btn-light'>Restart</button>");
    $("button").click(function () {
      Restart();
    }
    );
  }
});
