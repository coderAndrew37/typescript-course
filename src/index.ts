class Account {
  constructor(
    public readonly id: number,
    public name: string,
    public email: string,
    private _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance is ${this._balance}`);
    } else {
      console.log(`Deposit amount must be positive`);
    }
  }

  getBalance(): number {
    return this._balance;
  }

  private _calculateTax(): number {
    return this._balance * 0.2; // Example tax calculation
  }

  getTax(): number {
    return this._calculateTax();
  }
}

let account = new Account(1, "John Doe", "2g5wI@example.com", 1000);
account.deposit(500);
console.log(account.getTax()); // account.getTax(); // 300

console.log(typeof account); // object
const balance = account.getBalance();
console.log(balance); // 1500
