
const siteEditionRegExp = /^[a-z]{2}-[A-Z]{2}$/
const airlineIataCodeRegExp = /^[A-Z0-9]{2,3}$/
const _3upperCasedLettersRegExp = /^[A-Z]{3}$/
const dateRegExp = /^\d{4}-\d{2}-\d{2}/

class ShortFare {
  static formatSiteEdition (siteEdition) {
    const [, lang, countryCode] = ('' + siteEdition).match(/^([A-Za-z]{2})[^A-Za-z]?([A-Za-z]{2})?$/) || []

    if (!lang) return `INVALID_SITE_EDITION [${siteEdition}]`

    return countryCode ? `${lang.toLowerCase()}_${countryCode.toUpperCase()}` : lang.toLowerCase()
  }

  constructor () {
    this.a = undefined // airlineIataCode
    this.o = undefined // departureAirportIataCode
    this.d = undefined // arrivalAirportIataCode
    this.dd = undefined // outboundDate
    this.rd = undefined // inboundDate
    this.c = undefined // currencyCode
    this.jt = undefined // journeyType
    this.fc = undefined // fareClass
    this.ft = undefined // flightType
    this.se = undefined // siteEdition
    this.p = undefined // totalPrice
    this.ca = undefined // createdAt
    this.ua = undefined // createdAt
    this.si = undefined // sourceId
    this.so = false // isSoldOut
  }

  get airlineIataCode () {
    return this.a
  }

  set airlineIataCode (v) {
    if (!airlineIataCodeRegExp.test(v)) {
      throw new Error(`airlineIataCode [${v}] does not match ${airlineIataCodeRegExp}`)
    }

    this.a = v
  }

  get departureAirportIataCode () {
    return this.o
  }

  set departureAirportIataCode (v) {
    if (!_3upperCasedLettersRegExp.test(v)) {
      throw new Error(`departureAirportIataCode [${v}] does not match ${_3upperCasedLettersRegExp}`)
    }

    this.o = v
  }

  get arrivalAirportIataCode () {
    return this.d
  }

  set arrivalAirportIataCode (v) {
    if (!_3upperCasedLettersRegExp.test(v)) {
      throw new Error(`arrivalAirportIataCode [${v}] does not match ${_3upperCasedLettersRegExp}`)
    }

    this.d = v
  }

  get outboundDate () {
    return this.dd
  }

  set outboundDate (_v) {
    const v = _v instanceof Date ? _v.toJSON() : _v

    if (!dateRegExp.test(v)) {
      throw new Error(`outboundDate [${v}] is not valid`)
    }

    this.dd = v
  }

  get inboundDate () {
    return this.rd
  }

  set inboundDate (_v) {
    const v = _v instanceof Date ? _v.toJSON() : _v
    if (v !== undefined && !dateRegExp.test(v)) {
      throw new Error(`outboundDate [${v}] is not valid`)
    }

    this.rd = v
  }

  get currencyCode () {
    return this.c
  }

  set currencyCode (v) {
    if (!_3upperCasedLettersRegExp.test(v)) {
      throw new Error(`currencyCode [${v}] does not match ${_3upperCasedLettersRegExp}`)
    }

    this.c = v
  }

  get journeyType () {
    return this.jt
  }

  set journeyType (v) {
    if (v !== 'RT' && v !== 'OW') {
      throw new Error(`journeyType [${v}] does not equal [RT] or [OW]`)
    }

    this.jt = v
  }

  get fareClass () {
    return this.fc
  }

  set fareClass (v) {
    if (v !== 'E' && v !== 'B' && v !== 'F') {
      throw new Error(`fareClass [${v}] does not equal [E]CONOMY or [B]USINESS or [F]IRST`)
    }

    this.fc = v
  }

  get flightType () {
    return this.ft
  }

  set flightType (v) {
    if (v !== 'I' && v !== 'D') {
      throw new Error(`flightType [${v}] does not equal [I] or [D]`)
    }

    this.ft = v
  }

  get siteEdition () {
    return this.se
  }

  set siteEdition (v) {
    if (v === undefined) return

    if (!siteEditionRegExp.test(v)) {
      throw new Error(`siteEdition [${v}] does not match ${siteEditionRegExp}`)
    }

    this.se = v
  }

  get totalPrice () {
    return this.p
  }

  set totalPrice (v) {
    this.p = v
  }

  get createdAt () {
    return this.ca
  }

  set createdAt (v) {
    this.ca = v
  }

  get updatedAt () {
    return this.ua
  }

  set updatedAt (v) {
    this.ua = v
  }

  get sourceId () {
    return this.si
  }

  set sourceId (v) {
    this.si = v
  }

  get isSoldOut () {
    return this.so
  }

  set isSoldOut (v) {
    this.so = Boolean(v)
  }

  get _id () {
    return {
      a: this.a,
      o: this.o,
      d: this.d,
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
      so: this.so
    }
  }

  get mongoUpdateDoc () {
    return {
      // $set: this.mongoDoc,
      $set: { p: this.p },
      $setOnInsert: {
        ca: this.ca,
        ua: this.ua,
        si: this.si,
        so: this.so
      }
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
