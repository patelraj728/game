let userscore = 0;
let compscore = 0;
let draw = 0;

let choices = document.querySelectorAll(".choice");
let h2 = document.querySelector("h2");
let uscore = document.querySelector("#userscore");
let cscore = document.querySelector("#compscore");
let dscore = document.querySelector("#drawscore");
let userchoisetext = document.querySelector(".userchoisetext");
let compchoisetext = document.querySelector(".compchoisetext");

const playgame = (userchoice) => {
    let compchoice = getcompchoice();
    winner(userchoice, compchoice);
}

const winner = (userchoice, compchoice) => {
    if (userchoice == compchoice) {
        drawpoint();
    } else {
	if (userchoice == "rock" && compchoice == "paper" || 
	    userchoice == "paper" && compchoice == "scissors" ||
	    userchoice == "scissors" && compchoice == "rock")
        {
            comppoint();
        } else{
            userpoint();
            confettiBurst(window.innerWidth / 2 , window.innerHeight /15);
        }

    }

    text(userchoice,compchoice);
}
choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        let userchoice = choices.getAttribute("id");
        playgame(userchoice);
    });
});

const getcompchoice = () => {
    const arr = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];
}
const comppoint = () => {
    compscore++;
    cscore.innerText = compscore;
    h2.style.backgroundColor = "red";
    h2.innerText = "Computer Won";
}
const userpoint = () => {
    userscore++;
    uscore.innerText = userscore;
    h2.style.backgroundColor = "green";
    h2.innerText = "You Won";
}
const drawpoint = () => {
    draw++;
    dscore.innerText = draw;
    h2.innerText = "Draw";
    h2.style.backgroundColor = "silver";
}
const text = (userchoice,compchoice) =>{
    userchoisetext.innerText = "You choose - " + userchoice;
    compchoisetext.innerText = "Computer choose - " + compchoice;
}



// celebration animations 
const config = {
  particleCount: 200,
  particleSize: 4,
  speedMultiplier: 1.4,
  gravity: 0.20,
  duration: 200
};

function confettiBurst(x, y) {
  const pieces = Array.from({ length: config.particleCount }, () => {
    const el = document.createElement('div');
    el.className = 'confetti-particle';

    const size = config.particleSize + Math.random() * 3;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 60%)`;

    document.body.appendChild(el);

    return {
      el,
      x,
      y,
      vx: (Math.random() - 0.5) * 6 * config.speedMultiplier,
      vy: (Math.random() - 1.2) * 6 * config.speedMultiplier,
      life: 60 + Math.random() * 40
    };
  });

  let frame = 0;

  function tick() {
    for (const p of pieces) {
      p.vy += config.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.life--;

      if (p.life > 0) {
        const opacity = Math.min(1, p.life / 30);
        p.el.style.opacity = opacity;
        p.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
      } else {
        p.el.remove();
      }
    }

    if (frame++ < config.duration) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

