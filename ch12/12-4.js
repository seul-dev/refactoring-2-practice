class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}

// 특정 서브 클래스(하나 혹은 소수)와만 관련된 메서드는 슈퍼 클래스에서 제거하고 해당 서브클래스에 추가
