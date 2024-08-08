/** @type {CanvasRenderingContext2D} */

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let CANVAS_HEIGHT = (canvas.height = window.innerHeight);
let CANVAS_WIDTH = (canvas.width = window.innerWidth);
let COLOR = "white";
let EVENT_CALLS = 0;

const drawParticle = (x, y, size, ctx, fillStyle) => {
  const random = Math.random() * 10;
  ctx.fillStyle = fillStyle;
  ctx.fillRect(x + random, y, size, size);
  setTimeout(() => {
    ctx.clearRect(x + random - 1, y - 1, size + 5, size + 5);
    if (size > 0) drawParticle(x, y + 5, size - 1, ctx, fillStyle);
    else ctx.clearRect(x + random, y, size, size);
  }, 50);
};

addEventListener("mousemove", (e) => {
  EVENT_CALLS++;
  if (!(EVENT_CALLS % 6)) drawParticle(e.clientX, e.clientY, 10, ctx, COLOR);
});
addEventListener("mousedown", (e) => {
  COLOR = "#2e2e2e";
});
addEventListener("mouseup", (e) => {
  COLOR = "white";
});
addEventListener("click", (e) => {
  for (let i = -50; i <= 50; i += 10) {
    drawParticle(e.clientX - i, e.clientY - i, 10, ctx, COLOR);
    drawParticle(e.clientX + i, e.clientY - i, 10, ctx, COLOR);
  }
});

const discord = document.querySelector(".discord");
const mail = document.querySelector(".mail");
const linkClickHandler = (e) => {
  e.target.classList.toggle("active");
  if (e.target.classList.contains("active"))
    e.target.classList.remove("unactive");
  else e.target.classList.add("unactive");
};
discord.addEventListener("click", linkClickHandler);
mail.addEventListener("click", linkClickHandler);
