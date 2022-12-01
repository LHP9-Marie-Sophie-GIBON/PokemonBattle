// options du jeu
const gameOptions = [
  {
    type: "fire",
    losesTo: "water",
  },
  {
    type: "plant",
    losesTo: "fire",
  },
  {
    type: "water",
    losesTo: "plant",
  }
];

// Choix pokemon
let playerOne = document.querySelector('#playerOne');
let playerSelection;
let choice = document.querySelector('.youChose')

// Choix starter feu
let pokeFeu = document.querySelector('#poke1');
pokeFeu.addEventListener('click', () => playerOne.innerHTML = '<img class="pokemon"src="assets/img/Héricendre.png" alt="">')

const starterFeu = document.querySelectorAll(".starterFeu");
for (let i = 0; i < starterFeu.length; i++) {
  let button = starterFeu[i];
  button.addEventListener("click", function () {
    playerSelection = gameOptions[0];
    choice.innerHTML = `<img src="assets/img/fire.png" alt="" >`;
  });
}

// Choix starter plante
let pokePlante = document.querySelector('#poke2');
pokePlante.addEventListener('click', () => playerOne.innerHTML = '<img class="pokemon" src="assets/img/Germignon.png" alt="">')

const starterPlante = document.querySelectorAll(".starterPlante");
for (let i = 0; i < starterPlante.length; i++) {
  let button = starterPlante[i];
  button.addEventListener("click", function () {
    playerSelection = gameOptions[1];
    choice.innerHTML = `<img src="assets/img/plant.png" alt="">`;

  });
}

// Choix starter eau
let pokeEau = document.querySelector('#poke3');
pokeEau.addEventListener('click', () => playerOne.innerHTML = '<img class="pokemon" src="assets/img/Kaiminus.png" alt="" >')

const starterEau = document.querySelectorAll(".starterEau");
for (let i = 0; i < starterEau.length; i++) {
  let button = starterEau[i];
  button.addEventListener("click", function () {
    playerSelection = gameOptions[2];
    choice.innerHTML = `<img src="assets/img/water.png" alt="">`;
  });
}

//Choix computer
let computerSelection;
const gameButtons = document.querySelectorAll(".fighter");

function getComputerChoice() {
  let computerPokemon = document.querySelector("#computerPokemon");
  let computerChoice = document.querySelector('.computerChose');
  let VSpkm = document.querySelector('#VSpkm')


  const randomIndex = Math.floor(Math.random() * gameOptions.length);
  computerSelection = gameOptions[randomIndex].type;

  if (computerSelection == gameOptions[0].type) {
    computerPokemon.innerHTML = '<img class="pkm" src="assets/img/salamèche.png" alt="">'
    computerChoice.innerHTML = '<img src="assets/img/fire.png" alt="">'
    VSpkm.innerHTML = '<img src="assets/img/sala.png" class="img-fluid fighter" id="EaseIn" alt="...">'

  } else if (computerSelection == gameOptions[1].type) {
    computerPokemon.innerHTML = '<img class="pkm" src="assets/img/bulbizarre.png" alt="">'
    computerChoice.innerHTML = '<img src="assets/img/plant.png" alt="">'
    VSpkm.innerHTML = '<img src="assets/img/bulbi.png" class="img-fluid fighter" id="EaseIn" alt="...">'

  } else {
    computerPokemon.innerHTML = '<img class="pkm" src="assets/img/Carapuce.png" alt="">'
    computerChoice.innerHTML = '<img src="assets/img/water.png" alt="">'
    VSpkm.innerHTML = '<img src="assets/img/cara.png" class="img-fluid fighter" id="EaseIn" alt="...">'

  }
}

// SCORE
function highlight(scoreEl) {
  var orig = scoreEl.style.color;
  scoreEl.style.color = "#f0ac0f";
  setTimeout(function () {
    scoreEl.style.color = orig;
  }, 400);


}
var computerScoreEl = document.getElementById("computerScore");
var userScoreEl = document.getElementById("userScore");

let userScore = 0;
let computerScore = 0;



// Music
var defeatSound = new Audio(
  "assets/music/battle.mp3"
);
var victorySound = new Audio(
  "assets/music/victory.mp3"
);
var mehSound = new Audio(
  "assets/music/meh.mp3"
);
var winSound = new Audio(
  "assets/music/win.mp3"
);
var restartSound = new Audio(
  "assets/music/restart.mp3"
);
var looseSound = new Audio(
  "assets/music/loose.mp3"
)

// let's battle
for (let i = 0; i < gameButtons.length; i++) {
  let button = gameButtons[i];
  let message = document.querySelector('.message');

  button.addEventListener("click", function () {
    getComputerChoice();

    if (playerSelection.type === computerSelection) {
      message.innerHTML = '<p class="bg-light h5 rounded">The move had no effect</p>'
      mehSound.play();
      highlight(computerScoreEl);
      highlight(userScoreEl);
    } else if (playerSelection.losesTo === computerSelection) {
      message.innerHTML = '<p class="bg-light h5 rounded text-danger">Your pokemon is damaged by the attack !</p>'
      defeatSound.play();
      highlight(computerScoreEl);
      computerScore += 1;
      computerScoreEl.innerText = computerScore;
    } else {
      message.innerHTML = '<p class="bg-light h5 text-success rounded">It`s super effective !</p>'
      victorySound.play();
      highlight(userScoreEl);
      userScore += 1;
      userScoreEl.innerText = userScore;
    }

    let footer = document.querySelector('footer'); 
    let battle = document.querySelector('#battle');
    if ((userScoreEl.innerText) == 3) {
      winSound.play();
      battle.innerHTML = '<div class="text-center message"><p class="h4 text-success bg-light rounded mt-2 ">You defeated trainer Blue!</p><img src="assets/img/winner.webp" alt="" class="img-fluid winwin"><div class="text-center"><img type="button" src="assets/img/restart.png" class="img-fluid restart bg-light rounded-circle" onClick="window.location.reload();"/></div></div>'
    } else if ((computerScoreEl.innerText) == 3) {
      looseSound.play();
      battle.innerHTML = '<div class="text-center message"><p class="h4 rounded bg-light mt-2 ">You were overwhelmed by your defeat!</p><img src="assets/img/ko.png" alt="" class="img-fluid winwin"><div class="text-center"><img type="button" src="assets/img/restart.png" class="img-fluid restart bg-light rounded-circle" onClick="window.location.reload();"/></div></div>'
    }
  })

}




// modal bootstrap
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

