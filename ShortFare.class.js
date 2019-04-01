
class ShortFare {
  constructor () {
    this.a = undefined
    this.o = undefined
    this.d = undefined
    this.dd = undefined
    this.rd = undefined
    this.c = undefined
    this.tt = undefined
    this.fc = undefined
    this.p = undefined
    this.ca = undefined
  }

  get airlineIataCode () {
    return this.a
  }
  set airlineIataCode (v) {
    this.a = v
  }

  get departureAirportIataCode () {
    return this.o
  }
  set departureAirportIataCode (v) {
    this.o = v
  }

  get arrivalAirportIataCode () {
    return this.d
  }
  set arrivalAirportIataCode (v) {
    this.d = v
  }

  get outboundDate () {
    return this.dd
  }
  set outboundDate (v) {
    this.dd = v
  }

  get inboundDate () {
    return this.rd
  }
  set inboundDate (v) {
    this.rd = v
  }

  get currencyCode () {
    return this.c
  }
  set currencyCode (v) {
    this.c = v
  }

  get journeyType () {
    return this.tt
  }
  set journeyType (v) {
    this.tt = v
  }

  get fareClass () {
    return this.fc
  }
  set fareClass (v) {
    this.fc = v
  }

  get price () {
    return this.p
  }
  set price (v) {
    this.p = v
  }

  get createdAt () {
    return this.ca
  }
  set createdAt (v) {
    this.ca = v
  }

  get _id () {
    return {
      a: this.a,
      o: this.o,
      d: this.d,
      dd: this.dd,
      rd: this.rd,
      c: this.c,
      tt: this.tt,
      fc: this.fc
    }
  }

  get mongoDoc () {
    return {
      _id: this._id,
      p: this.p
    }
  }

  get mongoUpdateDoc () {
    return {
      $set: this.mongoDoc,
      $setOnInsert: { ca: this.ca }
    }
  }

  get mongoUpdateList () {
    return [
      { _id: this._id },
      this.mongoUpdateDoc,
      { upsert: true }
    ]
  }
}

module.exports = { ShortFare }
