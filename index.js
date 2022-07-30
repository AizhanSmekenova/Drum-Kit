
const btn = document.querySelectorAll('.drum');
const makeSound = (key) => {
  switch (key) {
    case "w":
    const w = new Audio("sounds/tom-1.mp3");
    w.play();
    case "a":
    const a = new Audio("sounds/tom-2.mp3");
    a.play();
    case "s":
    const s = new Audio("sounds/tom-3.mp3");
    s.play();

    case "d":
    const d = new Audio("sounds/tom-4.mp3");
    d.play();

    case "j":
    const j = new Audio("sounds/snare.mp3");
    j.play();

    case "k":
    const k = new Audio("sounds/kick-bass.mp3");
    k.play();

    case "l":
    const l = new Audio("sounds/crash.mp3");
    l.play();
      break;
    default: console.log("Oops");

  }
}

const buttonAnimation = (key) => {
  const activeButton = document.querySelector("." + key);

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 1000);
}

btn.forEach((i) => {
  i.addEventListener("click", () => {
    makeSound(i.innerHTML);
    buttonAnimation(i.innerHTML);

  })
});

document.addEventListener("keydown", (e) => {
  makeSound(e.key);
  buttonAnimation(e.key);

})
