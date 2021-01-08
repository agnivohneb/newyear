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
