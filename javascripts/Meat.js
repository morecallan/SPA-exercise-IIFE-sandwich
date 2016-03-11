// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var veggiePrices = {
    "ham" : 2.50,
    "turkey" : 2.75,
    "bacon" : 3.00,
    "tofurkey" : 3.75
  };

  // Augment the original object with another method
  maker.getveggie = function(e) {
    var currentveggiePrice = veggiePrices[e];
    SandwichMaker.addTopping(currentveggiePrice);
};

 // Augment the original object with a method to remove veggie
  maker.removeveggie = function(e) {
    var currentveggiePrice = veggiePrices[e];
    SandwichMaker.removeTopping(currentveggiePrice);
  }



  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});