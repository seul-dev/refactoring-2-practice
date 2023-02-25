class Reading {
  #cutomer;
  #quantity;
  #month;
  #year;
  constructor(data) {
    this.#cutomer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }
  get customer() {
    return this.#cutomer;
  }
  get quantity() {
    return this.#quantity;
  }
  get month() {
    return this.#month;
  }
  get year() {
    return this.#year;
  }
  get baseRate() {
    return this.#year === 2017 && this.#month === 5 ? 0.1 : 0.2;
  }
  get baseCharge() {
    return this.baseRate * this.quantity;
  }
  get taxThreshold() {
    return 0.1;
  }
  get texableCharge() {
    return Math.max(0, this.baseCharge - this.taxThreshold);
  }
}

const reading = new Reading({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017,
});

export function acquireReading() {
  return reading;
}
