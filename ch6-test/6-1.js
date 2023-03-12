export function printOwing(invoice, console, clock) {
  const owing = new Owing(invoice, clock, console);
  owing.printBanner();
  owing.printDetails();
}

class Owing {
  #invoice;
  #clock;
  #console;
  constructor(invoice, clock, console) {
    this.#invoice = invoice;
    this.#clock = clock;
    this.#console = console;
  }

  get customer() {
    return this.#invoice.customer;
  }

  get amount() {
    return this.#invoice.orders.reduce((sum, order) => sum + order.amount, 0);
  }

  get dueDate() {
    const today = this.#clock.today;
    return new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    ).toLocaleDateString();
  }

  printBanner() {
    this.#console.log('***********************');
    this.#console.log('**** Customer Owes ****');
    this.#console.log('***********************');
  }

  printDetails() {
    this.#console.log(`name: ${this.customer}`);
    this.#console.log(`amount: ${this.amount}`);
    this.#console.log(`due: ${this.dueDate}`);
  }
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
class Clock {
  constructor() {}
  get today() {
    return new Date();
  }
}
printOwing(invoice, console, new Clock());
