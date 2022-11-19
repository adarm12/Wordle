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
}

let rowCounter = 1;

function clickEnter() {

    //TODO לא לאפשר לערןך
    //TODO ללא תאים ריקים
    let userInput = "";
    for (let i = 4; i >= 0 && rowCounter < 7; i--) {
        let index = i
        userInput = userInput + document.getElementById("Row" + rowCounter + "-cell" + index).value;
        document.getElementById("Row" + rowCounter + "-cell" + index).disabled = false;
    }
    console.log("userInput: " + userInput)
    rowCounter++
    checkWord(userInput)
}

function checkWord(userWord) {
    const randomWord = document.getElementById("random").innerText;
    if (userWord === randomWord)
        console.log("find the word")
    //TODO end the program
    else {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord.indexOf(userWord.charAt(i)) === i) {
                console.log(randomWord.charAt(i) + "נמצא במיקום ")
                // document.getElementById("Row" + rowCounter + "-cell" + index).style.background = 'green';

            } else if (randomWord.indexOf(userWord.charAt(i)) > -1) {
                console.log(userWord.charAt(i) + " orange")
                // changeCellColor(i, 'orange');
            } else {
                (console.log(userWord.charAt(i) + " gray"))
                // changeCellColor(i, 'gray');
            }
        }
    }
}

function changeCellColor(index, color) {
    document.getElementById("Row" + rowCounter + "-cell" + index).style.background = color;

}

//
// function addLettersButton() {
//     const keys = [
//         'א' +
//         'ב' +
//         'ג' +
//         'ד' +
//         'ה' +
//         'ו' +
//         'ז' +
//         'ח' +
//         'ט' +
//         'י' +
//         'כ' +
//         'ל' +
//         'מ' +
//         'נ' +
//         'ס' +
//         'ע' +
//         'פ' +
//         'צ' +
//         'ק' +
//         'ר' +
//         'ש' +
//         'ת' +
//         'ף' +
//         'ך' +
//         'ץ' +
//         'ם' +
//         'Enter'
//     ]
//
//     keys.forEach(key => {
//         const buttonElement = document.createElement('button')
//         buttonElement.textContent = key
//
//         Keys.append(buttonElement)
//     })
// }
