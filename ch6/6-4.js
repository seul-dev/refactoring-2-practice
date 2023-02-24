// 불필요한 경우에는 inline
export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}
