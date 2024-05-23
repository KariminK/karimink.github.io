const textEl = document.querySelector("pre > span");
const text = `// a self-taught frontend dev
 {
    "skills": [ 
      "HTML", 
      "CSS", 
      "vanilla JS", 
      "React", 
      "Nodejs", 
      "Express", 
      "MySQL", 
      "PHP", 
      "git"
    ]     
    "contact": {
      "github": "https://github.com/karimink",
      "discord": "karimin",
    }
 }`;
const delay = (ms) => new Promise((res, rej) => setTimeout(res, ms));
const textAnim = async (textEl, text) => {
  textEl.innerHTML = "";
  for (let i = 0; i < text.length; i++) {
    textEl.innerHTML += text.charAt(i);
    await delay(50);
  }
};

textAnim(textEl, text);
