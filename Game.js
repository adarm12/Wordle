function loadRandomWordToGuess() {
    const randomWord = createRandomWord()
    document.getElementById("random").innerText = randomWord;
    disable()
}

function createRandomWord() {
    const words = [
        "חביתה", "ילקוט", "חצאית", "עוגיה", "קוביה",
        "מאורר", "שמיכה", "מחברת", "שולחן", "מסגרת",
        "תמונה", "שרשרת", "גומיה", "חולצה", "משאית",
        "מונית", "רמזור", "בקבוק", "השראה", "ציפור"]
    const randomIndex = Math.floor(Math.random() * 20);
    const randomWord = words[randomIndex];
    console.log(randomWord);
    return randomWord;
}

function getRandomWord() {
    document.getElementById("random").innerText;
}


function disable() {
    for (let i = 2; i < 7; i++) {
        for (let j = 0; j < 5; j++) {
            document.getElementById("Row" + i + "-cell" + j).disabled = true;
        }
    }
}

let rowCounter = 2;

function clickCheck() {
    //TODOללא תאים ריקים
    do {
        let userInput = "";
        for (let i = 0; i <= 4 && rowCounter < 6; i++) {
            let index = i
            userInput = userInput + document.getElementById("Row" + rowCounter + "-cell" + index).value;
        }
    else
        alert("אין להשאיר תאים ריקים")

    } while (userInput.length != 5)
    console.log("userInput: " + userInput)
    checkWord(userInput)
    rowCounter++

}


//
// const letter = document.querySelectorAll("button")
// letter.forEach(keys => {
//     letter.addEventListener("click", this.textContent)
//     console.log(this.textContent)
// }

function checkWord(userWord) {
    const randomWord = document.getElementById("random").innerText;
    if (userWord === randomWord) {
        console.log("find the word")
        alert("You win!!!");
        document.body.innerHTML = "You win!!!";
    }
    //TODO end the program
    else {
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



