var score = 0;
var clickUpgrade = 1;
var SpSUpgrade = 0;
var prestigeLevel = 1;
var prestigeLevelCache = 0;
var spendScore = 0;

//CLICK
function GenerateScore(){
    score += ClickPower();
    UpdateScore();
}

//SpS
setInterval(SpS, 100);
function SpS(){
    score += SpSCalculation() / 10;
    UpdateScore();
}
function SpSCalculation(){
    // return prestigeEffect(SpSUpgrade);
    return SpSUpgrade;
}

/*PRETIGE
setInterval(teste, 100);
function teste(){
    console.log(prestigeLevel, prestigeLevelCache, prestigePrice());
}
setInterval(prestigeCalculation, 100);
function Prestige(){
    if(prestigeLevelCache !== 0){
        prestigeLevel += prestigeLevelCache;
        reset();
    }
}
function prestigeCalculation(){
    if(score >= prestigePrice()){
        prestigeLevelCache++;
    }
}
function prestigePrice(){
    if(prestigeLevelCache == 0){
        return prestigeLevelCache + prestigeLevel * 1000;
    }else{
        return prestigeLevel + prestigeLevelCache * 1000;
    }
}
function TotalScore(){
    return score + spendScore;
}
function prestigeEffect(value){
    var prestigevalue = prestigeLevel - 1;
    return value + value/10 * prestigevalue;
}
function reset(){
    score = 0;
    clickUpgrade = 1;
    SpSUpgrade = 0;
    prestigeLevelCache = 0;
    UpdateUI();
}*/

//UPGRADES
function ClickUpgradeBuy(){
    if(score >= clickUpgrade * 2){
        score -= clickUpgrade * 2;
        spendScore -= clickUpgrade *2;
        clickUpgrade ++;
        UpdateUI();
    }else{
        Erro("Não tem dinheiro");
    }
}
function SpSUpgradeBuy(){
    if(score >= SpSUpgrade * 2){
        score -= SpSUpgrade * 2;
        spendScore -= SpSUpgrade *2;
        SpSUpgrade ++;
        UpdateUI();
    }else{
        Erro("Não tem dinheiro");
    }
}

//ClickPower
function ClickPower(){
    // return prestigeEffect(clickUpgrade);
    return clickUpgrade;
}

//UI
function UpdateUI(){
    UpdateScore()
    document.getElementById("buyClickUpgrade").innerHTML = "Buy Click Upgrade: " + clickUpgrade * 2;
    document.getElementById("clickPower").innerHTML = "Click Power: " + ClickPower();
    document.getElementById("buySpSUpgrade").innerHTML = "Buy SpS Upgrade: " + SpSUpgrade * 2;
    document.getElementById("SpS").innerHTML = "SpS: " + SpSUpgrade;
    document.getElementById("prestige").innerHTML = "Prestige + " + prestigeLevelCache;
    Erro("");
}
function UpdateScore(){
    document.getElementById("score").innerHTML = "Score: " + score.toFixed(0);
    document.getElementById("prestige").innerHTML = "Prestige + " + prestigeLevelCache;
}
function Erro(texto){
    document.getElementById("erro").innerHTML = texto;
}