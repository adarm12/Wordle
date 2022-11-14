function createRandomWordToGuess() {
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
        "נימוס",
        "ציפור"]
    let randomIndex = Math.floor(Math.random() * 20);
    let randomWord = words[randomIndex];
    alert(randomWord)
    return randomWord;
}

function loadRandomGuess() {
    let randomWord = createRandomWordToGuess();
    document.getElementById("random").innerText = randomWord;
}

function checkWord() {
    let userInput = "";
    for (let i = 4; i >= 0; i--) {
        let index = i + ""
        userInput = userInput + document.getElementById("userInput" + index).value;
    }
    alert("userInput: " + userInput)
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