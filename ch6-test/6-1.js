export function printOwing(invoice, console, clock) {
  printBanner(console);
  const customerInvoice = {
    customer: invoice.customer,
    amount: calculateOutstanding(invoice.orders),
    dueDate: recordDueDate(clock),
  };
  printDetails(customerInvoice, console);
}

function printBanner(console) {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(orders) {
  return orders.reduce((sum, order) => sum + order.amount, 0);
}

function recordDueDate(clock) {
  const today = clock.today;
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  ).toLocaleDateString();
}

function printDetails(customerInvoice, console) {
  console.log(`name: ${customerInvoice.customer}`);
  console.log(`amount: ${customerInvoice.amount}`);
  console.log(`due: ${customerInvoice.dueDate}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
class Clock {
  constructor() {}
  get today() {
    return new Date();
  }
}
printOwing(invoice, console, new Clock());
