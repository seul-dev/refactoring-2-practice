export class Order {
  #priority;
  constructor(data) {
    this.#priority = data.priority;
  }

  get priority() {
    return this.#priority;
  }

  isHighPriority() {
    return this.#priority === 'high' || this.#priority === 'rush';
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;

console.log(highPriorityCount);
