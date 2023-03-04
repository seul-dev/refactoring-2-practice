//플래그 인수란 호출되는 함수가 실행할 로직을 호출하는 쪽에서 선택하기 위해 전달하는 인수
// 예제 1
function setWidth(value) {
  this._width = value
} 

function setHeight (value) {
  this._height = value
}

// 예제 2
class Concert {
  regularBook(curstom) {}
  premiumBook(curstom) {}

  #book(customer, isPremium) {}
}

// 예제 3
function setSwitchOn();
function setSwitchOff();