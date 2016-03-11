// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var condimentPrices = {
    "ketchup" : 2.50,
    "mustard" : 2.75,
    "mayo" : 3.00,
    "relish" : 3.75
  };

  // Augment the original object with another method
  maker.getCondiment = function(e) {
    var currentCondimentPrice = condimentPrices[e];
    SandwichMaker.addTopping(currentCondimentPrice);
};

 // Augment the original object with a method to remove condiment
  maker.removeCondiment = function(e) {
    var currentCondimentPrice = condimentPrices[e];
    SandwichMaker.removeTopping(currentCondimentPrice);
  }



  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});