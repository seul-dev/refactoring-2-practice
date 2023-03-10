export function createStatement(invoice, plays) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalCredits = totalCredits(result);
  result.totalAmounts = totalAmounts(result);
  return result;

  function enrichPerformance(performance) {
    const result = { ...performance };
    result.play = playFor(performance);
    result.amount = amountFor(result);
    result.credits = creditsFor(result);
    return result;
  }

  function playFor(performance) {
    return plays[performance.playID];
  }

  function creditsFor(performance) {
    let result = 0;
    result += Math.max(performance.audience - 30, 0);
    if ('comedy' === performance.play.type) {
      result += Math.floor(performance.audience / 5);
    }
    return result;
  }

  function totalCredits(data) {
    return data.performances.reduce((total, p) => total + p.credits, 0);
  }

  function amountFor(performance) {
    let result = 0;
    switch (performance.play.type) {
      case 'tragedy': // 비극
        result = 40000;
        if (performance.audience > 30) {
          result += 1000 * (performance.audience - 30);
        }
        break;
      case 'comedy': // 희극
        result = 30000;
        if (performance.audience > 20) {
          result += 10000 + 500 * (performance.audience - 20);
        }
        result += 300 * performance.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르: ${performance.play.type}`);
    }
    return result;
  }

  function totalAmounts(data) {
    return data.performances.reduce((total, p) => total + p.amount, 0);
  }
}
