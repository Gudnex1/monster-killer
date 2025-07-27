const variableMonsterHealth = document.getElementById("mon-health");
const monsterHealthButton = document.getElementById("monsterButton");
const attackInput = document.getElementById("attack-input");
let attacValue;
const strongAttackValue = 30;
let life = 0;

let decidedMonsterHealth;
let chosenMaxlife = decidedMonsterHealth;
let currentMonsterHealth = chosenMaxlife;
let currentPlayerHealth = chosenMaxlife;

function getUsernoInput() {
  life = Number(variableMonsterHealth.value);
  adjustHealthBars(life);
  decidedMonsterHealth = life;
  return life;
}

function attactHandler() {
  attacValue = Number(attackInput.value);
  let damage = dealMonsterDamage(attacValue);
  decidedMonsterHealth -= damage;
  if (decidedMonsterHealth <= 0) {
    alert("You Won");
  }
}

function attactHandlers() {
  let damage = dealMonsterDamage(strongAttackValue);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener("click", attactHandler);
strongAttackBtn.addEventListener("click", attactHandlers);
monsterHealthButton.addEventListener("click", getUsernoInput);
