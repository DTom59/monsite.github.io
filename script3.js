const hamburger = document.querySelector(".hamburger");
const navlinksContainer = document.querySelector(".navlinks-container");
const main = document.querySelector("main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navlinksContainer.classList.toggle("open");
  main.classList.toggle("open");
});

function addClass(event) {
  const addonA = event.target.querySelector(".addonA");
  addonA.classList.add("fa-bounce");
}

function removeClass(event) {
  const addonA = event.target.querySelector(".addonA");
  addonA.classList.remove("fa-bounce");
}

const nlA = document.querySelectorAll(".navlinks-container a");

nlA.forEach(function (nlAset) {
  nlAset.addEventListener("mouseenter", addClass);
  nlAset.addEventListener("mouseleave", removeClass);
});

new ResizeObserver((entries) => {
  if (entries[0].contentRect.width <= 941) {
    navlinksContainer.style.transition = "transform 0.2s 0.15s ease-out";
  } else {
    navlinksContainer.style.transition = "none";
  }
}).observe(document.body);
