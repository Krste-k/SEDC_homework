
var priceOfPhone = 119.95;
var piecesOfPhones = 30;
var sumWithOutTax = piecesOfPhones * priceOfPhone / 20 * 19;
var sumWithTax = piecesOfPhones * priceOfPhone;
var tax = sumWithTax - sumWithOutTax;
var taxOfOnePice = tax / piecesOfPhones;

console.log(sumWithTax + " Cost with tax for " + piecesOfPhones +" Phones");
console.log("--------------------------------------------");
console.log(sumWithOutTax  + " Cost without tax for " + piecesOfPhones +" Phones" );
console.log("--------------------------------------------");
console.log(tax + " total tax for " + piecesOfPhones +" Phones" );
console.log("--------------------------------------------");
console.log(taxOfOnePice + " total per piece");
console.log("--------------------------------------------");
console.log("--------------------------------------------");

console.log(`1 phone costs $${priceOfPhone} with included tax. We sold ${piecesOfPhones} phones that cost ${sumWithTax} with included tax of 5% per piece. Without tax ${piecesOfPhones} phones cost ${sumWithOutTax}. The tax for ${piecesOfPhones} is ${tax} or ${taxOfOnePice} per piece.`);
