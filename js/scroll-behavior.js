window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY;
  let scale = 1 + scrollPosition * 0.0005; // Aumenta o zoom
  let opacity = 1 - scrollPosition / 700; // Reduz a opacidade

  document.querySelector(".bg-image").style.transform = `scale(${scale})`;
  document.querySelector(".bg-image").style.opacity = opacity > 0 ? opacity : 0;
});