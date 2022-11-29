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
pokeFeu.addEventListener('click', () => playerOne.innerHTML = '<img class="img-fluid pokemon"src="assets/img/Héricendre.png" alt="">')

const starterFeu = document.querySelectorAll(".starterFeu");
for (let i = 0; i < starterFeu.length; i++) {
  let button = starterFeu[i];
  button.addEventListener("click", function () {
    playerSelection = gameOptions[0];
    choice.innerHTML = `<img src="assets/img/fire.png" alt="">`;
  });
}

// Choix starter plante
let pokePlante = document.querySelector('#poke2'); 
pokePlante.addEventListener('click', () => playerOne.innerHTML = '<img class="img-fluid pokemon" src="assets/img/germignon.png" alt="">')

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
pokeEau.addEventListener('click', () => playerOne.innerHTML = '<img class="img-fluid pokemon" src="assets/img/kaiminus.png" alt="">')

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
  let computerChoice = document.querySelector('.computerChose')


  const randomIndex = Math.floor(Math.random() * gameOptions.length);
  computerSelection = gameOptions[randomIndex].type;
  console.log("Computer chose: " + computerSelection);

  if (computerSelection == gameOptions[0].type) {
    computerPokemon.innerHTML = '<img class="img-fluid pokemon" src="assets/img/salamèche.png" alt="">'
    computerChoice.innerHTML = '<img src="assets/img/fire.png" alt="">'
  
  } else if (computerSelection == gameOptions[1].type) {
    computerPokemon.innerHTML = '<img class="img-fluid pokemon" src="assets/img/bulbizarre.png" alt="">'
    computerChoice.innerHTML = '<img src="assets/img/plant.png" alt="">'

  } else {
    computerPokemon.innerHTML = '<img class="img-fluid pokemon" src="assets/img/Carapuce.png" alt="">'
    computerChoice.innerHTML = '<img src="assets/img/water.png" alt="">'

  }
}


for (let i = 0; i < gameButtons.length; i++) {
  let button = gameButtons[i];
  let message = document.querySelector('.message');

  button.addEventListener("click", function () {
    getComputerChoice();

    if (playerSelection.type === computerSelection) {
      console.log("%cdraw huhu", "color: #4399dd; font-size: 25px");
      message.innerHTML = "It's not very effective !"

    } else if (playerSelection.losesTo === computerSelection) {
      console.log(
        "%cyou lose 😔",
        "color: #e44535; font-size: 25px; font-weight: bold"
      );
      message.innerHTML = 'You lose'

    } else {
      console.log(
        "%cyou win! whoop whoop",
        "color: #6eb179; font-size: 25px; font-weight: bold"
      );
      message.innerHTML = 'You win'
    }
})}
