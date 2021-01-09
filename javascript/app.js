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

function newYear() {
  return new Date().getFullYear() + 1;
}

const fs = new FontSize(document.getElementById("clock"));

document.getElementById("next-year").innerHTML = newYear();
