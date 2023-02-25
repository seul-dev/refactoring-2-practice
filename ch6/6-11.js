class Order {
  #product;
  #quanty;
  #shippinMethod;

  constructor(product, quantity, shippingMethod) {
    this.#product = product;
    this.#quanty = quantity;
    this.#shippinMethod = shippingMethod;
  }

  get basePrice() {
    return calculateBasePrice(this.#product, this.#quanty);
  }

  get disCount() {
    return calculateDiscount(this.#quanty, this.#product);
  }

  get shoppingCost() {
    return calculateShoppingCost(
      this.basePrice,
      this.#shippinMethod,
      this.#quanty
    );
  }

  get price() {
    return this.basePrice - this.disCount + this.shoppingCost;
  }
}

export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = calculateBasePrice(product, quantity);
  const discount = calculateDiscount(quantity, product);
  const shippingCost = calculateShoppingCost(
    basePrice,
    shippingMethod,
    quantity
  );

  return basePrice - discount + shippingCost;
}

function calculateBasePrice(product, quantity) {
  return product.basePrice * quantity;
}

function calculateDiscount(quantity, product) {
  return (
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate
  );
}

function calculateShoppingCost(basePrice, shippingMethod, quantity) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  return quantity * shippingPerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);

const order = new Order(product, 5, shippingMethod);
console.log(order.price);
