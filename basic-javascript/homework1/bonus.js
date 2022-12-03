var oneLiterPerGalon = 0.425144;
var onegalonPer100To12l = 1.633333333333333;


var gallonS = 50;
var sum1 = oneLiterPerGalon * gallonS;

var gallon = 25;
var sum2 = oneLiterPerGalon * gallon;

var liter = 12;
var sum3 = onegalonPer100To12l * 12;


console.log(gallonS + " MPG = " + sum1 + " L/100KM" );
console.log("-----------------------------------");
console.log(+gallon + " MPG = " + sum2+ " L/100KM");
console.log("-----------------------------------");
console.log(+liter +"L/100KM = "+sum3 + " MPG");

