const circle = document.getElementById("cursor-circle");

addEventListener("mousemove", (ev) => {
  const x = ev.clientX;
  const y = ev.clientY;

  circle.style.top = `${y - 300}px`;
  circle.style.left = `${x - 300}px`;
});
