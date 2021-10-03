class Person {

    constructor(idCard, firstName, lastName) {
        this._idCard = idCard;
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get idCard() {
        return this._idCard;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    toString() {
        return `Person ID Card : ${this.idCard} | Name : ${this.firstName} ${this.lastName}`;
    }
}

class BankAccount {

    _accountOwners = [];

    constructor(accountId, firstPersonForAccountOwner, numberOfAccountOwners, balance) {
        this._accountId = accountId;
        this._accountOwners[0] = firstPersonForAccountOwner;
        this._numberOfAccountOwners = numberOfAccountOwners;
        this._balance = balance;
        this._accountOwnerCounting = 1;
    }

    addAccountOwner(idCard, fName, lName) {
        if (this._accountOwnerCounting >= this._numberOfAccountOwners) {
            return false;
        } else {
            this._accountOwners[this._accountOwnerCounting++] = new Person(idCard, fName, lName);
            return true;
        }
    }

    withdraw(amount) {
        if (this._balance < amount) {
            return false;
        } else {
            this._balance -= amount;
            return true;
        }
    }

    deposit(amount) {
        this._balance += amount;
        return true;
    }

    transfer(targetAccount, amount) {
        if (this._balance < amount) {
            return false;
        } else {
            targetAccount.deposit(amount);
            this._balance -= amount;
            return true;
        }
    }

    get accountOwners() {
        return this._accountOwners;
    }

    get balance() {
        return this._balance;
    }

    get accountId() {
        return this._accountId;
    }

}

//Person Object
let P1 = new Person(1, "1", "1");
let P2 = new Person(2, "2", "2");

//BankAccount Object
let A1 = new BankAccount(1, P1, 2, 500);
let A2 = new BankAccount(2, P2, 2, 500);

// Show BankAccount
console.log(A1);
console.log(A2);

// Deposit
A1.deposit(1000);
A2.deposit(2000);

// Withdraw
console.log(A1.withdraw(2000)); // false
console.log(A2.withdraw(500)); // true

// transfer
A1.transfer(A2, 1000); // true
console.log(A1.balance); // 500
console.log(A2.balance); // 3000