
const { ShortFare } = require('./ShortFare.class')

class ShortFareFromMongo extends ShortFare {
  constructor (mongoDoc) {
    super()

    const { _id: { a, o, d, dd, rd, c, jt, ft, se, fc }, p, ca } = mongoDoc

    this.a = a
    this.o = o
    this.d = d
    this.dd = dd
    this.rd = rd
    this.c = c
    this.jt = jt
    this.ft = ft
    this.se = se
    this.fc = fc
    this.p = p
    this.ca = ca

    Object.defineProperty(this, 'mongoDoc', { value: mongoDoc })
  }
}

module.exports = { ShortFareFromMongo }
