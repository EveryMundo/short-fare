
const { ShortFareHotel } = require('./ShortFareHotel.class')

class ShortFareHotelToMongo extends ShortFareHotel {
  constructor (doc) {
    super()

    if (doc != null) {
      this.tenantCode = doc.tenantCode
      this.hotelCode = doc.hotelCode
      this.rateCode = doc.rateCode
      this.checkInDate = doc.checkInDate
      this.checkOutDate = doc.checkOutDate
      this.nights = doc.nights
      this.guests = doc.guests
      this.currencyCode = doc.currencyCode
      this.totalPrice = doc.totalPrice
      this.createdAt = doc.createdAt
      this.createdAt = doc.createdAt
      this.sourceId = doc.sourceId
    }

    Object.defineProperty(this, 'doc', { value: doc })
  }
}

module.exports = { ShortFareHotelToMongo }
