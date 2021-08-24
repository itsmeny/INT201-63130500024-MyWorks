const constMyMsg = '[const] Hello Self Practice 1'; // สร้างตัวแปรแบบ const
let letMyMsg = '[let] Hello Self Practice 1'; // สร้างตัวแปรแบบ let

console.log(constMyMsg); // แสดงข้อความ constMyMsg = '[const] Hello Self Practice 1'
console.log(letMyMsg); // แสดงข้อความ letMyMsg = '[let] Hello Self Practice 1'

constMyMsg = '[const] Hi'; // แก้ไขค่าในตัวแปร constMyMsg (ERROR เพราะไม่สามารถ Assign ค่าลง constant variable ได้)
letMyMsg = '[let] Hi'; // แก้ไขค่า letMyMsg (ไม่ ERROR เพราะเป็น let)

console.log(constMyMsg); // แสดงข้อความ constMyMsg = '[const] Hello Self Practice 1'
console.log(letMyMsg); // แสดงข้อความ letMyMsg = '[let] hi'

function helloABC() {
    let abcMsg = '[let] Hello From helloABC()'; // สร้างตัวแปรแบบ let ใน scope ของ function helloABC()
    letMyMsg = '[let] Hello From helloABC()'; // แก้ไขค่า letMyMsg (ไม่ ERROR เพราะเป็น let)
}

helloABC(); // เรียกใช้ Function helloABC()

console.log(abcMsg); // แสดงข้อความ abcMsg (ERROR เพราะ abcMsg ไม่ได้อยู่ใน Scope นี้ (is not defined))
console.log(letMyMsg); // แสดงข้อความ letMyMsg = '[let] Hello From helloABC()'