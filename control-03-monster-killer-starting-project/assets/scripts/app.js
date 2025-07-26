const variableMonsterHealth = document.getElementById('mon-health');
const monsterHealthButton = document.getElementById("monsterButton");
const attacValue = 10;
const strongAttackValue = 30;

let decidedMonsterHealth = getUsernoInput();
let chosenMaxlife = decidedMonsterHealth;
let currentMonsterHealth = chosenMaxlife;
let currentPlayerHealth = chosenMaxlife;


adjustHealthBars(decidedMonsterHealth);

function getUsernoInput() {
    console.log(variableMonsterHealth.value);
    return parseInt(variableMonsterHealth.value);
}

function attactHandler() {
    const damage = dealMonsterDamage(attacValue);
    decidedMonsterHealth -= damage;
    if (decidedMonsterHealth <= 0) {
        alert('You Won')
    }
}

function attactHandlers() {
  const damage = dealMonsterDamage(strongAttackValue);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attactHandler)
strongAttackBtn.addEventListener("click", attactHandlers);
monsterHealthButton.addEventListener('click', getUsernoInput)