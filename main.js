document.getElementById("currencyDisplay").innerHTML = "You've got zero coins! Congrats, you're poor! (Only unlock is at 25 Coins)";
var coins = 0;
function incrementMoney () {
    coins++;
    document.getElementById("currencyDisplay").innerHTML= "Coins: " + coins;
    if (coins >= 25) {
        document.getElementById('moneyButton2').style.display=('block')
    }
}
function doubleMoney() {
    if (coins >= 5) {
        coins*=2;
        document.getElementById("currencyDisplay").innerHTML= "Coins: " + coins;
    }
}