const myImage = document.getElementById("myImage");

window.addEventListener("scroll", function () {
  myImage.style.borderColor = "white";
});

function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}
