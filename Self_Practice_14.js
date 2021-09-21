// ทอยลูกเต๋า

let player = [
    { id: 1, dice: dice() },
    { id: 2, dice: dice() },
];

function dice() {
    return Math.floor(Math.random() * 6) + 1;
}

function returnResult() {
    if (player[0].dice > player[1].dice) {
        return `Player ${player[0].id} dice ${player[0].dice} || Player ${player[1].id} dice ${player[1].dice} || Player ${player[0].id} Win!`;
    } else if (player[0].dice == player[1].dice) {
        return `Player ${player[0].id} dice ${player[0].dice} || Player ${player[1].id} dice ${player[1].dice} || Draw!`;
    } else {
        return `Player ${player[0].id} dice ${player[0].dice} || Player ${player[1].id} dice ${player[1].dice} || Player ${player[1].id} Win!`
    }
}


console.log(returnResult());