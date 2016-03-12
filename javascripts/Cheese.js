// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different cheese prices
  var cheesePrices = {
    "swiss" : 4.50,
    "american" : 7.75,
    "pepperjack" : 4.00,
    "munster" : 3.75
  };

  // Augment the original object with another method
  maker.getCheese = function(e) {
    var currentCheesePrice = cheesePrices[e];
    SandwichMaker.addTopping(currentCheesePrice);
};

 // Augment the original object with a method to remove cheese
  maker.removeCheese = function(e) {
    var currentCheesePrice = cheesePrices[e];
    SandwichMaker.removeTopping(currentCheesePrice);
  }



  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});