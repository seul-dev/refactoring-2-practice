export function temperatureAlerts(room, plan) {
  const alerts = [];

  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(range) {
    return (
      range.bottom >= this._temperatureRange.low &&
      range.top <= this._temperatureRange.high
    );
  }
}
// 객체를 통째로 넘기는 것은 실용적이나, 함수가 객체에 대한 의존성을 갖게되므로 이 부분을 잘 고려해야 함.
