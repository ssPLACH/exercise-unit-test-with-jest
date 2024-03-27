// We declare the function with the exact name "fromEuroToDollar"
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound 
}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueinDollar to yens
    let valueInYen = valueInDollar * oneEuroIs["JPY"] / oneEuroIs["USD"]; 
    //return the yen value
    return valueInYen; 
}

const fromYenToPound = function(valueInYen){
    //convert the given valueinYen to pound
    let valueInPound = valueInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    // return the pound value
    return valueInPound;
}


const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };