'use strict'
/* eslint-disable no-unused-expressions */
const { describe, it, describe: context } = require('mocha')
const { expect } = require('chai')
const { ShortFare } = require('../ShortFare.class.js')

function createDefaultShortFare () {
  const shortFare = new ShortFare()

  shortFare.airlineIataCode = 'AA'
  shortFare.departureAirportIataCode = 'LGA'
  shortFare.arrivalAirportIataCode = 'JFK'
  shortFare.outboundDate = '2023-01-01'
  shortFare.inboundDate = '2023-01-02'
  shortFare.currencyCode = 'USD'
  shortFare.journeyType = 'RT'
  shortFare.fareClass = 'E' // for Economy
  shortFare.fareClassInput = 'Eco'
  shortFare.brandedFareClass = 'Premier'
  shortFare.flightType = 'D' // for Domestic
  shortFare.siteEdition = 'en-US'

  return shortFare
}

describe('ShortFare', () => {
  describe('formatSiteEdition', () => {
    it('should return the formatted site edition when given a valid site edition with lang/country', () => {
      const siteEdition = 'en-us'
      const expected = 'en_US'
      const result = ShortFare.formatSiteEdition(siteEdition)
      expect(result).to.equal(expected)
    })

    it('should return the formatted site edition when given a valid site edition with only lang', () => {
      const siteEdition = 'EN'
      const expected = 'en'
      const result = ShortFare.formatSiteEdition(siteEdition)
      expect(result).to.equal(expected)
    })

    it('should return "INVALID_SITE_EDITION" when given an invalid site edition', () => {
      const siteEdition = 'invalid'
      const expected = 'INVALID_SITE_EDITION [invalid]'
      const result = ShortFare.formatSiteEdition(siteEdition)
      expect(result).to.equal(expected)
    })
  })

  describe('constructor', () => {
    describe('when no emptyValue is given', () => {
      it('should create a new ShortFare object with the correct properties set as undefined', () => {
        const shortFare = new ShortFare()
        expect(shortFare.a).to.be.undefined
        expect(shortFare.o).to.be.undefined
        expect(shortFare.d).to.be.undefined
        expect(shortFare.dd).to.be.undefined
        expect(shortFare.rd).to.be.undefined
        expect(shortFare.c).to.be.undefined
        expect(shortFare.jt).to.be.undefined
        expect(shortFare.fc).to.be.undefined
        expect(shortFare.fi).to.be.undefined
        expect(shortFare.btc).to.be.undefined
        expect(shortFare.ft).to.be.undefined
        expect(shortFare.se).to.be.undefined
        expect(shortFare.u).to.be.undefined
        expect(shortFare.am).to.be.undefined
        expect(shortFare.p).to.be.undefined
        expect(shortFare.ca).to.be.undefined
        expect(shortFare.ua).to.be.undefined
        expect(shortFare.si).to.be.undefined
        expect(shortFare.so).to.be.false
      })
    })

    describe('when emptyValue is set to null', () => {
      it('should create a new ShortFare object with the correct properties set as undefined', () => {
        const shortFare = new ShortFare(null)
        expect(shortFare.a).to.be.null
        expect(shortFare.o).to.be.null
        expect(shortFare.d).to.be.null
        expect(shortFare.dd).to.be.null
        expect(shortFare.rd).to.be.null
        expect(shortFare.c).to.be.null
        expect(shortFare.jt).to.be.null
        expect(shortFare.fc).to.be.null
        expect(shortFare.fi).to.be.null
        expect(shortFare.btc).to.be.null
        expect(shortFare.ft).to.be.null
        expect(shortFare.se).to.be.null
        expect(shortFare.u).to.be.null
        expect(shortFare.am).to.be.null
        expect(shortFare.p).to.be.null
        expect(shortFare.ca).to.be.null
        expect(shortFare.ua).to.be.null
        expect(shortFare.si).to.be.null
        expect(shortFare.so).to.be.false
      })
    })
  })

  describe('#static fromMongoDoc', () => {
    context('when given a valid MongoDB document', () => {
      it('should return a new ShortFare object with the correct properties set', () => {
        const mongoDoc = {
          _id: {
            a: 'AA',
            o: 'LGA',
            d: 'JFK',
            dd: '2023-01-01',
            rd: '2023-01-02',
            c: 'USD',
            jt: 'RT',
            fc: 'E',
            fi: 'Eco',
            // btc: 'Premier',
            ft: 'D',
            se: 'en-US'
          },
          ca: new Date('2023-06-20T16:40:57.485Z'),
          p: 1564.62,
          si: '1234567890',
          so: false,
          ua: null
        }

        const shortFare = ShortFare.fromMongoDoc(mongoDoc)

        expect(shortFare.a).to.equal(mongoDoc._id.a)
        expect(shortFare.o).to.equal(mongoDoc._id.o)
        expect(shortFare.d).to.equal(mongoDoc._id.d)
        expect(shortFare.dd).to.equal(mongoDoc._id.dd)
        expect(shortFare.rd).to.equal(mongoDoc._id.rd)
        expect(shortFare.c).to.equal(mongoDoc._id.c)
        expect(shortFare.jt).to.equal(mongoDoc._id.jt)
        expect(shortFare.fc).to.equal(mongoDoc._id.fc)
        expect(shortFare.fi).to.equal(mongoDoc._id.fi)
        expect(shortFare.btc).to.equal(mongoDoc._id.btc)
        expect(shortFare.ft).to.equal(mongoDoc._id.ft)
        expect(shortFare.se).to.equal(mongoDoc._id.se)
        expect(shortFare.u).to.be.undefined
        expect(shortFare.am).to.be.undefined
        expect(shortFare.p).to.equal(mongoDoc.p)
        expect(shortFare.ca).to.equal(mongoDoc.ca)
        expect(shortFare.ua).to.be.null
        expect(shortFare.si).to.equal(mongoDoc.si)
        expect(shortFare.so).to.equal(mongoDoc.so)
      })
    })
  })

  describe('#static fromObject', () => {
    context('when given a valid object', () => {
      it('should return a new ShortFare object with the correct properties set', () => {
        const obj = {
          airlineIataCode: 'AA',
          departureAirportIataCode: 'LGA',
          arrivalAirportIataCode: 'JFK',
          outboundDate: '2023-01-01',
          inboundDate: '2023-01-02',
          currencyCode: 'USD',
          journeyType: 'RT',
          fareClass: 'E',
          fareClassInput: 'Eco',
          brandedFareClasst: 'Premier',
          flightType: 'D',
          siteEdition: 'en-US',
          unit: 'M',
          amount: 11223,
          totalPrice: 100,
          createdAt: new Date('2023-06-20T16:40:57.485Z'),
          updatedAt: new Date(),
          sourceId: '1234567890',
          isSoldOut: false
        }

        const shortFare = ShortFare.fromObject(obj)

        expect(shortFare.a).to.equal(obj.airlineIataCode)
        expect(shortFare.o).to.equal(obj.departureAirportIataCode)
        expect(shortFare.d).to.equal(obj.arrivalAirportIataCode)
        expect(shortFare.dd).to.equal(obj.outboundDate)
        expect(shortFare.rd).to.equal(obj.inboundDate)
        expect(shortFare.c).to.equal(obj.currencyCode)
        expect(shortFare.jt).to.equal(obj.journeyType)
        expect(shortFare.fc).to.equal(obj.fareClass)
        expect(shortFare.fi).to.equal(obj.fareClassInput)
        expect(shortFare.btc).to.equal(obj.brandedFareClass)
        expect(shortFare.ft).to.equal(obj.flightType)
        expect(shortFare.se).to.equal(obj.siteEdition)
        expect(shortFare.u).to.equal(obj.unit)
        expect(shortFare.am).to.equal(obj.amount)
        expect(shortFare.p).to.equal(obj.totalPrice)
        expect(shortFare.ca).to.equal(obj.createdAt)
        expect(shortFare.ua).to.equal(obj.updatedAt)
        expect(shortFare.si).to.equal(obj.sourceId)
        expect(shortFare.so).to.equal(obj.isSoldOut)
      })
    })
  })

  describe('airlineIataCode', () => {
    context('when given a valid airline IATA code', () => {
      it('should set the airline IATA code', () => {
        const shortFare = new ShortFare()
        const airlineIataCode = 'AA'
        shortFare.airlineIataCode = airlineIataCode
        expect(shortFare.a).to.equal(shortFare.airlineIataCode)
      })
    })

    context('when given an invalid airline IATA code', () => {
      it('should throw an error', () => {
        const shortFare = new ShortFare()
        const airlineIataCode = 'invalid'
        expect(() => { shortFare.airlineIataCode = airlineIataCode }).to.throw(Error)
      })
    })
  })

  describe('departureAirportIataCode', () => {
    context('when given a valid departure airport IATA code', () => {
      it('should set the departure airport IATA code', () => {
        const shortFare = new ShortFare()
        const departureAirportIataCode = 'AAA'
        shortFare.departureAirportIataCode = departureAirportIataCode
        expect(shortFare.o).to.equal(shortFare.departureAirportIataCode)
      })
    })

    context('when given an invalid departure airport IATA code', () => {
      it('should throw an error', () => {
        const shortFare = new ShortFare()
        const departureAirportIataCode = 'invalid'
        expect(() => { shortFare.departureAirportIataCode = departureAirportIataCode }).to.throw(Error)
      })
    })
  })

  describe('arrivalAirportIataCode', () => {
    context('when given a valid destination airport IATA code', () => {
      it('should set the destination airport IATA code', () => {
        const shortFare = new ShortFare()
        const input = 'AAA'
        shortFare.arrivalAirportIataCode = input

        expect(shortFare.d).to.equal(input)
        expect(shortFare.d).to.equal(shortFare.arrivalAirportIataCode)
      })
    })

    context('when given an invalid destination airport IATA code', () => {
      it('should throw an error', () => {
        const shortFare = new ShortFare()
        const arrivalAirportIataCode = 'invalid'
        expect(() => {
          shortFare.arrivalAirportIataCode = arrivalAirportIataCode
        }).to.throw(Error)
      })
    })
  })

  describe('outboundDate', () => {
    context('when given a valid outbound date', () => {
      it('should set the outbound date', () => {
        const shortFare = new ShortFare()
        const outboundDate = new Date()
        shortFare.outboundDate = outboundDate
        expect(shortFare.dd).to.equal(shortFare.outboundDate)
      })
    })

    context('when given an invalid outbound date', () => {
      it('should throw an error', () => {
        const shortFare = new ShortFare()
        const outboundDate = 'invalid'
        expect(() => { shortFare.outboundDate = outboundDate }).to.throw(Error)
      })
    })
  })

  describe('inboundDate', () => {
    context('when given a valid inbound date', () => {
      it('should set the inbound date', () => {
        const shortFare = new ShortFare()
        const inboundDate = new Date()
        shortFare.inboundDate = inboundDate
        expect(shortFare.rd).to.equal(shortFare.inboundDate)
      })
    })

    context('when given an invalid inbound date', () => {
      it('should throw an error', () => {
        const shortFare = new ShortFare()
        const inboundDate = 'invalid'
        expect(() => { shortFare.inboundDate = inboundDate }).to.throw(Error)
      })
    })
  })

  describe('currencyCode', () => {
    context('when given a valid currency code', () => {
      it('should set the currency code', () => {
        const shortFare = new ShortFare()
        const currencyCode = 'USD'
        shortFare.currencyCode = currencyCode
        expect(shortFare.c).to.equal(shortFare.currencyCode)
      })
    })

    context('when given an invalid currency code', () => {
      it('should throw an error', () => {
        const shortFare = new ShortFare()
        const currencyCode = 'invalid'
        expect(() => { shortFare.currencyCode = currencyCode }).to.throw(Error)
      })
    })
  })

  describe('journeyType', () => {
    context('when given a valid journey type', () => {
      it('should set the journey type', () => {
        const shortFare = new ShortFare()
        const journeyType = 'OW'
        shortFare.journeyType = journeyType
        expect(shortFare.jt).to.equal(shortFare.journeyType)
      })
    })

    context('when given an invalid journey type', () => {
      it('should throw an error', () => {
        const shortFare = new ShortFare()
        const journeyType = 'invalid'
        expect(() => { shortFare.journeyType = journeyType }).to.throw(Error)
      })
    })
  })

  describe('fareClass', () => {
    it('should set the fareClass property', () => {
      const shortFare = new ShortFare()
      shortFare.fareClass = 'E'

      expect(shortFare.fc).to.equal('E')
      expect(shortFare.fareClass).to.equal('E')
    })

    it('should throw an error for invalid fareClass', () => {
      const shortFare = new ShortFare()
      expect(() => {
        shortFare.fareClass = 'invalid'
      }).to.throw(Error, 'fareClass [invalid] does not equal [E]CONOMY or [B]USINESS or [F]IRST or [PE]PREMIUM ECONOMY')
    })
  })

  describe('fareClassInput', () => {
    it('should set the fareClassInput property', () => {
      const shortFare = new ShortFare()
      shortFare.fareClassInput = 'Eco'

      expect(shortFare.fi).to.equal('Eco')
      expect(shortFare.fareClassInput).to.equal('Eco')
    })
  })

  describe('brandedFareClass', () => {
    it('should set the brandedFareClass property', () => {
      const shortFare = new ShortFare()
      shortFare.brandedFareClass = 'Premier'

      expect(shortFare.btc).to.equal('Premier')
      expect(shortFare.brandedFareClass).to.equal('Premier')
    })
  })

  describe('flightType', () => {
    it('should set the flightType property with D', () => {
      const shortFare = new ShortFare()
      shortFare.flightType = 'D'

      expect(shortFare.ft).to.equal('D')
      expect(shortFare.flightType).to.equal('D')
    })

    it('should set the flightType property with I', () => {
      const shortFare = new ShortFare()
      shortFare.flightType = 'I'

      expect(shortFare.ft).to.equal('I')
      expect(shortFare.flightType).to.equal('I')
    })

    it('should throw an error for invalid flightType', () => {
      const shortFare = new ShortFare()
      expect(() => {
        shortFare.flightType = 'invalid'
      }).to.throw(Error, 'flightType [invalid] does not equal [I] or [D]')
    })
  })

  describe('siteEdition', () => {
    it('should set the siteEdition property', () => {
      const shortFare = new ShortFare()
      shortFare.siteEdition = 'en-US'

      expect(shortFare.siteEdition).to.equal('en-US')
    })

    it('should throw an error for invalid siteEdition', () => {
      const shortFare = new ShortFare()
      expect(() => {
        shortFare.siteEdition = 'invalid'
      }).to.throw(Error, 'siteEdition [invalid] does not match /^[a-z]{2}-[A-Z]{2}$/')
    })

    it('should not set the siteEdition property for undefined', () => {
      const shortFare = new ShortFare()
      shortFare.siteEdition = undefined

      expect(shortFare.siteEdition).to.be.undefined
    })
  })

  describe('unit', () => {
    it('should set the unit property with M', () => {
      const shortFare = new ShortFare()
      shortFare.unit = 'M'

      expect(shortFare.u).to.equal('M')
      expect(shortFare.unit).to.equal('M')
    })

    it('should set the unit property with P', () => {
      const shortFare = new ShortFare()
      shortFare.unit = 'P'

      expect(shortFare.u).to.equal('P')
      expect(shortFare.unit).to.equal('P')
    })

    it('should throw an error for invalid unit', () => {
      const shortFare = new ShortFare()
      expect(() => {
        shortFare.unit = 'invalid'
      }).to.throw(Error, 'unit [invalid] does not equal [M]iles or [P]oints')
    })
  })

  describe('amount', () => {
    context('when given a valid amount', () => {
      it('should set the amount', () => {
        const shortFare = new ShortFare()
        const amount = 12333
        shortFare.amount = amount
        expect(shortFare.am).to.equal(shortFare.amount)
      })
    })

    context('when given an invalid amount', () => {
      it('should throw an error', () => {
        const shortFare = new ShortFare()
        const amount = 'invalid'
        expect(() => {
          shortFare.amount = amount
        }).to.throw(Error)
      })
    })
  })

  describe('totalPrice', () => {
    context('when given a valid total price', () => {
      it('should set the total price', () => {
        const shortFare = new ShortFare()
        const totalPrice = 123.45
        shortFare.totalPrice = totalPrice
        expect(shortFare.p).to.equal(shortFare.totalPrice)
      })
    })

    context('when given an invalid total price', () => {
      it('should throw an error', () => {
        const shortFare = new ShortFare()
        const totalPrice = 'invalid'
        expect(() => {
          shortFare.totalPrice = totalPrice
        }).to.throw(Error)
      })
    })
  })

  describe('createdAt', () => {
    it('should return the created at date', () => {
      const shortFare = new ShortFare()
      const createdAt = new Date()
      shortFare.createdAt = createdAt
      expect(shortFare.createdAt).to.equal(createdAt)
    })
  })

  describe('updatedAt', () => {
    it('should return the updated at date', () => {
      const shortFare = new ShortFare()
      const updatedAt = new Date()
      shortFare.updatedAt = updatedAt
      expect(shortFare.updatedAt).to.equal(updatedAt)
    })
  })

  describe('sourceId', () => {
    it('should return the correct source ID', () => {
      const shortFare = new ShortFare()
      const sourceId = '123456789'
      shortFare.sourceId = sourceId
      expect(shortFare.sourceId).to.equal(sourceId)
    })
  })

  describe('isSoldOut', () => {
    it('should return true if the flight is sold out', () => {
      const shortFare = new ShortFare()
      shortFare.isSoldOut = true
      expect(shortFare.isSoldOut).to.be.true
    })

    it('should return false if the flight is not sold out', () => {
      const shortFare = new ShortFare()
      shortFare.isSoldOut = false
      expect(shortFare.isSoldOut).to.be.false
    })
  })

  describe('_id', () => {})

  describe('mongoDoc', () => {
    it('should return the correct MongoDB document', () => {
      const shortFare = createDefaultShortFare()

      const expected = {
        _id: {
          a: 'AA',
          o: 'LGA',
          d: 'JFK',
          dd: '2023-01-01',
          rd: '2023-01-02',
          c: 'USD',
          jt: 'RT',
          fc: 'E',
          fi: 'Eco',
          btc: 'Premier',
          ft: 'D',
          se: 'en-US'
        },
        ca: undefined,
        p: undefined,
        am: undefined,
        u: undefined,
        si: undefined,
        so: false,
        ua: undefined
      }

      const result = shortFare.mongoDoc
      expect(result).to.deep.equal(expected)
    })
  })

  describe('get mongoUpdateDoc', () => {
    it('should return the correct MongoDB update document', () => {
      const shortFare = createDefaultShortFare()

      const expected = {

        $set: { p: undefined, am: undefined },
        $setOnInsert: { ca: undefined, ua: undefined, si: undefined, so: false, u: undefined }
      }

      const result = shortFare.mongoUpdateDoc
      expect(result).to.deep.equal(expected)
    })
  })

  describe('mongoUpdateList', () => {
    it('should return the correct array', () => {
      const shortFare = createDefaultShortFare()

      const expected = [
        {
          _id: {
            a: 'AA',
            o: 'LGA',
            d: 'JFK',
            dd: '2023-01-01',
            rd: '2023-01-02',
            c: 'USD',
            jt: 'RT',
            fc: 'E',
            fi: 'Eco',
            btc: 'Premier',
            ft: 'D',
            se: 'en-US'
          }
        },
        {
          $set: { p: undefined, am: undefined },
          $setOnInsert: { ca: undefined, ua: undefined, si: undefined, so: false, u: undefined }
        },
        { upsert: true }
      ]
      const result = shortFare.mongoUpdateList
      expect(result).to.deep.equal(expected)
    })
  })
})
