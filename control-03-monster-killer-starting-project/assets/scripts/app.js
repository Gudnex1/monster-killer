const variableMonsterHealth = document.getElementById('mon-health');
const monsterHealthButton = document.getElementById("monsterButton");
const attackInput = document.getElementById("attack-input");
const attacValue = Number(attackInput.value);
const strongAttackValue = 30;

const decidedMonsterHealth = getUsernoInput();
// let chosenMaxlife = decidedMonsterHealth;
// let currentMonsterHealth = chosenMaxlife;
// let currentPlayerHealth = chosenMaxlife;



function getUsernoInput() {
    const life = Number(variableMonsterHealth.value);
    adjustHealthBars(life);
    // console.log(typeof(life));
    return life;
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