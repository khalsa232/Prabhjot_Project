
function guessAdd1() {
    document.getElementById("guess-el").innerText += 1;
    //document.getElementById("guess-el").innerText = element;
}
function guessAdd2() {
    document.getElementById("guess-el").innerText += 2;
    //document.getElementById("guess-el").innerText = element;
}
function guessAdd3() {
    document.getElementById("guess-el").innerText += 3;
    //document.getElementById("guess-el").innerText = element;
}

// let guessedCode = document.getElementById("guess-el").innerText;

let vaultCode = Number(Math.floor(Math.random() * 222 + 111));

if (guessedCode !== vaultCode) {
    if (guessedCode < vaultCode) {
        document.getElementById("hint").innerText = "Your number is too low!";
    }
    if (guessedCode > vaultCode) {
        document.getElementById("hint").innerText = "Your number is too high!";
    }
    if (guessedCode === vaultCode) {
        document.getElementById("hint").innerText = "You've unlocked the vault!";
    }

}

function guessCalc(){
    if (document.getElementById("guess-el").innerText.length === 3) {
        var tag = document.getElementById('guess-el');
        console.log(tag.innerText.length)
    } else {
        if (document.getElementById("num1-el")) {
            guessAdd1();
        } else if (document.getElementById("num2-el")) {
            guessAdd2();
        } else if (document.getElementById("num3-el")) {
            guessAdd3();
        }
    }
}