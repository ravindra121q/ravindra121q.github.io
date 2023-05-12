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
  const element = document.getElementById(elementId);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
function ResumeOpen() {
  console.log("s");
  window.open("/img/Project/Ravindra-Resume.pdf", "_blank");
}
