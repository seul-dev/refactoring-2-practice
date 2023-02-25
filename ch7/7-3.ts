class Priority {
  static Low = new Priority('low', 0);
  static NORMAL = new Priority('normal', 1);
  static HIGH = new Priority('high', 2);
  static RUSH = new Priority('rush', 3);
  private constructor(private name: string, private index: number) {}

  higherThan(other: Priority) {
    this.index > other.index;
  }
}

class Order {
  constructor(private _priority: Priority) {}
  get priority() {
    return this._priority;
  }
}

const orders = [
  new Order(Priority.NORMAL),
  new Order(Priority.HIGH),
  new Order(Priority.RUSH),
];

const highPriorityCount = orders.filter((o) =>
  o.priority.higherThan(Priority.NORMAL)
).length;

console.log(highPriorityCount);
