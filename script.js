/** @type {CanvasRenderingContext2D} */

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let CANVAS_HEIGHT = (canvas.height = window.innerHeight);
let CANVAS_WIDTH = (canvas.width = window.innerWidth);

ctx.fillStyle = "white";

const drawParticle = (x, y, size, ctx) => {
  const random = Math.random() * 10;
  ctx.fillRect(x + random, y, size, size);
  setTimeout(() => {
    ctx.clearRect(x + random - 1, y - 1, size + 5, size + 5);
    if (size > 0) drawParticle(x, y + 5, size - 0.5, ctx);
    else ctx.clearRect(x + random, y, size, size);
  }, 50);
};

addEventListener("mousemove", (e) => {
  drawParticle(e.clientX, e.clientY, 10, ctx);
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
