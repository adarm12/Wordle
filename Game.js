
function randomWordToGuess() {
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
    let randomIndex = Math.ceil(Math.random() * 20);
    let randomWord = words[randomIndex];
    alert(randomWord)
}

function checkWord()
 {
//     let l0 = document.().type.concat(0);
//     alert(l0)
////jhgh
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
