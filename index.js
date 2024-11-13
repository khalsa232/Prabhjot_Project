let guessCounter = Number(localStorage.getItem("guessCounter")) || 7;
document.getElementById("counter-el").innerText = guessCounter;

function vaultCoder() {
    let num1 = Math.floor(Math.random() * 3 + 1);
    let num2 = Math.floor(Math.random() * 3 + 1);
    let num3 = Math.floor(Math.random() * 3 + 1);
    let vaultCode = '' + num1 + num2 + num3;
    return vaultCode;
}

function playAgain() {
    guessCounter = 7;
    localStorage.setItem("guessCounter", guessCounter);
    document.getElementById("counter-el").innerText = guessCounter;
    vaultCode = vaultCoder();
    localStorage.setItem("vaultCode", vaultCode);
    console.log("New Vault Code:", vaultCode);
    clearer();
}

let vaultCode = vaultCoder();
localStorage.setItem("vaultCode", vaultCode);
console.log("Vault Code:", vaultCode);

function guessCalc(value) {
    let currentGuess = document.getElementById("guess-el").innerText;

    if (currentGuess.length < 3 && guessCounter > 0) {
        currentGuess += value;
        document.getElementById("guess-el").innerText = currentGuess;

        if (currentGuess.length === 3) {
            checkGuess(currentGuess); // Check guess after 3 digits
        }
    }
}

function checkGuess(guessedCode) {
    if (guessedCode !== vaultCode) {
        if (guessedCode < vaultCode) {
            document.getElementById("hint").innerText = "Your number is too low!";
        } else if (guessedCode > vaultCode) {
            document.getElementById("hint").innerText = "Your number is too high!";
        }

        guessCounter -= 1;
        localStorage.setItem("guessCounter", guessCounter);
        document.getElementById("counter-el").innerText = guessCounter;

        if (guessCounter === 0) {
            document.getElementById("hint").innerText = "Game over! The code was: " + vaultCode;
            setTimeout(playAgain, 2000);
        }
    } else {
        document.getElementById("hint").innerText = "You've unlocked the vault!";
        setTimeout(playAgain, 2000);
    }
}

function clearer() {
    document.getElementById("guess-el").innerText = ""; // Clear the displayed guess
    document.getElementById("hint").innerText = ""; // Clear the hint message
}