targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}
// 응집도가 떨어진 외무 모듈간에 데이터를 주고 받을때에는 필요한 데이터를 전달받는 매개변수로
