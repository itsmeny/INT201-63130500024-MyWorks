// JavaScript Expression (นิพจน์)
// นิพจน์ คือ กลุ่มของข้อมูลซึ่งอาจจะอยู่ในรูปของค่าคงที่หรือตัวแปรมาดำเนินการโดยใช้เครื่องหมายต่าง ๆ ไม่ว่าจะเป็นเครื่องหมายทางคณิตศาสตร์ เครื่องหมายการเปรียบเทียบ หรือ เครื่องหมายทางตรรกศาสตร์
// expression != statement

let MyName = "itsmeny";
let MyAge = 19;
let MyUniversity = "KMUTT";

console.log(`Hello my name is ${MyName}, I'm ${MyAge} years old, I'm in SIT ${MyUniversity}`) // แสดงข้อความเหมือน Join String ใน Java

console.log(`${!true}`); // แสดงค่าออกมาเป็น false เพราะ !true (ตรงกันข้าม)

let num = 10;
console.log(typeof (num)); // 'number'
num = '10';
console.log(typeof (num)); // 'string'

console.log(1 + '1'); // implicit conversion (1 ตัวแรก String(1)) มันเลยได้ผลออกมาเป็น 11 เพราะเอา String มาต่อกัน

console.log('5' * '4'); // implicit conversion (Number('5') , Number('4') เดาว่าถ้าเราพยายามเรียกใช้คำสั่งเกี่ยวกับคณิต คูณลบหารเลข มันจะพยายามแปลงค่าที่จะมาทำการ คูณลบหารเลข กันให้เป็นตัวเลข (20)