// 인스턴스를 만드는 로직을 캡슐화하기 위해 (constructor를 private으로 해야 함)
export class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEngineer(name) {
    return new Employee(name, 'E');
  }

  static createManager(name) {
    return new Employee(name, 'M');
  }

  static createSalesman(name) {
    return new Employee(name, 'S');
  }
}

const engineer = Employee.createEngineer('seul');
