"use strict";
class Account {
    constructor(id, name, email, _balance) {
        this.id = id;
        this.name = name;
        this.email = email;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
            console.log(`Deposited ${amount}. New balance is ${this._balance}`);
        }
        else {
            console.log(`Deposit amount must be positive`);
        }
    }
    getBalance() {
        return this._balance;
    }
    _calculateTax() {
        return this._balance * 0.2;
    }
    getTax() {
        return this._calculateTax();
    }
}
let account = new Account(1, "John Doe", "2g5wI@example.com", 1000);
account.deposit(500);
console.log(account.getTax());
console.log(typeof account);
const balance = account.getBalance();
console.log(balance);
//# sourceMappingURL=index.js.map