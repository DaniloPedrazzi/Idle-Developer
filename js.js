var score = 0;
var clickUpgrade = 1;
var SpSUpgrade = 0;

//CLICK
function generateScore(){
    score += clickPower();
    updateScore();
}

//SpS
setInterval(SpS, 100);
function SpS(){
    score += SpSUpgrade / 10;
    updateScore();
}

//UPGRADES
function clickUpgradeBuy(){
    if(score >= clickUpgrade * 2){
        score -= clickUpgrade * 2;
        clickUpgrade ++;
        updateUI();
    }else{
        error("Não tem dinheiro");
    }
}
function SpSUpgradeBuy(){
    if(score >= SpSUpgrade * 2){
        score -= SpSUpgrade * 2;
        SpSUpgrade ++;
        updateUI();
    }else{
        error("Não tem dinheiro");
    }
}

//ClickPower
function clickPower(){
    return clickUpgrade;
}

//UI
function updateUI(){
    updateScore()
    document.getElementById("buyClickUpgrade").innerHTML = "Buy Click Upgrade: " + clickUpgrade * 2;
    document.getElementById("clickPower").innerHTML = "Click Power: " + clickPower();
    document.getElementById("buySpSUpgrade").innerHTML = "Buy SpS Upgrade: " + SpSUpgrade * 2;
    document.getElementById("SpS").innerHTML = "SpS: " + SpSUpgrade;
    error("");
}
function updateScore(){
    document.getElementById("score").innerHTML = "Score: " + score.toFixed(0);
}
function error(texto){
    document.getElementById("erro").innerHTML = texto;
}