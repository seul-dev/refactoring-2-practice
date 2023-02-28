const customerRepository = new CustomerRepository();
const order = new Order(
  data.name,
  customerRepository.registerCustomer(data.customer)
);
class Order {
  #number;
  #customer;
  constructor(number, customer) {
    this.#number = number;
    this.#customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  #id;
  constructor(id) {
    this.#id = id;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;
  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      return this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
