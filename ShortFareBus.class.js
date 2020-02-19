const { ShortFare } = require('./ShortFare.class')

class ShortFareBus extends ShortFare {
  static formatSiteEdition (siteEdition) {
    const [, lang, countryCode] = ('' + siteEdition).match(/^([A-Za-z]{2})[^A-Za-z]?([A-Za-z]{2})?$/) || []

    if (!lang) return `INVALID_SITE_EDITION [${siteEdition}]`

    return countryCode ? `${lang.toLowerCase()}_${countryCode.toUpperCase()}` : lang.toLowerCase()
  }

  constructor () {
    super()

    this.dBStop = undefined // departureBusStopId
    this.aBStop = undefined // arrivalBusStopId
    this.dCtN = undefined // departureCityName
    this.aCtN = undefined // arrivalCityName
    this.dCtGeo = undefined // departureCityGeoId
    this.aCtGeo = undefined // arrivalCityGeoId
  }

  get departureAirportIataCode () {
    throw new Error('WRONG FIELD departureAirportIataCode! You must use departureBusStopId for Bus')
  }

  set departureAirportIataCode (v) {
    throw new Error('WRONG FIELD departureAirportIataCode! You must use departureBusStopId for Bus')
  }

  get arrivalAirportIataCode () {
    throw new Error('WRONG FIELD arrivalAirportIataCode! You must use arrivalBusStopId for Bus')
  }

  set arrivalAirportIataCode (v) {
    throw new Error('WRONG FIELD arrivalAirportIataCode! You must use arrivalBusStopId for Bus')
  }

  get departureCityName () {
    return this.dCtN
  }

  set departureCityName (v) {
    this.dCtN = v != null ? ('' + v) : v
  }

  get arrivalCityName () {
    return this.aCtN
  }

  set arrivalCityName (v) {
    this.aCtN = v != null ? ('' + v) : v
  }

  get departureCityGeoId () {
    return this.dCtGeo
  }

  set departureCityGeoId (v) {
    if (Number.isNaN(+v)) {
      throw new Error('Invalid departureCityGeoId')
    }

    this.dCtGeo = +v
  }

  get arrivalCityGeoId () {
    return this.aCtGeo
  }

  set arrivalCityGeoId (v) {
    if (Number.isNaN(+v)) {
      throw new Error('Invalid arrivalCityGeoId')
    }

    this.aCtGeo = +v
  }

  get departureBusStopId () {
    return this.dBStop
  }

  set departureBusStopId (v) {
    this.dBStop = v != null ? ('' + v) : v
  }

  get arrivalBusStopId () {
    return this.aBStop
  }

  set arrivalBusStopId (v) {
    this.aBStop = v != null ? ('' + v) : v
  }

  get _id () {
    return {
      a: this.a,
      dBStop: this.dBStop,
      aBStop: this.aBStop,
      dd: this.dd,
      rd: this.rd,
      c: this.c,
      jt: this.jt,
      ft: this.ft,
      se: this.se,
      fc: this.fc
    }
  }

  get mongoDoc () {
    return {
      _id: this._id,
      p: this.p,
      ca: this.ca,
      ua: this.ua,
      si: this.si,
      so: this.so,
      dCtN: this.dCtN,
      aCtN: this.aCtN,
      dCtGeo: this.dCtGeo,
      aCtGeo: this.aCtGeo
    }
  }

  get mongoUpdateDoc () {
    return {
      // $set: this.mongoDoc,
      $set: { p: this.p }, // totalPrice
      $setOnInsert: {
        ca: this.ca, // createdAt
        ua: this.ua, // createdAt
        si: this.si, // sourceId
        so: this.so, // isSoldOut
        dCtN: this.dCtN, // departureCityName
        aCtN: this.aCtN, // arrivalCityName
        dCtGeo: this.dCtGeo, // departureCityGeoId
        aCtGeo: this.aCtGeo // arrivalCityGeoId
      }
    }
  }
}

module.exports = { ShortFareBus }
