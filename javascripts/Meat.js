// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
    "ham" : 2.50,
    "turkey" : 2.75,
    "bacon" : 3.00,
    "tofurkey" : 3.75
  };

  // Augment the original object with another method
  maker.addMeat = function() {
    ;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);