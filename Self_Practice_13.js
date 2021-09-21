//function expression
const getRectangleArea = function (width, height) {
    return width * height;
};

let rectA = getRectangleArea(10, 20); // 200
console.log(rectA);

const doSomething = function (n1, n2, n3) {
    return n1 + n2 + n3;
}

console.log(doSomething(1, 2, 3)); // 6

//named function expression
const findSum = function sum(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n + sum(n - 1);
    }
}

console.log(findSum(2));

function area_(width, height) {
    return width * height;
}

console.log(area_(5, 4)); // 20

// arrow function
// 1 
const helloSomeone = name => `Hello, ${name}`;

// 2
const area = (width, height) => width * height;

// 3
const evenNum = num => { // multiline 
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const oddNum = num => (num % 2 !== 0); // short

console.log(oddNum(5)); // true
console.log(oddNum(2)); // false