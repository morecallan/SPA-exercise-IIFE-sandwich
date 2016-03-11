// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var condimentPrices = {
    "ham" : 2.50,
    "turkey" : 2.75,
    "bacon" : 3.00,
    "tofurkey" : 3.75
  };

  // Augment the original object with another method
  maker.getCondiment = function(e) {
    var currentCondimentPrice = condimentPrices[e];
    SandwichMaker.addTopping(currentCondimentPrice);
};

 // Augment the original object with a method to remove meat
  maker.removeCondiment = function(e) {
    var currentCondimentPrice = condimentPrices[e];
    SandwichMaker.removeTopping(currentCondimentPrice);
  }



  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});