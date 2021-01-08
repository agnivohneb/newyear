function year() {
  date = new Date();
  return date.getFullYear();
}

function newyear() {
  date = new Date();
  return date.getFullYear() + 1;
}

function getTime() {
  now = new Date();

  //ENTER BELOW THE DATE YOU WISH TO COUNTDOWN TO
  later = new Date("Jan 1 " + newyear() + " 0:00:00");

  days = (later - now) / 1000 / 60 / 60 / 24;
  daysRound = Math.floor(days);
  hours = (later - now) / 1000 / 60 / 60 - 24 * daysRound;
  hoursRound = Math.floor(hours);
  minutes = (later - now) / 1000 / 60 - 24 * 60 * daysRound - 60 * hoursRound;
  minutesRound = Math.floor(minutes);
  seconds =
    (later - now) / 1000 -
    24 * 60 * 60 * daysRound -
    60 * 60 * hoursRound -
    60 * minutesRound;
  secondsRound = Math.round(seconds);

  if (secondsRound <= 9) {
    document.getElementById("s").innerHTML = "0" + secondsRound;
  } else {
    document.getElementById("s").innerHTML = secondsRound;
  }
  if (minutesRound <= 9) {
    document.getElementById("m").innerHTML = "0" + minutesRound;
  } else {
    document.getElementById("m").innerHTML = minutesRound;
  }
  if (hoursRound <= 9) {
    document.getElementById("h").innerHTML = "0" + hoursRound;
  } else {
    document.getElementById("h").innerHTML = hoursRound;
  }
  if (daysRound <= 999) {
    document.getElementById("d").innerHTML = daysRound;
  }

  if (daysRound <= 99) {
    document.getElementById("d").innerHTML = "0" + daysRound;
  }
  if (daysRound <= 9) {
    document.getElementById("d").innerHTML = "00" + daysRound;
  }

  newtime = window.setTimeout("getTime();", 1000);
}

var min = 1;
var max = 3000;
function increaseFontSize() {
  var p = document.getElementsByTagName("p");
  for (i = 0; i < p.length; i++) {
    if (p[i].style.fontSize) {
      var s = parseInt(p[i].style.fontSize.replace("px", ""));
    } else {
      var s = 12;
    }
    if (s != max) {
      s += 5;
    }
    p[i].style.fontSize = s + "px";
  }
}
function decreaseFontSize() {
  var p = document.getElementsByTagName("p");
  for (i = 0; i < p.length; i++) {
    if (p[i].style.fontSize) {
      var s = parseInt(p[i].style.fontSize.replace("px", ""));
    } else {
      var s = 12;
    }
    if (s != min) {
      s -= 5;
    }
    p[i].style.fontSize = s + "px";
  }
}
function FontSize(thesize) {
  var p = document.getElementsByTagName("p");
  for (i = 0; i < p.length; i++) {
    if (p[i].style.fontSize) {
      var s = parseInt(p[i].style.fontSize.replace("px", ""));
    } else {
      var s = 12;
    }
    s = thesize;
    p[i].style.fontSize = s + "px";
  }
}
