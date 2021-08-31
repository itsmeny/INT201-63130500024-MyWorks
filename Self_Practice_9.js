// แบบฝึกหัดที่ 5 ให้เขียนโปรแกรม เพื่อหาผลลัพธ์จากเมนูที่ืให้เลือก โดยพิจารณาจากค่าที่สุ่มในช่วง 1-100 จำนวน 3 ค่า

let randomNumberArray = [randomNumber(), randomNumber(), randomNumber()]; // สุ่มค่า 1-100 จำนวน 3 ค่าไปเก็บไว้ในตัวแปร randomNumberArray

function randomNumber() { // function สุ่มเลขที่อยู่ในช่วง 1-100
    return Math.floor((Math.random() * 100)) + 1
}

function findSum(numarr) { // function หาผลรวม
    let sum = 0; // สร้างตัวแปรไว้เก็บผลรวมทั้งหมด
    for (let i = 0; i < numarr.length; i++) { // for loop เข้าไปทุกตัวของ numarr
        sum += numarr[i]; // เอาทุกตัวใน numarr ไป + เพิ่มใน sum
    }
    return sum; // return sum ออกไป
}
function findMaximum(numarr) { // function หาค่าสูงสุด
    let result = numarr[0]; // กำหนด result ให้มีค่าเป็นตัวแรกของ numarr ที่รับเข้ามา
    for (let i = 0; i < numarr.length; i++) { // for loop เข้าไปทุกตัวของ numarr
        if (numarr[i] > result) { // ถ้า numarr ตำแหน่งที่ i มีค่ามากกว่า result
            result = numarr[i]; // เอาค่าที่มากกว่าไปเก็บไว้ใน result
        }
    }
    return result; // return result ออกไป
}
function findMinimum(numarr) { // function หาค่าต่ำสุด
    let result = numarr[0]; // กำหนด result ให้มีค่าเป็นตัวแรกของ numarr ที่รับเข้ามา
    for (let i = 0; i < numarr.length; i++) { // for loop เข้าไปทุกตัวของ numarr
        if (numarr[i] < result) {  // ถ้า numarr ตำแหน่งที่ i มีค่าน้อยกว่า result
            result = numarr[i]; // เอาค่าที่น้อยกว่าไปเก็บไว้ใน result
        }
    }
    return result; // return result ออกไป
}

function menu(menu_number) { // function แสดงเมนู โดยใช้ switch case
    switch (menu_number) { // switch case
        case 1: return findSum(randomNumberArray); // เมนู 1
        case 2: return findMinimum(randomNumberArray); // เมนู 2
        case 3: return findMaximum(randomNumberArray); // เมนู 3
        default: break;
    }
}

console.log(menu(1)); // เรียกใช้เมนูที่ 1 หาผลรวม findSum()
console.log(menu(2)); // เรียกใช้เมนูที่ 2 หาตัวเลขที่น้อยที่สุด findMinimum()
console.log(menu(3)); // เรียกใช้เมนูที่ 3 หาตัวเลขที่มากที่สุด findMaximum()