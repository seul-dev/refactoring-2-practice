// 예외와 예상되는 실패를 구분하는 것이 좋다
const values = [];
function getValueForPeriod(periodNumber) {
  return values[periodNumber] || 0;
}

getValueForPeriod(-10);
