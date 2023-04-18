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
  // This ends the block to the window
  // bottom and also aligns the view to the center
  // console.log("s");
  e.scrollIntoView({
    behavior: "smooth",
  });
}
function scrollFunction3() {
  let e = document.getElementById("skills");
  // This ends the block to the window
  // bottom and also aligns the view to the center
  console.log("s");
  e.scrollIntoView({
    behavior: "smooth",
  });
}
function scrollFunction4() {
  let e = document.getElementById("projects");
  // This ends the block to the window
  // bottom and also aligns the view to the center
  console.log("s");
  e.scrollIntoView({
    behavior: "smooth",
  });
}
function scrollFunction5() {
  let e = document.getElementById("contact");
  // This ends the block to the window
  // bottom and also aligns the view to the center
  console.log("s");
  e.scrollIntoView({
    behavior: "smooth",
  });
}

function ResumeOpen() {
  console.log("s");
  window.open("/img/Project/Ravindra-Resume.pdf", "_blank");
}

// Define ravindra121q
const ravindra121q = "ravindra121q";

// Run GitHubCalendar with the defined variable
GitHubCalendar(".calendar", ravindra121q, {
  proxy: function (username) {
    return fetch(`https://your-proxy.com/github?user=${ravindra121q}`);
  },
}).then((r) => r.text());
