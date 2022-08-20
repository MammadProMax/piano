const note = document.querySelector(".nowplaying");
const keys = document.querySelectorAll(".key");
let keyHandler;

let playButton = document.querySelector(".fullscreen");

window.addEventListener("keydown", function (e) {
  const key = this.document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  const sound = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  if (!key) return;

  const keyNote = key.getAttribute("data-note");
  note.textContent = keyNote;
  key.classList.add("playing");
  sound.currentTime = 0;
  sound.play();
});

keys.forEach((key) => {
  key.addEventListener("transitionend", keyAnim);
  key.addEventListener("touchstart", keySound);
});

function keyAnim() {
  this.classList.remove("playing");
}

function keySound() {
  const keyTouchedData = this.getAttribute("data-key");
  const sound = document.querySelector(`audio[data-key = "${keyTouchedData}" `);
  const noteToucheddata = this.getAttribute("data-note");

  note.textContent = noteToucheddata;
  this.classList.add("playing");
  this.addEventListener("transitionend", keyAnim);
  sound.currentTime = 0;
  sound.play();
}
let pianoArea = document.querySelector(".keys");
setInterval(() => {
  if (screen.width <= 600) {
    if (!document.fullscreenElement) {
      pianoArea.style.display = "none";
    } else if (document.fullscreenElement) {
      pianoArea.style.display = "block";
    }
  }
}, 10);

playButton.addEventListener("click", function () {
  pianoArea.requestFullscreen();
  pianoArea.style.display = "block";
});
