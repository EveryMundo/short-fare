const { ShortFare } = require('./ShortFare.class')

class ShortFareFromMongo extends ShortFare {
  constructor (mongoDoc) {
    super()

    // const { _id: { a, o, d, dd, rd, c, jt, ft, se, fc }, p, ca, ua, si, so } = mongoDoc
    const { _id, p, ca, ua, si, so } = mongoDoc

    this.a = _id.a
    this.o = _id.o
    this.d = _id.d
    this.dd = _id.dd
    this.rd = _id.rd
    this.c = _id.c
    this.jt = _id.jt
    this.ft = _id.ft
    this.se = _id.se
    this.fc = _id.fc
    this.fi = _id.fi
    this.p = p
    this.ca = ca
    this.ua = ua
    this.si = si
    this.so = so

    Object.defineProperty(this, 'mongoDoc', { value: mongoDoc })
  }
}

module.exports = { ShortFareFromMongo }
