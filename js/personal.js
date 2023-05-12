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
function scrollFunction1() {
  let e = document.getElementById("home");
  e.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollFunction2() {
  let e = document.getElementById("about");
  e.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollFunction3() {
  let e = document.getElementById("skills");
  e.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollFunction4() {
  let e = document.getElementById("projects");
  e.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollFunction5() {
  let e = document.getElementById("contact");
  e.scrollIntoView({
    behavior: "smooth",
  });
}
function ResumeOpen() {
  console.log("s");
  window.open("/img/Project/Ravindra-Resume.pdf", "_blank");
}
