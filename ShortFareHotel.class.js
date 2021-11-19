
const siteEditionRegExp = /^[a-z]{2}-[A-Z]{2}$/
const tenantCodeRegExp = /^[A-Z0-9]{2,4}$/
const _3to5upperCasedLettersRegExp = /^[A-Z]{3,5}$/
const dateRegExp = /^\d{4}-\d{2}-\d{2}/

class ShortFareHotel {
  static formatSiteEdition (siteEdition) {
    const [, lang, countryCode] = ('' + siteEdition).match(/^([A-Za-z]{2})[^A-Za-z]?([A-Za-z]{2})?$/) || []

    if (!lang) return `INVALID_SITE_EDITION [${siteEdition}]`

    return countryCode ? `${lang.toLowerCase()}_${countryCode.toUpperCase()}` : lang.toLowerCase()
  }

  constructor () {
    this.tc = undefined // tenantCode
    this.hc = undefined // hotelCode
    this.rc = undefined // rateCode
    this.rt = undefined // roomType
    this.cid = undefined // checkInDate
    this.cod = undefined // checkOutDate
    this.n = undefined // nights
    this.g = undefined // guests
    this.c = undefined // currencyCode
    this.p = undefined // totalPrice
    this.ca = undefined // createdAt
    this.ua = undefined // updatedAt
    this.si = undefined // sourceId
  }

  get tenantCode () {
    return this.tc
  }

  set tenantCode (v) {
    if (!tenantCodeRegExp.test(v)) {
      throw new Error(`tenantCode [${v}] does not match ${tenantCodeRegExp}`)
    }

    this.tc = v
  }

  get hotelCode () {
    return this.hc
  }

  set hotelCode (v) {
    if (!_3to5upperCasedLettersRegExp.test(v)) {
      throw new Error(`hotelCode [${v}] does not match ${_3to5upperCasedLettersRegExp}`)
    }

    this.hc = v
  }

  get rateCode () {
    return this.rc
  }

  set rateCode (v) {
    if (!_3to5upperCasedLettersRegExp.test(v)) {
      throw new Error(`rateCode [${v}] does not match ${_3to5upperCasedLettersRegExp}`)
    }

    this.rc = v
  }
  
  get roomType () {
    return this.rt
  }

  set roomType (v) {
//     if (!_3to5upperCasedLettersRegExp.test(v)) {
//       throw new Error(`rateCode [${v}] does not match ${_3to5upperCasedLettersRegExp}`)
//     }

    this.rt = v
  }

  get checkInDate () {
    return this.cid
  }

  set checkInDate (_v) {
    const v = _v instanceof Date ? _v.toJSON() : _v

    if (!dateRegExp.test(v)) {
      throw new Error(`checkInDate [${v}] is not valid`)
    }

    this.cid = v
  }

  get checkOutDate () {
    return this.cod
  }

  set checkOutDate (_v) {
    const v = _v instanceof Date ? _v.toJSON() : _v
    if (v !== undefined && !dateRegExp.test(v)) {
      throw new Error(`checkInDate [${v}] is not valid`)
    }

    this.cod = v
  }

  get currencyCode () {
    return this.c
  }

  set currencyCode (v) {
    if (!_3to5upperCasedLettersRegExp.test(v)) {
      throw new Error(`currencyCode [${v}] does not match ${_3to5upperCasedLettersRegExp}`)
    }

    this.c = v
  }

  get nights () {
    return this.n
  }

  set nights (v) {
    if (+v !== (v | 0)) {
      throw new Error(`nights [${v}] is not a valid Integer`)
    }

    this.n = (v | 0)
  }

  get guests () {
    return this.g
  }

  set guests (v) {
    if (+v !== (v | 0)) {
      throw new Error(`guests [${v}] is not a valid Integer`)
    }

    this.g = v
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
      tc: this.tc,
      hc: this.hc,
      rc: this.rc,
      cid: this.cid,
      cod: this.cod,
      c: this.c,
      n: this.n,
      ft: this.ft,
      se: this.se,
      g: this.g
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

module.exports = { ShortFareHotel }
