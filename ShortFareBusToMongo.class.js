
const { ShortFareBus } = require('./ShortFareBus.class')

class ShortFareBusToMongo extends ShortFareBus {
  constructor (doc) {
    super()

    if (doc != null) {
      this.tenantCode = doc.tenantCode

      this.departureBusStopId = doc.departureBusStopId
      this.arrivalBusStopId = doc.arrivalBusStopId

      this.departureCityGeoId = doc.departureCityGeoId
      this.arrivalCityGeoId = doc.arrivalCityGeoId
      this.departureCityName = doc.departureCityName
      this.arrivalCityName = doc.arrivalCityName

      this.outboundDate = doc.outboundDate
      this.inboundDate = doc.inboundDate
      this.currencyCode = doc.currencyCode
      this.journeyType = doc.journeyType
      this.fareClass = doc.fareClass
      this.siteEdition = doc.siteEdition
      this.totalPrice = doc.totalPrice
      this.createdAt = doc.createdAt || new Date()
      this.sourceId = doc.sourceId
      this.isSoldOut = doc.isSoldOut
    }

    Object.defineProperty(this, 'doc', { value: doc })
  }
}

module.exports = { ShortFareBusToMongo }
