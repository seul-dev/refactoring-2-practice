export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === 'unknown'
      ? new UnknownCustomer()
      : new Customer(this._customer);
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

class UnknownCustomer {
  get name() {
    return 'occupant';
  }
  get billingPlan() {
    //
  }
  set billingPlan(arg) {
    //
  }
  get paymentMethod() {
    //
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음

  return aCustomer.name;
}

class Hotel {
  constructor() {
    this.rooms = [];
  }

  addRoom(roomNumber) {
    this.rooms[roomNumber] = new Room(roomNumber);
  }

  emptyRoom(roomNumber) {
    this.rooms[roomNumber] = new EmptyRoom(roomNumber);
  }

  cleanRooms() {
    this.rooms.forEach((room) => room.clean());
  }
}

class Room {
  constructor(roomNumber) {
    this.roomNumber = roomNumber;
  }

  clean() {
    console.log(`${this.roomNumber}번 방을 청소합니다.`);
  }
}

class EmptyRoom extends Room {
  clean() {
    console.log(`${this.roomNumber}번 방은 빈 방입니다.`);
  }
}

const hotel = new Hotel();
hotel.addRoom(0);
hotel.addRoom(1);
hotel.emptyRoom(1);
hotel.cleanRooms();
