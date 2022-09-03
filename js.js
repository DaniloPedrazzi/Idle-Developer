var score = 0;
var clickUpgrade = 1;
function myFunction(){
    score += powerClick();
    document.getElementById("score").innerHTML = "Score: " + score;
    document.getElementById("erro").innerHTML = "";
}

function clickUpgradeBuy(){
    if(score >= clickUpgrade * 2){
        score -= clickUpgrade * 2;
        clickUpgrade ++;
        document.getElementById("score").innerHTML = "Score: " + score;
        document.getElementById("buyClickUpgrade").innerHTML = "Buy Upgrade: " + clickUpgrade * 2;
        document.getElementById("clickPower").innerHTML = "Click Power: " + powerClick();
    }else{
        document.getElementById("erro").innerHTML = "Não tem dinheiro";
    }
}

function powerClick(){
    return clickUpgrade;
}