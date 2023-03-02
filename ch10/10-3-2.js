export function adjustedCapital(instrument) {
  if (!isEligibleForAdjusCapital(instrument)) {
    return 0;
  }
  return (
    (instrument.income / instrument.duration) * anInstrument.adjustmentFactor
  );
}

function isEligibleForAdjusCapital(instrument) {
  return (
    instrument.capital > 0 &&
    instrument.interestRate > 0 &&
    instrument.duration > 0
  );
}
