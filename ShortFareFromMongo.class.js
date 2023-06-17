const { ShortFare } = require('./ShortFare.class')

class ShortFareFromMongo extends ShortFare {
  constructor (mongoDoc) {
    super()

    ShortFare.fromMongoDoc(mongoDoc, this)

    Object.defineProperty(this, 'mongoDoc', { value: mongoDoc })
  }
}

module.exports = { ShortFareFromMongo }
