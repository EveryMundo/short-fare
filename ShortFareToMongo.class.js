
const { ShortFare } = require('./ShortFare.class')

class ShortFareToMongo extends ShortFare {
  constructor (doc) {
    super()

    this.a = doc.airlineIataCode
    this.o = doc.departureAirportIataCode
    this.d = doc.arrivalAirportIataCode
    this.dd = doc.outboundDate
    this.rd = doc.inboundDate
    this.c = doc.currencyCode
    this.tt = doc.journeyType
    this.fc = doc.fareClass
    this.p = doc.price
    this.ca = doc.createdAt

    Object.defineProperty(this, 'doc', { value: doc })
  }
}

module.exports = { ShortFareToMongo }
