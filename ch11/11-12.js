function localShippingRules(data) {
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(errorCode);
    this.code = errorCode;
  }
  get name() {
    return 'OrderProcessingError';
  }
}

//사용할때
try {
  localShippingRules();
} catch (error) {
  if (error instanceof OrderProcessingError) {
    console.log(error);
  }
}
