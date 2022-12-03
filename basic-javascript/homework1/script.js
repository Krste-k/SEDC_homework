var priceOfOnePhone = 119.95;
var tax = priceOfOnePhone / 20 * 1;
var piecesOfPhones = 30;
var sum = priceOfOnePhone + tax;
var sumOfAll= piecesOfPhones * priceOfOnePhone + tax;
console.log("--------------------------------------------");
console.log("--------------------------------------------");
console.log("$" + sum + " is one piece with 5% tax.");
console.log("--------------------------------------------");
console.log("--------------------------------------------");
console.log("$" + sumOfAll + " is cost with 5% tax for " + piecesOfPhones + " pieces.");
console.log("--------------------------------------------");
console.log("--------------------------------------------");
console.log("tax per piece is $" + tax );
console.log("--------------------------------------------");
console.log("--------------------------------------------");
console.log(`1 phone costs $${sum} with included tax. We sold ${piecesOfPhones} phones that cost $${sumOfAll} with included tax of 5% per piece. tax per piece is $${tax}`);

