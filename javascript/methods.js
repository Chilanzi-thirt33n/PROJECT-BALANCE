//todo :functions random number for indexing up to seven
function getRandom7Int() {
  let random7 = Math.floor(Math.random() * 7);
  return random7;
}
//todo :this is a function for those array with 14 objects
function getRandom14Int() {
  let random7 = Math.floor(Math.random() * 14);
  return random7;
}
//todo :function of arr with seven random days
function PlaceIntInArr() {
  let sevenIntArr = [];
  let limit = 7;
  for (let i = 0; i <= limit; i++) {
    if (sevenIntArr.length != limit) {
      sevenIntArr.push(getRandom7Int());
    }
  }
  return sevenIntArr;
}
//todo :this is a function for seven days but with arrays which go up to 14 meals
function PlaceIntInArrTwo() {
  let sevenIntArr = [];
  let limit = 7;
  for (let i = 0; i <= limit; i++) {
    if (sevenIntArr.length != limit) {
      sevenIntArr.push(getRandom14Int());
    }
  }
  return sevenIntArr;
}
//todo function to get form details
function getDetails() {
  let formDetails = {}; // object to store form data from generation field
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
//todo :function to get special name and code */
function getSpecialCode() {
  let specialCode = {}; // object for storing form data from special code
  // the special name and the seven integers collection
  let mealName = document.getElementById("sp-name");
  let int0 = document.getElementById("code0").value;
  let int1 = document.getElementById("code1").value;
  let int2 = document.getElementById("code2").value;
  let int3 = document.getElementById("code3").value;
  let int4 = document.getElementById("code4").value;
  let int5 = document.getElementById("code5").value;
  let int6 = document.getElementById("code6").value;
  let selectedName = mealName.options[mealName.selectedIndex].value;
  // store the data into an object for retrieval
  specialCode.Name = selectedName;
  specialCode.index0 = int0;
  specialCode.index1 = int1;
  specialCode.index2 = int2;
  specialCode.index3 = int3;
  specialCode.index4 = int4;
  specialCode.index5 = int5;
  specialCode.index6 = int6;

  return specialCode;
}
//todo :function for loading newpage
function loadPlanPage() {
  window.location.assign("HealthyMeal.html");
}
//todo : random function for two and six
function getRandomOfTwo() {
  let randomInt = Math.floor(Math.random() * 2);
  return randomInt;
}
function getRandomOfSix() {
  let randomInt = Math.floor(Math.random() * 6);
  return randomInt;
}
//exporting section
export {
  PlaceIntInArr,
  PlaceIntInArrTwo,
  getDetails,
  loadPlanPage,
  getRandomOfTwo,
  getRandomOfSix,
  getSpecialCode,
};
