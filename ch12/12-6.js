class Employee {
  #name;

  constructor(name) {
    // 생성자 함수를 private으로 바꾼다
    this.#name = name;
  }

  toString() {
    return `${this.#name} (${this.type})`;
  }

  static createEmployee(name, type) {
    switch (type) {
      case 'engineer':
        return new Engineer(name);
      case 'manager':
        return new Manager(name);
      case 'salesperson':
        return new Salesperson(name);
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`);
    }
  }
}

class Engineer extends Employee {
  get type() {
    return 'engineer';
  }
}
class Manager extends Employee {
  get type() {
    return 'manager';
  }
}
class Salesperson extends Employee {
  get type() {
    return 'salesperson';
  }
}

const ellie = Employee.createEmployee('엘리', 'engineer');
const bob = Employee.createEmployee('밥', 'manager');
