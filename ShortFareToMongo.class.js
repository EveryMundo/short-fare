const { ShortFare } = require('./ShortFare.class.js')

class ShortFareToMongo extends ShortFare {
  constructor (doc, emptyValue) {
    super(emptyValue)

    ShortFare.fromObject(doc, this)

    // Object.defineProperty(this, 'doc', { value: doc })
  }
}

module.exports = { ShortFareToMongo }
