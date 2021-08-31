let Storage = {
    storageNum: 1,
    storageOwner: {
        ownerId: 1,
        ownerName: "Chokjaroen Tancharoenrat"
    },
    storageItem: ['book', 'pen', 'chicken', 'ipad', 'iphone']
}; // Object ซ้อน Object

for (let data in Storage) {
    console.log(`${data} : ${Storage[data]}`);
} // เข้าถึงสมาชิกใน Object

console.log("=============================");

for (let data in Storage) {
    if (typeof (Storage[data]) == 'object') {
        for (let data2 in Storage[data]) {
            console.log(`${data} : ${Storage[data][data2]}`);
        }
    }
} // เข้าถึงสมาชิกใน Object ที่อยู่ใน Object

console.log("=============================");

let product1 = { "name": 'coke', "price": 15 }; // product 1 โค๊ก 15 
let product2 = { "name": 'sprite', "price": 30 }; // product 2 สไปรท์ 30

let waterArr = [product1, product2]; // เอา product1 , product2 มาเก็บไว้ใน waterArr

for (let water of waterArr) {
    console.log(water);
} // แสดงข้อมูล water of waterArr (product1 , product2 , อะไรที่มันอยู่ใน waterArr)

console.log("=============================");