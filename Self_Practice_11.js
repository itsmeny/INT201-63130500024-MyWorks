class Person {
    constructor(id, name) {
        if (id.length != 13) {
            this._id = "unknown";
        } else {
            this._id = id;
        }
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        console.log('You are in getter');
        return this._name;
    }
    set name(name) {
        console.log('You are in setter');
        this._name = name;
    }
    toString() {
        return `person id = ${this._id}, person name = ${this._name}`;
    }
}

let per1 = new Person('1234567890123', 'SomSri');
per1.name = 'Somjeen';
console.log(per1.name);

// console.log(per1.toString());
// let per2 = new Person('123', 'bbbb');
// console.log(per2.toString());

// Person.prototype.getFirstNameLetter = function () {
//     return this._name.charAt(0).toUpperCase();
// };

// console.log(per1.getFirstNameLetter());
// console.log(per2.getFirstNameLetter());
// class Student {
//     constructor(stdId) {
//         studentId = stdId;
//     }
// }

// console.log(Object.prototype.isPrototypeOf(per1));
// console.log(Person.prototype.isPrototypeOf(per1));
// console.log(Student.prototype.isPrototypeOf(per1));