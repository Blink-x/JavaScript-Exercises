//two functions
//first converts fahrenheit to celsius
//second converts celsius to fahrenheit
//decimal answers rounded to one place

let inCelsius;
let inFahrenheit;

function ftoc(fTemp) 
{
    let inCelsius = (fTemp - 32) * (5/9);
    console.log
        (fTemp + " would be "+ inCelsius.toFixed(1) + " degrees in celsius!");
    return inCelsius;
}

function ctof(cTemp) 
{
    let inFahrenheit = ((cTemp * (9/5)) + 32);
    console.log
        (cTemp + " would be " + inFahrenheit.toFixed(1) + " degrees in Fahrenheit!");
    return inFahrenheit;
}

module.exports = {
    ftoc,
    ctof
  }