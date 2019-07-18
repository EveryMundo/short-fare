# short-fare
Short fare document for the flow Mongo => Stitch => Kinesis => Lambda

## Instalation
```sh
npm install @everymundo/short-fare
```

## Usage
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
  flightType: 'I', // I = INTERNATIONAL / D = DOMESTIC
  siteEdition: ShortFareToMongo.formatSiteEdition('en-us'), // not required but enforces the format en_US
  totalPrice: 1234.34,
  createdAt: new Date(),
})
```
