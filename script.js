const circle = document.getElementById("cursor-circle");

addEventListener("mousemove", (ev) => {
  const x = ev.clientX;
  const y = ev.clientY;

  circle.style.top = `${y - 300}px`;
  circle.style.left = `${x - 300}px`;
});

const experienceSection = document.querySelector("#experience");
const experienceNavigation = document.querySelector("#experience-nav");

const projectsSection = document.querySelector("#projects");
const projectsNavigation = document.querySelector("#projects-nav");

projectsNavigation.addEventListener("click", () => {
  projectsSection.classList.add("active");
  projectsNavigation.classList.add("active");

  experienceSection.classList.remove("active");
  experienceNavigation.classList.remove("active");
});

experienceNavigation.addEventListener("click", () => {
  experienceSection.classList.add("active");
  experienceNavigation.classList.add("active");

  projectsSection.classList.remove("active");
  projectsNavigation.classList.remove("active");
});

const discordButton = document.querySelector("#discord-button");
const discordSVG = document.querySelector("#discord-button svg");
const discordText = document.querySelector("#discord-button p");

discordButton.addEventListener("click", () => {
  if (!discordSVG.style.display.includes("none")) {
    discordSVG.style.display = "none";
    discordText.style.display = "block";
  } else {
    console.log("x");
    discordSVG.style.display = "inline";
    discordText.style.display = "none";
  }
});
