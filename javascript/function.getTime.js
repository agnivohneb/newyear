function getTime() {
  now = new Date();

  //ENTER BELOW THE DATE YOU WISH TO COUNTDOWN TO
  later = new Date("Jan 1 " + newYear() + " 0:00:00");

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
