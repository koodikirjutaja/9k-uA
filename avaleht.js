/* sandori kirjutatud on myFunction, Mihkli kirjutatud on nuppude värvivahetused */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function värvimuutus() {
  var v = document.getElementById("hiir").onclick = function () {
    v.style.backgroundColor = "#27153E";
};
}