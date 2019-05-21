const { ShortFare } = require('./ShortFare.class')
const { ShortFareFromJson } = require('./ShortFareFromJson.class')
const { ShortFareFromMongo } = require('./ShortFareFromMongo.class')
const { ShortFareToMongo } = require('./ShortFareToMongo.class')

module.exports = {
  ShortFare,
  ShortFareFromJson,
  ShortFareFromMongo,
  ShortFareToMongo
}
