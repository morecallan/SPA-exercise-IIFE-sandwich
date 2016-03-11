//Getting output reference
var sandwichOutput = document.getElementById("sandwichOutput");
// Getting done button reference
var doneButton = document.getElementById("done");


//Empty Sandwich variable
var finalSandwich = {
  "bread": [],
  "meat": [],
  "cheese": [],
  "condiments": [],
  "veggies": []
};

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <CHECKBOXES> element that has all the meat options
/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
var breadChooser = document.getElementsByName("bread-chooser");
    for (var i = 0; i < breadChooser.length; i++) {
        breadChooser[i].addEventListener("change", function(event) {
          // Get the value chosen from the DOM
          selectedTopping = event.target;
          if (selectedTopping.checked) {
            finalSandwich["bread"].push(selectedTopping.value);
            SandwichMaker.getBread(event.target.value);
          } else { 
            finalSandwich["bread"].splice([finalSandwich["bread"].indexOf(selectedTopping.value)], 1);
            SandwichMaker.removeBread(event.target.value);
          }
          // Determine the price of the topping chosen
          // Add the topping to the SandwichMaker to increase the total price
        }) 
};

var meatChooser = document.getElementsByName("meat-chooser");
    for (var i = 0; i < meatChooser.length; i++) {
        meatChooser[i].addEventListener("change", function(event) {
          // Get the value chosen from the DOM
          selectedTopping = event.target;
          if (selectedTopping.checked) {
            finalSandwich["meat"].push(selectedTopping.value);
            SandwichMaker.getMeat(event.target.value);
          } else { 
            finalSandwich["meat"].splice([finalSandwich["meat"].indexOf(selectedTopping.value)], 1);
            SandwichMaker.removeMeat(event.target.value);
          }
          // Determine the price of the topping chosen
          // Add the topping to the SandwichMaker to increase the total price
        }) 
};


var cheeseChooser = document.getElementsByName("cheese-chooser");
    for (var i = 0; i < cheeseChooser.length; i++) {
        cheeseChooser[i].addEventListener("change", function(event) {
          // Get the value chosen from the DOM
          selectedTopping = event.target;
          if (selectedTopping.checked) {
            finalSandwich["cheese"].push(selectedTopping.value);
            SandwichMaker.getCheese(event.target.value);
          } else { 
            finalSandwich["cheese"].splice([finalSandwich["cheese"].indexOf(selectedTopping.value)], 1);
            SandwichMaker.removeCheese(event.target.value);
          }
          // Determine the price of the topping chosen
          // Add the topping to the SandwichMaker to increase the total price
        }) 
};

var condimentChooser = document.getElementsByName("condiment-chooser");
    for (var i = 0; i < condimentChooser.length; i++) {
        condimentChooser[i].addEventListener("change", function(event) {
          // Get the value chosen from the DOM
          selectedTopping = event.target;
          if (selectedTopping.checked) {
            finalSandwich["condiments"].push(selectedTopping.value);
            SandwichMaker.getCondiment(event.target.value);
          } else { 
            finalSandwich["condiments"].splice([finalSandwich["condiments"].indexOf(selectedTopping.value)], 1);
            SandwichMaker.removeCondiment(event.target.value);
          }
          // Determine the price of the topping chosen
          // Add the topping to the SandwichMaker to increase the total price
        }) 
};

var veggieChooser = document.getElementsByName("veggie-chooser");
    for (var i = 0; i < veggieChooser.length; i++) {
        veggieChooser[i].addEventListener("change", function(event) {
          // Get the value chosen from the DOM
          selectedTopping = event.target;
          if (selectedTopping.checked) {
            finalSandwich["veggies"].push(selectedTopping.value);
            SandwichMaker.getVeggie(event.target.value);
          } else { 
            finalSandwich["veggies"].splice([finalSandwich["veggies"].indexOf(selectedTopping.value)], 1);
            SandwichMaker.removeVeggie(event.target.value);
          }
          // Determine the price of the topping chosen
          // Add the topping to the SandwichMaker to increase the total price
        }) 
};



// Reference to done button with event listener
doneButton.addEventListener("click", outputSandwich);

// Outputs final sandwich to the DOM
function outputSandwich() {
  console.log("finalSandwich", finalSandwich);
  finalSandwichPrice = SandwichMaker.getTotalPrice();
  var buildString = `<h2>Your Damn Sandwich</h2><ul> <li> ${finalSandwich["bread"]} </li> <li> ${finalSandwich["meat"].join(", ")} </li> <li> ${finalSandwich["cheese"]} </li> <li> ${finalSandwich["condiments"]} </li> <li> ${finalSandwich["veggies"]} </li> </ul> <price> ${finalSandwichPrice} </price>`
  sandwichOutput.innerHTML += buildString;
}
