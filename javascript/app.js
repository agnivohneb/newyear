class FontSize {
  constructor(clock, defaultSize) {
    let min = 5; // Can't go to 0 or negative
    let max = 500; // Really large font!
    let steps = 5;
    let current =
      defaultSize ||
      parseInt(window.getComputedStyle(clock).getPropertyValue("font-size"));
    this.set = function (newSize) {
      // Set new font size
      if (newSize >= min || newSize <= max) current = newSize;
      else console.log("Font size is not within range: " + min + "-" + max);
      clock.style.fontSize = current + "px";
    };
    this.increment = function () {
      // Increase the size
      if (current < max) current += steps;
      else console.log("Maximum font size of '" + max + "' has been reached.");
      clock.style.fontSize = current + "px";
    };
    this.decrement = function () {
      // Decrease the size
      if (current > min) current -= steps;
      else console.log("Minimum font size of '" + min + "' has been reached.");
      clock.style.fontSize = current + "px";
    };
  }
}

function forceZero(number, doubleZero) {
  // Forces number to be displayed with leading zero
  if (doubleZero)
    return number < 100
      ? number < 10
        ? "00" + number.toString()
        : "0" + number.toString()
      : number.toString();
  return number < 10 ? "0" + number.toString() : number.toString();
}

function countdownTime(timeTo) {
  let diff = new Date(timeTo - new Date());
  let days = Math.floor(diff / 1000 / 60 / 60 / 24);
  let hours = Math.floor(diff / 1000 / 60 / 60 - 24 * days);
  let minutes = Math.floor(diff / 1000 / 60 - 24 * 60 * days - 60 * hours);
  let seconds = Math.floor(
    diff / 1000 - 24 * 60 * 60 * days - 60 * 60 * hours - 60 * minutes
  );

  return `${forceZero(days, true)}:${forceZero(hours)}:${forceZero(
    minutes
  )}:${forceZero(seconds)}`;
}

function newYear() {
  return new Date().getFullYear() + 1;
}

// Main program starts here \\

// Construct fs
const fs = new FontSize(document.getElementById("clock"));

// Display new year in header
document.getElementById("next-year").innerHTML = newYear();

// Run countdown
const newDate = new Date(newYear(), 0);
const x = setInterval(function () {
  document.getElementById("clock").innerHTML = countdownTime(newDate);
}, 1000);
