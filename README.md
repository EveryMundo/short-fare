# short-fare
Short fare document for the flow Mongo => Stitch => Kinesis => Lambda

## Instalation
```sh
npm install @everymundo/short-fare
```

## Usage
### Airline Fares
```js
const { ShortFareToMongo } = require('@everymundo/short-fare/ShortFareToMongo.class')

const doc = new ShortFareToMongo({
  airlineIataCode: 'XX',
  departureAirportIataCode: 'MIA',
  arrivalAirportIataCode: 'JFK',
  outboundDate: '2020-01-01',
  inboundDate: '2020-02-01',
  currencyCode: 'USD',
  journeyType: 'RT', //RT || OW
  fareClass: 'E', // E = ECONOMY / B = BUSINESS / F = FIRST
  brandedFareClass: 'ECO-BASIC',
  flightType: 'I', // I = INTERNATIONAL / D = DOMESTIC
  siteEdition: ShortFareToMongo.formatSiteEdition('en-us'), // not required but enforces the format en_US
  totalPrice: 1234.34,
  createdAt: new Date(),
  updatedAt: new Date(), // optional
  isSoldOut: false, // defaults to false
  sourceId: undefined // optional. Field can be used to track the origin of the document
})
```
### Bus fares
```js
const { ShortFareToMongo } = require('@everymundo/short-fare/ShortFareToMongo.class')

const doc = new ShortFareBusToMongo({
  tenantCode: 'XX',
  departureBusStopId: '345678',
  arrivalBusStopId: '234567',
  departureCityGeoId: 567890,
  arrivalCityGeoId: 345678,
  departureCityName: 'Miami',
  arrivalCityName: 'Orlando',
  outboundDate: '2020-01-01',
  inboundDate: '2020-02-01',
  currencyCode: 'USD',
  journeyType: 'RT', //RT || OW
  fareClass: 'E', // E = ECONOMY / B = BUSINESS / F = FIRST
  flightType: 'I', // I = INTERNATIONAL / D = DOMESTIC
  siteEdition: ShortFareToMongo.formatSiteEdition('en-us'), // not required but enforces the format en_US
  totalPrice: 1234.34,
  createdAt: new Date(),
  updatedAt: new Date(), // optional
  isSoldOut: false, // defaults to false
  sourceId: undefined // optional. Field can be used to track the origin of the document
})
```

