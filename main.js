document.getElementById("currencyDisplay").innerHTML = "You've got zero coins! Congrats, you're poor! (Only unlock is at 25 Coins)";
var coins = 0;
function incrementMoney () {
    coins++;
    updateDisplay();
    if (coins >= 25) {
        document.getElementById('moneyButton2').style.display=('block');
    }
}
function doubleMoney() {
    if (coins >= 5) {
        coins*=2;
        updateDisplay();
    }
}

function updateDisplay() {
    if (coins > 100) {
        document.getElementById("currencyDisplay").innerHTML= "Coins: " + coins + " (-" + Math.floor(coins / (2 * Math.log10(coins))) + "/s from taxes!)";
    } else {
        document.getElementById("currencyDisplay").innerHTML= "Coins: " + coins;
    }

}

function taxMoney() {
    if (coins > 100) {
        var tax = Math.floor(coins / (2 * Math.log10(coins)));
        if (coins - tax <= 100) {
            coins = 100;
        } else {
            coins -= tax;
        }
        updateDisplay();
    }
    setTimeout(taxMoney, 1000); 
}
taxMoney();