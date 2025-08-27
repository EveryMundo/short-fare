'use strict'
const siteEditionRegExp = /^[a-z]{2}-[A-Z]{2}$/
const airlineIataCodeRegExp = /^[A-Z0-9]{2,3}$/
const _3upperCasedLettersRegExp = /^[A-Z]{3}$/
const dateRegExp = /^\d{4}-\d{2}-\d{2}/

class ShortFare {
  a = undefined // airlineIataCode
  o = undefined // departureAirportIataCode
  d = undefined // arrivalAirportIataCode
  dd = undefined // outboundDate
  rd = undefined // inboundDate
  c = undefined // currencyCode
  jt = undefined // journeyType
  fc = undefined // fareClass
  fi = undefined // fareClassInput
  btc = undefined // brandedFareClass
  ft = undefined // flightType
  se = undefined // siteEdition
  u = undefined // unit
  am = undefined // amount, just for miles
  p = undefined // totalPrice
  ca = undefined // createdAt
  ua = undefined // createdAt
  si = undefined // sourceId
  so = false // isSoldOut
  fid = undefined // fareId
  osc = undefined // outboundStopsCount
  isc = undefined // inboundStopsCount

  constructor (emptyValue) {
    if (emptyValue !== undefined) {
      this.a = emptyValue // airlineIataCode
      this.o = emptyValue // departureAirportIataCode
      this.d = emptyValue // arrivalAirportIataCode
      this.dd = emptyValue // outboundDate
      this.rd = emptyValue // inboundDate
      this.c = emptyValue // currencyCode
      this.jt = emptyValue // journeyType
      this.fc = emptyValue // fareClass
      this.fi = emptyValue // fareClassInput
      this.btc = emptyValue // brandedFareClass
      this.ft = emptyValue // flightType
      this.se = emptyValue // siteEdition
      this.u = emptyValue // unit
      this.am = emptyValue // amount, just for miles
      this.p = emptyValue // totalPrice
      this.ca = emptyValue // createdAt
      this.ua = emptyValue // createdAt
      this.si = emptyValue // sourceId
      this.fid = emptyValue // fareId
      this.osc = emptyValue // outboundStopsCount
      this.isc = emptyValue // inboundStopsCount
    }
  }

  static formatSiteEdition (siteEdition) {
    const [, lang, countryCode] = ('' + siteEdition).match(/^([A-Za-z]{2})[^A-Za-z]?([A-Za-z]{2})?$/) || []

    if (!lang) return `INVALID_SITE_EDITION [${siteEdition}]`

    return countryCode ? `${lang.toLowerCase()}_${countryCode.toUpperCase()}` : lang.toLowerCase()
  }

  static fromMongoDoc (mongoDoc, _instance) {
    const sf = _instance instanceof this
      ? _instance
      : new this()

    const { _id, p, am, u, ca, ua, si, so, fid } = mongoDoc

    sf.a = _id.a
    sf.o = _id.o
    sf.d = _id.d
    sf.dd = _id.dd
    sf.rd = _id.rd
    sf.c = _id.c
    sf.jt = _id.jt
    sf.ft = _id.ft
    sf.se = _id.se
    sf.fc = _id.fc
    sf.fi = _id.fi
    sf.btc = _id.btc
    sf.osc = _id.osc
    sf.isc = _id.isc
    sf.p = p
    sf.u = u
    sf.am = am
    sf.ca = ca
    sf.ua = ua
    sf.si = si
    sf.so = so
    sf.fid = fid

    return sf
  }

  static fromObject (doc, _instance) {
    const sf = _instance instanceof this
      ? _instance
      : new this()

    sf.airlineIataCode = doc.airlineIataCode
    sf.departureAirportIataCode = doc.departureAirportIataCode
    sf.arrivalAirportIataCode = doc.arrivalAirportIataCode
    sf.outboundDate = doc.outboundDate
    sf.inboundDate = doc.inboundDate
    sf.currencyCode = doc.currencyCode
    sf.journeyType = doc.journeyType
    sf.fareClass = doc.fareClass
    sf.fareClassInput = doc.fareClassInput
    sf.brandedFareClass = doc.brandedFareClass
    sf.flightType = doc.flightType
    sf.siteEdition = doc.siteEdition
    sf.unit = doc.unit
    sf.amount = doc.amount
    sf.totalPrice = doc.totalPrice
    sf.createdAt = doc.createdAt ?? new Date()
    sf.updatedAt = doc.updatedAt ?? new Date()
    sf.sourceId = doc.sourceId
    sf.isSoldOut = doc.isSoldOut
    sf.fareId = doc.fareId
    sf.outboundStopsCount = doc.outboundStopsCount
    sf.inboundStopsCount = doc.inboundStopsCount

    return sf
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
    if (v !== 'E' && v !== 'B' && v !== 'F' && v !== 'PE') {
      throw new Error(`fareClass [${v}] does not equal [E]CONOMY or [B]USINESS or [F]IRST or [PE]PREMIUM ECONOMY`)
    }

    this.fc = v
  }

  get fareClassInput () {
    return this.fi
  }

  set fareClassInput (v) {
    this.fi = v
  }

  get brandedFareClass () {
    return this.btc
  }

  set brandedFareClass (v) {
    this.btc = v
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

  get unit () {
    return this.u
  }

  set unit (v) {
    if (v !== undefined && v !== 'M' && v !== 'P') {
      throw new Error(`unit [${v}] does not equal [M]iles or [P]oints`)
    }

    this.u = v
  }

  get amount () {
    return this.am
  }

  set amount (v) {
    if (v !== undefined && typeof v !== 'number') {
      throw new Error(`amount [${v}] is not a number`)
    }

    this.am = v
  }

  get totalPrice () {
    return this.p
  }

  set totalPrice (v) {
    if (v !== undefined && typeof v !== 'number') throw new Error(`totalPrice [${v}] is not a number`)

    this.p = v
  }

  get outboundStopsCount () {
    return this.osc
  }

  set outboundStopsCount (v) {
    if (v !== undefined && typeof v !== 'number') throw new Error(`outboundStopsCount [${v}] is not a number`)

    this.osc = v
  }

  get inboundStopsCount () {
    return this.isc
  }

  set inboundStopsCount (v) {
    if (v !== undefined && typeof v !== 'number') throw new Error(`inboundStopsCount [${v}] is not a number`)

    this.isc = v
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

  get fareId () {
    return this.fid
  }

  set fareId (v) {
    this.fid = v
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
      fc: this.fc,
      fi: this.fi,
      btc: this.btc,
      osc: this.osc,
      isc: this.isc
    }
  }

  get mongoDoc () {
    return {
      _id: this._id,
      u: this.u,
      am: this.am,
      p: this.p,
      ca: this.ca,
      ua: this.ua,
      si: this.si,
      so: this.so,
      fid: this.fid
    }
  }

  get mongoUpdateDoc () {
    return {
      // $set: this.mongoDoc,
      $set: { p: this.p, am: this.am },
      $setOnInsert: {
        ca: this.ca,
        ua: this.ua,
        si: this.si,
        so: this.so,
        u: this.u,
        fid: this.fid
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
