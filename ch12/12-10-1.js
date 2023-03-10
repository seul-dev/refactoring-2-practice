class Booking {
  #show;
  #date;
  constructor(show, date) {
    this.#show = show;
    this.#date = date;
  }

  get hasTalkback() {
    return this.#premiumDelegate
      ? this.#preminumDelegate.hasTalkback
      : this.#show.hasOwnProperty('talkback') && !this.isPeakDay;
  }

  get basePrice() {
    let result = this.#show.price;

    if (this.isPeakDay) {
      result += Math.round(result * 0.15);
    }

    return this.#premiumDelegate
      ? this.#premiumDelegate.extendBasePrice(result)
      : result;
  }

  get hasDinner() {
    return this.#premiumDelegate ? this.#premiumDelegate.hasDinner : undefined;
  }

  #bePremium(extras) {
    this.#premiumDelegate = new PremiumBookingDelegate(this, extras);
  }

  static createBooking(show, date) {
    return new Booking(show, date);
  }

  static createPremiumBooking(show, date, extras) {
    const result = new Booking(show, date);
    result.#bePremium(extras);
    return result;
  }
}

class PremiumBookingDelegate {
  #host;
  #extras;
  constructor(hostBooking, extras) {
    this.#host = hostBooking;
    this.#extras = extras;
  }

  get hasTalkback() {
    return this.#host.#show.hasOwnProperty('talkback');
  }

  get hasDinner() {
    return this.#extras.hasOwnProperty('dinner') && !this.#host.isPeakDay;
  }

  extendBasePrice(base) {
    return Math.round(base + this.#extras.premiumFee);
  }
}

const booking = Booking.createBooking(show, date);
const premiumBooking = Booking.createPremiumBooking(show, date, extras);
