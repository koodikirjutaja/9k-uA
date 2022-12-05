/* sandori kirjutatud on myFunction, Mihkli kirjutatud on nuppude värvivahetused */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/*teeb esimese nupu värvi lillaks */
function värvimuutus1() { 
  var v = document.getElementById("hiir1"); {
    v.style.backgroundColor = "#27153E";
};
}
/*teeb esimese nupu värvi siniseks */
function värvimuutus1tagasi() {
  var v = document.getElementById("hiir1"); {
    v.style.backgroundColor = "#5140FF";
};
}
/*teeb teise nupu värvi lillaks */
function värvimuutus2() {
  var v = document.getElementById("hiir2"); {
    v.style.backgroundColor = "#27153E";
};
}

/*teeb teise nupu värvi lillaks */
function värvimuutus2tagasi() {
  var v = document.getElementById("hiir2"); {
    v.style.backgroundColor = "#5140FF";
};
}
