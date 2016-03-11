// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var veggiePrices = {
    "tomato" : 2.50,
    "cucumber" : 2.75,
    "carrot" : 3.00,
    "olive" : 3.75
  };

  // Augment the original object with another method
  maker.getVeggie = function(e) {
    var currentVeggiePrice = veggiePrices[e];
    SandwichMaker.addTopping(currentVeggiePrice);
};

 // Augment the original object with a method to remove veggie
  maker.removeVeggie = function(e) {
    var currentVeggiePrice = veggiePrices[e];
    SandwichMaker.removeTopping(currentveggiePrice);
  }



  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});