class Student { // class Student
    constructor(id, firstname, lastname) { // constructor ถ้าใช้แบบ java จะต้องใช้เป็น Student แต่ javascript ใช้ keyword constructor เลย
        this._id = id; // this ใช้ _.id = id;
        this._firstname = firstname; // this ใช้ _.firstname = firstname;
        this._lastname = lastname; // this ใช้ _.lastname = lastname;
    }
    greeting() { // function greeting
        return `Hello ${this._firstname}, Hope you get grade A`;
    }
    toString() { // function toString
        return `Student Id : ${this._id} Student Name : ${this._firstname} ${this._lastname}`;
    }
    get getId() { // getter id
        return this._id;
    }
    get getFirstname() { // getter firstname
        return this._firstname;
    }
    get getLastname() { // getter lastname
        return this._lastname;
    }
}

let std1 = new Student(63130500024, 'Chokjaroen', 'Tancharoenrat'); // new object Student ใน std1
console.log(std1.greeting()); // เรียกใช้ greeting()
console.log(std1.toString()); // เรียกใช้ toString()
console.log(`${std1.getId} : ${std1.getFirstname} : ${std1.getLastname}`); // เรียกใช้ getter