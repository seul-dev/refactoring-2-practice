export function statement(invoice, plays) {
  let totalAmount = 0;
  const volumeCredits = calcVolumeCredits();
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    const thisAmount = amountFor(playFor(perf), perf);

    // 청구 내역을 출력한다.
    result += `  ${playFor(perf).name}: ${usdFormat(thisAmount)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }
  result += `총액: ${usdFormat(totalAmount)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  return result;

  function playFor(performance) {
    return plays[performance.playID];
  }

  function calcVolumeCredits() {
    let result = 0;
    for (let performance of invoice.performances) {
      result += Math.max(performance.audience - 30, 0);

      if ('comedy' === playFor(performance).type) {
        result += Math.floor(performance.audience / 5);
      }
    }
    return result;
  }
}

function usdFormat(arg) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(arg / 100);
}

function amountFor(play, performance) {
  let result = 0;
  switch (play.type) {
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
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }
  return result;
}

// 사용예:
const playsJSON = {
  hamlet: { name: 'Hamlet', type: 'tragedy' },
  'as-like': { name: 'As You Like It', type: 'comedy' },
  othello: { name: 'Othello', type: 'tragedy' },
};

const invoicesJSON = [
  {
    customer: 'BigCo',
    performances: [
      {
        playID: 'hamlet',
        audience: 55,
      },
      {
        playID: 'as-like',
        audience: 35,
      },
      {
        playID: 'othello',
        audience: 40,
      },
    ],
  },
];

const result = statement(invoicesJSON[0], playsJSON);
const expected =
  '청구 내역 (고객명: BigCo)\n' +
  '  Hamlet: $650.00 (55석)\n' +
  '  As You Like It: $580.00 (35석)\n' +
  '  Othello: $500.00 (40석)\n' +
  '총액: $1,730.00\n' +
  '적립 포인트: 47점\n';
console.log(result);
console.log(result === expected);
