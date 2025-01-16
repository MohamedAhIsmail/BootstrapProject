let btn = document.getElementById("top");

window.onscroll = function () {
  if (scrollY >= 600) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
};

btn.onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
