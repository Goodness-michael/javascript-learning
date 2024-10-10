//  write a function that takes in a string and converts the first letter of every word to upper case

// write a function  that checks if the parameter is a number or not.

const firstLetter = (str) => {
  const result = str.split("").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result.join("");
};
console.log(firstLetter(" testing is fun and stressful"));

const checkNumber = (arg) => typeof arg === "number";
console.log(checkNumber("mine"));

const currencyData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];

// iterate over the currency data and log a message (the exchange rate for usd to ngn is 1700)
currencyData.map((currencyRate) => {
  console.log(
    `the exchange rate for ${currencyRate.from} to ${currencyRate.to} is ${currencyRate.rate}`
  );
});


// write a func that returns the exchange rate for that currency pair
//or an appropriate message if the pair is not found
const findCurrencyPair = (baseCurrency, toCurrency) => {
  //search through the currencyData to find a match
  const pair = currencyData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    console.log(
      `The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate}`
    );
  } else {
    console.log("The currency pair cannot be found");
  }
};

findCurrencyPair("YEN", "NGN");

// write conversion  function
// 2usd=
const convertCurrency = (baseCurrency,toCurrency,amount) => {
const pair = currencyData.find((currency) => {
  return currency.from === baseCurrency && currency.to === toCurrency;
});
  if (pair) {
    //conversion
    console.log(
      `${amount} ${pair.from} is equaivalent to ${amount * pair.rate} ${pair.to}`);
        
      
    
  } else {
    console.log("Currency pair not found");
  }
};

convertCurrency("GBP", "NGN", 500);
    
// write a function to add to the currency data list
// AUS NGN 300

const addNewCurrency =(from,to,rate)  =>  { currencyData.push({from,to,rate});
console.log(currencyData);};
addNewCurrency("Aus","NGN",1040);
