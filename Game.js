function loadRandomWordToGuess() {
    const randomWord = createRandomWord()
    document.getElementById("random").innerText = randomWord
    disable()
}

function createRandomWord() {
    const words = [
        "חגורה", "בורקס", "חצאית", "עוגיה", "קוביה",
        "מגבון", "שמיכה", "מחברת", "שולחן", "מסגרת",
        "תמונה", "מדינה", "גומיה", "חולצה", "משאית",
        "מונית", "טלפון", "מנורה", "סיפור", "ציפור"]
    const randomIndex = Math.floor(Math.random() * 20)
    const randomWord = words[randomIndex]
    console.log(randomWord)


    return randomWord
}

function a() {
    const randomWord = document.getElementById("random").valu;
    const splitWord = randomWord.split("")
    console.log(splitWord)
}

function disable() {
    for (let i = 2; i < 7; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById("Row" + i + "-cell" + j).disabled = true
        }
    }
}

let rowCounter = 1;

function clickCheck() {
    let userInput = "";
    for (let i = 0; i <= 4 && rowCounter <= 6; i++) {
        let index = i
        userInput = userInput + document.getElementById("Row" + rowCounter + "-cell" + index).value
    }
    console.log("userInput: " + userInput)
    if (userInput.length < document.getElementById("random").innerText.length) {
        alert("אין להשאיר תאים ריקים")
    } else {
        checkWord(userInput)
        rowCounter++
        openNextRow()
    }
}

function openNextRow() {
    if (rowCounter < 7) {
        for (let i = 0; i <= 4; i++) {
            document.getElementById("Row" + rowCounter + "-cell" + i).disabled = false
        }
    } else {
        document.body.innerHTML = "הפסדת! המילה היא: " + document.getElementById("random").innerText;
    }
}

function checkWord(userWord) {
    const randomWord = document.getElementById("random").innerText
    if (userWord === randomWord) {
        document.body.innerHTML = "ניצחת! כל הכבוד!!!"
    } else {
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord.indexOf(userWord.charAt(i)) === i) {
                console.log(randomWord.charAt(i) + "  נמצא במיקום ")
                changeCellColor(i, 'green');
            } else if (randomWord.indexOf(userWord.charAt(i)) > -1) {
                console.log(userWord.charAt(i) + " orange")
                changeCellColor(i, 'orange');
            } else {
                (console.log(userWord.charAt(i) + " gray"))
                changeCellColor(i, 'gray');
            }
        }
    }
}

function changeCellColor(index, color) {
    document.getElementById("Row" + rowCounter + "-cell" + index).style.background = color;
}

function moveOnMax(field, nextFieldID) {
    if (field.value.length >= field.maxLength) {
        document.getElementById(nextFieldID).focus();
    }
}

//
// const letter = document.querySelectorAll("button")
// letter.forEach(keys => {
//     letter.addEventListener("click", this.textContent)
//     console.log(this.textContent)
// }

//
// const keyBoardLetters = [
//     'א' +
//     'ב' +
//     'ג' +
//     'ד' +
//     'ה' +
//     'ו' +
//     'ז' +
//     'ח' +
//     'ט' +
//     'י' +
//     'כ' +
//     'ל' +
//     'מ' +
//     'נ' +
//     'ס' +
//     'ע' +
//     'פ' +
//     'צ' +
//     'ק' +
//     'ר' +
//     'ש' +
//     'ת' +
//     'ף' +
//     'ך' +
//     'ץ' +
//     'ם'
// ]
//
// keyBoardLetters.forEach(letter => {
//     const keyBoard = document.getElementById("keyBoard")
//     const buttonElementLetter = document.createElement("button")
//     buttonElementLetter.textContent = letter
//     keyBoard.appendChild(buttonElementLetter)
// })
//