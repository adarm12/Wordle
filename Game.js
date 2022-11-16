function loadRandomWordToGuess() {
    const words = [
        "חביתה",
        "ילקוט",
        "ענבים",
        "עוגיה",
        "דגנים", //5
        "מאורר",
        "שמיכה",
        "מחברת",
        "שולחן",
        "מסגרת",//10
        "תמונה",
        "שרשרת",
        "גומיה",
        "חולצה",
        "משאית",//15
        "מונית",
        "רמזור",
        "בקבוק",
        "השראה",
        "ציפור"]
    const randomIndex = Math.floor(Math.random() * 20);
    const randomWord = words[randomIndex];
    document.getElementById("random").innerText = randomWord;
    alert(randomWord)
    splitRandomWord();
    return randomWord;
}

function splitRandomWord() {
    const randomWord = document.getElementById("random").innerText;
    const splitWord = new Array(randomWord.split(""))
    alert(splitWord);
}

function get() {
    const a = document.getElementsByClassName("Row1").item(0).getElementById("userInput0").value;
    alert(a +" helloooo");
}
function attachWord() {
    let userInput = "";
    for (let i = 4; i >= 0; i--) {
        let index = i + ""
        userInput = userInput + document.getElementById("userInput" + index).value;
    }
    alert("userInput: " + userInput)
}

function checkWord(word, randomWord) {
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == randomWord.charAt(i)) {
            alert("משווים")
            document.getElementById("")
        }


    }
}


function addLettersButton() {
    const keys = [
        'א' +
        'ב' +
        'ג' +
        'ד' +
        'ה' +
        'ו' +
        'ז' +
        'ח' +
        'ט' +
        'י' +
        'כ' +
        'ל' +
        'מ' +
        'נ' +
        'ס' +
        'ע' +
        'פ' +
        'צ' +
        'ק' +
        'ר' +
        'ש' +
        'ת' +
        'ף' +
        'ך' +
        'ץ' +
        'ם' +
        'Enter'
    ]

    for (let i = 0; i < keys.length; i++) {
        const buttonElement = document.createElement('button')
        buttonElement.textContent = key

    }
}

const guessRows = [
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '',
    '', '', '', '', '']

for (let i = 0; i < guessRows.length; i++) {
}