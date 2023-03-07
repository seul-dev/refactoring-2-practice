// 예시 1
class Employee {
  get name() {}
}

class Salesperson extends Employee {}

class Engineer extends Employee {}

// 예시 2
class Party {
  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {}
class Employee extends Party {}

// 서브 클래스에서 공통적으로 사용하는 메서드를 상위클래스로 끌어올리기
// 다른 로직이 필요하면 서브 클래스에서 메서드를 오버라이드하면 된다.
