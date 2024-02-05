'use strict'
/* eslint-disable no-unused-expressions */
const { describe, it } = require('mocha')
const { expect } = require('chai')
const { ShortFare } = require('../ShortFare.class')
const { ShortFareToMongo } = require('../ShortFareToMongo.class')

function createDefaultShortFare () {
  const shortFare = new ShortFareToMongo({
    airlineIataCode: 'AA',
    departureAirportIataCode: 'LGA',
    arrivalAirportIataCode: 'JFK',
    outboundDate: '2023-01-01',
    inboundDate: '2023-01-02',
    currencyCode: 'USD',
    journeyType: 'RT',
    fareClass: 'E',
    fareClassInput: 'Eco',
    brandedFareClass: 'Premier',
    flightType: 'D',
    siteEdition: 'en-US',
    totalPrice: 100,
    sourceId: '1234567890',
    fareId: 'test-fare-id',
    isSoldOut: false,
    unit: 'M',
    amount: 11223
  })

  return shortFare
}

describe('ShortFareToMongo', () => {
  it('should be an instance of ShortFare', () => {
    const shortFare = createDefaultShortFare()

    expect(shortFare).to.be.an.instanceOf(ShortFare)
  })

  it('should have the same properties as ShortFare', () => {
    const shortFare = createDefaultShortFare()

    expect(shortFare).to.have.property('a', 'AA')
    expect(shortFare).to.have.property('o', 'LGA')
    expect(shortFare).to.have.property('d', 'JFK')
    expect(shortFare).to.have.property('dd', '2023-01-01')
    expect(shortFare).to.have.property('rd', '2023-01-02')
    expect(shortFare).to.have.property('c', 'USD')
    expect(shortFare).to.have.property('jt', 'RT')
    expect(shortFare).to.have.property('fc', 'E') // for Economy
    expect(shortFare).to.have.property('fi', 'Eco')
    expect(shortFare).to.have.property('btc', 'Premier')
    expect(shortFare).to.have.property('ft', 'D')// for Domestic
    expect(shortFare).to.have.property('se', 'en-US')
    expect(shortFare).to.have.property('u', 'M')
    expect(shortFare).to.have.property('am', 11223)
    expect(shortFare).to.have.property('p', 100)
    expect(shortFare).to.have.property('ca', shortFare.createdAt)
    expect(shortFare).to.have.property('si', shortFare.sourceId)
    expect(shortFare).to.have.property('fid', shortFare.fareId)
    expect(shortFare).to.have.property('so', shortFare.isSoldOut)
  })
})
