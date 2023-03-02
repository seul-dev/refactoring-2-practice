function disabilityAmount(employee) {
  isNotEligibleForDiability(employee) ? 0 : 1;

  function isNotEligibleForDiability(employee) {
    return (
      employee.seniority < 2 ||
      employee.monthsDisabled > 12 ||
      employee.isPartTime
    );
  }
}
