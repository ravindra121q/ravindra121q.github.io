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
function scrollFunction1(elementId) {
  document.querySelector(`#${elementId}`).scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
function ResumeOpen() {
  window.open(
    "https://drive.google.com/file/d/1mWq29M7rumtl7yXKaUU0gcJXvqoCyu-e/view",
    "_blank"
  );
}
