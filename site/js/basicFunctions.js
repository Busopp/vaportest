var imgID = true;
function switchImg() {
    document.getElementById(imgID).style.display = "none";
    document.getElementById(!imgID).style.display = "block";
    imgID = !imgID;
  }

// Could instead rename all gifs as 1.gif 2.gif etc, and change the source to cycle up.
