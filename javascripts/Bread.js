// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var breadPrices = {
    "sourdough" : 1.50,
    "wheat" : 1.75,
    "wholeGrain" : 1.00,
    "pumpernickle" : 1.75
  };

  // Augment the original object with another method
  maker.getBread = function(e) {
    var currentBreadPrice = breadPrices[e];
    SandwichMaker.addTopping(currentBreadPrice);
};

 // Augment the original object with a method to remove meat
  maker.removeBread = function(e) {
    var currentBreadPrice = breadPrices[e];
    SandwichMaker.removeTopping(currentBreadPrice);
  }



  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});