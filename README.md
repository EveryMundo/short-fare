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
  departureDate: '2020-01-01',
  returnDate: '2020-02-01',
  currencyCode: 'USD',
  tripType: 'RT', //RT || OW
  fareClass: 'E', // E = Economy / B = Business
  price: 1234.34,
  createdAt: new Date(),
})
```
