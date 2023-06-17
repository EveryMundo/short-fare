'use strict'
/* eslint-disable no-unused-expressions */
const { describe, it } = require('mocha')
const { expect } = require('chai')
const { ShortFare } = require('../ShortFare.class')
const { ShortFareFromMongo } = require('../ShortFareFromMongo.class')

function createDefaultShortFare () {
  const shortFare = new ShortFareFromMongo({
    _id: {
      a: 'AA',
      o: 'LGA',
      d: 'JFK',
      dd: '2023-01-01',
      rd: '2023-01-02',
      c: 'USD',
      jt: 'RT',
      ft: 'D',
      se: 'en-US',
      fc: 'E',
      fi: 'Eco'
    },
    p: 100,
    ca: '2021-01-01T00:00:00.000Z',
    ua: '2021-01-01T00:00:00.000Z',
    si: '1234567890',
    so: false
  })

  return shortFare
}

describe('ShortFareFromMongo', () => {
  it('should be an instance of ShortFare', () => {
    const shortFare = createDefaultShortFare()

    expect(shortFare).to.be.an.instanceOf(ShortFare)
  })

  it('should have the same properties as ShortFare', () => {
    const shortFare = createDefaultShortFare()

    expect(shortFare).to.have.property('airlineIataCode', 'AA')
    expect(shortFare).to.have.property('departureAirportIataCode', 'LGA')
    expect(shortFare).to.have.property('arrivalAirportIataCode', 'JFK')
    expect(shortFare).to.have.property('outboundDate', '2023-01-01')
    expect(shortFare).to.have.property('inboundDate', '2023-01-02')
    expect(shortFare).to.have.property('currencyCode', 'USD')
    expect(shortFare).to.have.property('journeyType', 'RT')
    expect(shortFare).to.have.property('fareClass', 'E') // for Economy
    expect(shortFare).to.have.property('fareClassInput', 'Eco')
    expect(shortFare).to.have.property('flightType', 'D')// for Domestic
    expect(shortFare).to.have.property('siteEdition', 'en-US')
  })
})
