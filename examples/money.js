var Money = require ('js-money').Money

// creates a 10.00 EUR
var tenEur = new Money(1000, Money.EUR)

// 5 EUR
var fiveEur = tenEur.divide(2)
// 20 EUR
var twentyEur = tenEur.multiply(2)

// Returns an array of Money objects [3.34,3.33,3.33]
var shares = tenEur.allocate(1,1,1)

// 
var fromDecimal = new Money(15.62, Money.USD)
