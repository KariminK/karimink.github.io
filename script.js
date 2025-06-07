const cursorCircle = document.querySelector("#cursor-circle");
const cursorDot = document.querySelector("#cursor-dot");

const links = document.querySelectorAll("a");

let MOUSE_X = 0;
let MOUSE_Y = 0;

addEventListener("mousemove", (e) => {
  MOUSE_X = e.clientX;
  MOUSE_Y = e.clientY;
});

addEventListener("mousedown", (e) => {
  cursorCircle.style.border = "1px solid #00bcff";
  cursorDot.style.backgroundColor = "#00bcff";
});

addEventListener("mouseup", () => {
  cursorCircle.style.border = "none";
  cursorDot.style.backgroundColor = "white";
});

links.forEach((link) => {
  link.addEventListener("mouseenter", (e) => {
    cursorCircle.style.border = "2px solid #b3c3d8";
  });
  link.addEventListener("mouseout", (e) => {
    cursorCircle.style.border = "none";
  });
});

function animateCursor() {
  cursorCircle.style.left = `${MOUSE_X - 75}px`;
  cursorCircle.style.top = `${MOUSE_Y - 75}px`;

  cursorDot.style.left = `${MOUSE_X}px`;
  cursorDot.style.top = `${MOUSE_Y}px`;

  requestAnimationFrame(animateCursor);
}
animateCursor();
