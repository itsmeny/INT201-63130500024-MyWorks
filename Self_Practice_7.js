// แบบฝึกหัดที่ 2 เกมทายเลข 1-10
function guessnumberGame(guessedNumber) {
    let randomNumber = Math.floor(Math.random() * 10) + 1; // สุ่มเลข 1 - 10
    if (guessedNumber > randomNumber) { // ถ้าเลขที่เราเดามากกว่าเลขที่สุ่มก็
        return (`Too high || The number you guessed : ${guessedNumber} || Random Number : ${randomNumber}`);
    } else if (guessedNumber < randomNumber) { // ถ้าเลขที่เราเดาน้อยกว่าเลขที่สุ่มก็
        return (`Too Low || The number you guessed : ${guessedNumber} || Random Number :  ${randomNumber}`);
    } else { // ถ้าเลขที่เราเดามันตรงกับเลขที่สุ่มก็
        return (`You WIN!`);
    }
}

console.log(guessnumberGame(2)); // เรียกใช้ guessnumberGame()
console.log(guessnumberGame(3)); // เรียกใช้ guessnumberGame()
console.log(guessnumberGame(4)); // เรียกใช้ guessnumberGame()