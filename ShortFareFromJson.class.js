
const { ShortFare } = require('./ShortFare.class')

class ShortFareFromJson extends ShortFare {
  constructor (input) {
    super()

    this.airlineIataCode = input.a // airlineIataCode
    this.departureAirportIataCode = input.o // departureAirportIataCode
    this.arrivalAirportIataCode = input.d // arrivalAirportIataCode
    this.outboundDate = input.dd // outboundDate
    this.inboundDate = input.rd // inboundDate
    this.currencyCode = input.c // currencyCode
    this.journeyType = input.jt // journeyType
    this.fareClass = input.fc // fareClass
    this.flightType = input.ft // flightType
    this.siteEdition = input.se // siteEdition
    this.totalPrice = input.p // totalPrice
    this.createdAt = input.ca ? new Date(input.ca) : new Date() // createdAt
  }
}

module.exports = { ShortFareFromJson }
