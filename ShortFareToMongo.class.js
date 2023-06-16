const { ShortFare } = require('./ShortFare.class')

class ShortFareToMongo extends ShortFare {
  constructor (doc) {
    super()

    this.airlineIataCode = doc.airlineIataCode
    this.departureAirportIataCode = doc.departureAirportIataCode
    this.arrivalAirportIataCode = doc.arrivalAirportIataCode
    this.outboundDate = doc.outboundDate
    this.inboundDate = doc.inboundDate
    this.currencyCode = doc.currencyCode
    this.journeyType = doc.journeyType
    this.fareClass = doc.fareClass
    this.fareClassInput = doc.fareClassInput
    this.flightType = doc.flightType
    this.siteEdition = doc.siteEdition
    this.totalPrice = doc.totalPrice
    this.createdAt = doc.createdAt || new Date()
    this.sourceId = doc.sourceId
    this.isSoldOut = doc.isSoldOut

    Object.defineProperty(this, 'doc', { value: doc })
  }
}

module.exports = { ShortFareToMongo }
