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





// Reference to done button with event listener
doneButton.addEventListener("click", outputSandwich);

// Outputs final sandwich to the DOM
function outputSandwich() {
  console.log("finalSandwich", finalSandwich);
  finalSandwichPrice = SandwichMaker.getTotalPrice();
  var buildString = `<h2>Your Damn Sandwich</h2><ul> <li> ${finalSandwich["bread"]} </li> <li> ${finalSandwich["meat"].join(", ")} </li> <li> ${finalSandwich["cheese"]} </li> <li> ${finalSandwich["condiments"]} </li> <li> ${finalSandwich["veggies"]} </li> </ul> <price> ${finalSandwichPrice} </price>`
  sandwichOutput.innerHTML += buildString;
}
