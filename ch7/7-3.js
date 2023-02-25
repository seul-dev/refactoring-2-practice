export class Order {
  #priority;
  constructor(priority) {
    this.#priority = priority;
  }

  get priority() {
    return this.#priority;
  }

  isHighPriority() {
    return this.#priority.higherThan(new Priority('normal'));
  }
}

class Priority {
  #value;
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid`);
    }
  }
  static legalValues() {
    return ['low', 'normal', 'high', 'rush'];
  }

  get index() {
    return Priority.legalValues().indexOf(this.#value);
  }

  higherThan(other) {
    return this.index > other.index;
  }
}

const orders = [
  new Order(new Priority('normal')),
  new Order(new Priority('high')),
  new Order(new Priority('rush')),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;

console.log(highPriorityCount);
