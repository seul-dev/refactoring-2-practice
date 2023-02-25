class TelephoneNumber {
  #areaCode;
  #number;
  constructor(areaCode, number) {
    this.#areaCode = areaCode;
    this.#number = number;
  }
  get areaCode() {
    return this.#areaCode;
  }
  set areaCode(arg) {
    this.#areaCode = arg;
  }

  get number() {
    return this.#number;
  }
  set number(arg) {
    this.#number = arg;
  }
  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}
class Person {
  #name;
  #telephoneNumber;
  constructor(name, telephone) {
    this.#name = name;
    this.#telephoneNumber = telephone;
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this.#telephoneNumber.officeAreaCode = arg;
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(arg) {
    this.#telephoneNumber.number = arg;
  }
}

const person = new Person('엘리', new TelephoneNumber('010', '12345678'));
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
