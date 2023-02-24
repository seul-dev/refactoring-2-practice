export function printOwing(invoice) {
  printBanner();
  const customerInvoice = {
    customer: invoice.customer,
    amount: calculateOutstanding(invoice.orders),
    dueDate: recordDueDate(),
  };
  printDetails(customerInvoice);
}

function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(orders) {
  return orders.reduce((sum, order) => sum + order.amount, 0);
}

function recordDueDate() {
  const today = new Date();
  return new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  ).toLocaleDateString();
}

function printDetails(invoice) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${invoice.amount}`);
  console.log(`due: ${invoice.dueDate}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};

printOwing(invoice);
