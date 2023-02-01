// This script belongs to David Chilanzi Sensenta of Arbit Designs.
// This script is developed as part of the final dissertation project.
// All rights are reserved, please do not use without proper authorization.
let formDetails = {}; //? global object to store form details

//** function to get form details
function getDetails() {
  //selecting the form fields to retrieve data from
  let specialCondition = document.getElementById("specialNeeds");
  let age = document.getElementById("age");
  let meal = document.getElementById("mealType");
  //get the selected value and place it in selected condition
  let selectedCondition =
    specialCondition.options[specialCondition.selectedIndex].value;
  let selectedAge = age.value;
  let selectedMealType = meal.options[meal.selectedIndex].value;
  // placing them into object formDetails
  formDetails.condition = selectedCondition;
  formDetails.age = selectedAge;
  formDetails.meal = selectedMealType;

  return formDetails;
}

//** function to get special name and code */
