const { ShortFare } = require('./ShortFare.class')

class ShortFareToMongo extends ShortFare {
  constructor (doc) {
    super()

    ShortFare.fromObject(doc, this)

    Object.defineProperty(this, 'doc', { value: doc })
  }
}

module.exports = { ShortFareToMongo }
