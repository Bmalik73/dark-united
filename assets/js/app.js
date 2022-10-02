$('.header__navbar--toggle').click(function(e) {
    e.preventDefault();
    $('.header__navbar').toggleClass('is-open')
})

const title = document.querySelector("h1");
const subtitle = document.querySelector(".h__slogan--btn");
const txt = "DARK UNITED RP";

function typewriter(text, index) {
  if (index > 3) subtitle.classList.add("active");
  if (index > 10) heroPushLink.classList.add("active");
  if (index < text.length) {
    setTimeout(() => {
      title.innerHTML += `<span>${text[index]}</span>`;
      typewriter(text, index + 1);
    }, 200);
  }
}
setTimeout(() => {
  typewriter(txt, 0);
}, 300);
