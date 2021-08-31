// แบบฝึกหัดที่ 2 เกมทายเลข 1-10

let randomNumber = Math.floor(Math.random() * 10) + 1; // สุ่มเลข 1 - 10
let guessedNumber = 2; // ใส่ค่าเลขที่เราจะเดา

if (guessedNumber > randomNumber) { // ถ้าเลขที่เราเดามากกว่าเลขที่สุ่มก็
    console.log(`Too high || The number you guessed : ${guessedNumber} || Random Number : ${randomNumber}`);
} else if (guessedNumber < randomNumber) { // ถ้าเลขที่เราเดาน้อยกว่าเลขที่สุ่มก็
    console.log(`Too Low || The number you guessed : ${guessedNumber} || Random Number :  ${randomNumber}`);
} else { // ถ้าเลขที่เราเดามันตรงกับเลขที่สุ่มก็
    console.log(`You WIN!`);
}