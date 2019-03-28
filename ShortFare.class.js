
class ShortFare {
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

  get departureDate () {
    return this.dd
  }
  set departureDate (v) {
    this.dd = v
  }

  get returnDate () {
    return this.rd
  }
  set returnDate (v) {
    this.rd = v
  }

  get currencyCode () {
    return this.c
  }
  set currencyCode (v) {
    this.c = v
  }

  get tripType () {
    return this.tt
  }
  set tripType (v) {
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
      _id: {
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
