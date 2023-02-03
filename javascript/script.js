// This script belongs to David Chilanzi Sensenta of Arbit Designs.
// This script is developed as part of the final dissertation project.
// All rights are reserved, please do not use without proper authorization.
//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch this is for tailwind
//********************FUNCTIONS SECTION ******************************/
//** functions random number for indexing up to seven */
function getRandom7Int() {
  let random7 = Math.floor(Math.random() * 7);
  return random7;
}
//this is a function for those array with 14 objects
function getRandom14Int() {
  let random7 = Math.floor(Math.random() * 14);
  return random7;
}
// function of arr with seven random days
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
//this is for seven days but with arrays which go up to 14 meals
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


//** function to get form details
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
console.log(getDetails().condition);
//** function to get special name and code */
function getSpecialCode() {
  let specialCode = {}; // object for storung form data from special code
  // the special name and the seven integers
  let mealName = document.getElementById("sp-name");
  let int0 = document.getElementById("code0").value;
  let int1 = document.getElementById("code1").value;
  let int2 = document.getElementById("code2").value;
  let int3 = document.getElementById("code3").value;
  let int4 = document.getElementById("code4").value;
  let int5 = document.getElementById("code5").value;
  let int6 = document.getElementById("code6").value;
  let selectedName = mealName.options[mealName.selectedIndex].value;
  // store the data into an object for retieval
  specialCode.specialName = selectedName;
  specialCode.day1 = int0;
  specialCode.day2 = int1;
  specialCode.day3 = int2;
  specialCode.day4 = int3;
  specialCode.day5 = int4;
  specialCode.day6 = int5;
  specialCode.day7 = int6;

  return specialCode;
}
//**function for loading newpage */
function loadPlanPage() {
  getDetails();
  window.location.assign("HealthyMeal.html");
}


//todo : create proper objects of meals to be loaded on the new page
// normal meals
let normalized = [
  //day1
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day2
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day3
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day4
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day5
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day6
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day7
   {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  }
];
console.log(normalized[0].breakfast);
//normal western
let western = [
  //day1
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day2
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day3
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day4
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day5
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day6
  {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  },
  //day7
   {
    breakfast: "brown bread",
    breakfastSide: ["milk", "eggs"],
    lunch: "nshima",
    lunchside: ["village chicken", "spinach"],
    mealSunset: "placeholder",
    mealSunsetSide: ["side1", "side2"],
    eveningmeal: "placeholder",
    eveningmealside: ["side1", "side2"],
  }
];

function loadMealPlan(){
  
  PlaceIntInArr();// this is the arr with random numbers that will be used as index

  //if for normal meals
if (getDetails().condition === "normal" && getDetails().meal === "western" && getDetails().age >= 17)//todo : make these variables so that it easy to read
{
  //day1
  normalized[PlaceIntInArr()[0]].breakfast;
  normalized[PlaceIntInArr()[0]].breakfastSide[0];
  normalized[PlaceIntInArr()[0]].breakfastSide[1];
  normalized[PlaceIntInArr()[0]].lunch;
  normalized[PlaceIntInArr()[0]].lunchside[0];
  normalized[PlaceIntInArr()[0]].lunchside[1];
  normalized[PlaceIntInArr()[0]].mealSunset;
  normalized[PlaceIntInArr()[0]].mealSunsetSide[0];
  normalized[PlaceIntInArr()[0]].mealSunsetSide[1];
  normalized[PlaceIntInArr()[0]].eveningmeal;
  normalized[PlaceIntInArr()[0]].eveningmealside[0];
  normalized[PlaceIntInArr()[0]].eveningmealside[1];
//day2
  normalized[PlaceIntInArr()[1]].breakfast;
  normalized[PlaceIntInArr()[1]].breakfastSide[0];
  normalized[PlaceIntInArr()[1]].breakfastSide[1];
  normalized[PlaceIntInArr()[1]].lunch;
  normalized[PlaceIntInArr()[1]].lunchside[0];
  normalized[PlaceIntInArr()[1]].lunchside[1];
  normalized[PlaceIntInArr()[1]].mealSunset;
  normalized[PlaceIntInArr()[1]].mealSunsetSide[0];
  normalized[PlaceIntInArr()[1]].mealSunsetSide[1];
  normalized[PlaceIntInArr()[1]].eveningmeal;
  normalized[PlaceIntInArr()[1]].eveningmealside[0];
  normalized[PlaceIntInArr()[1]].eveningmealside[1];
//day3
  normalized[PlaceIntInArr()[2]].breakfast;
  normalized[PlaceIntInArr()[2]].breakfastSide[0];
  normalized[PlaceIntInArr()[2]].breakfastSide[1];
  normalized[PlaceIntInArr()[2]].lunch;
  normalized[PlaceIntInArr()[2]].lunchside[0];
  normalized[PlaceIntInArr()[2]].lunchside[1];
  normalized[PlaceIntInArr()[2]].mealSunset;
  normalized[PlaceIntInArr()[2]].mealSunsetSide[0];
  normalized[PlaceIntInArr()[2]].mealSunsetSide[1];
  normalized[PlaceIntInArr()[2]].eveningmeal;
  normalized[PlaceIntInArr()[2]].eveningmealside[0];
  normalized[PlaceIntInArr()[2]].eveningmealside[1];
//day4
  normalized[PlaceIntInArr()[3]].breakfast;
  normalized[PlaceIntInArr()[3]].breakfastSide[0];
  normalized[PlaceIntInArr()[3]].breakfastSide[1];
  normalized[PlaceIntInArr()[3]].lunch;
  normalized[PlaceIntInArr()[3]].lunchside[0];
  normalized[PlaceIntInArr()[3]].lunchside[1];
  normalized[PlaceIntInArr()[3]].mealSunset;
  normalized[PlaceIntInArr()[3]].mealSunsetSide[0];
  normalized[PlaceIntInArr()[3]].mealSunsetSide[1];
  normalized[PlaceIntInArr()[3]].eveningmeal;
  normalized[PlaceIntInArr()[3]].eveningmealside[0];
  normalized[PlaceIntInArr()[3]].eveningmealside[1];
//day5
  normalized[PlaceIntInArr()[4]].breakfast;
  normalized[PlaceIntInArr()[4]].breakfastSide[0];
  normalized[PlaceIntInArr()[4]].breakfastSide[1];
  normalized[PlaceIntInArr()[4]].lunch;
  normalized[PlaceIntInArr()[4]].lunchside[0];
  normalized[PlaceIntInArr()[4]].lunchside[1];
  normalized[PlaceIntInArr()[4]].mealSunset;
  normalized[PlaceIntInArr()[4]].mealSunsetSide[0];
  normalized[PlaceIntInArr()[4]].mealSunsetSide[1];
  normalized[PlaceIntInArr()[4]].eveningmeal;
  normalized[PlaceIntInArr()[4]].eveningmealside[0];
  normalized[PlaceIntInArr()[4]].eveningmealside[1];
//day6
  normalized[PlaceIntInArr()[5]].breakfast;
  normalized[PlaceIntInArr()[5]].breakfastSide[0];
  normalized[PlaceIntInArr()[5]].breakfastSide[1];
  normalized[PlaceIntInArr()[5]].lunch;
  normalized[PlaceIntInArr()[5]].lunchside[0];
  normalized[PlaceIntInArr()[5]].lunchside[1];
  normalized[PlaceIntInArr()[5]].mealSunset;
  normalized[PlaceIntInArr()[5]].mealSunsetSide[0];
  normalized[PlaceIntInArr()[5]].mealSunsetSide[1];
  normalized[PlaceIntInArr()[5]].eveningmeal;
  normalized[PlaceIntInArr()[5]].eveningmealside[0];
  normalized[PlaceIntInArr()[5]].eveningmealside[1];
  //day7
  normalized[PlaceIntInArr()[6]].breakfast;
  normalized[PlaceIntInArr()[6]].breakfastSide[0];
  normalized[PlaceIntInArr()[6]].breakfastSide[1];
  normalized[PlaceIntInArr()[6]].lunch;
  normalized[PlaceIntInArr()[6]].lunchside[0];
  normalized[PlaceIntInArr()[6]].lunchside[1];
  normalized[PlaceIntInArr()[6]].mealSunset;
  normalized[PlaceIntInArr()[6]].mealSunsetSide[0];
  normalized[PlaceIntInArr()[6]].mealSunsetSide[1];
  normalized[PlaceIntInArr()[6]].eveningmeal;
  normalized[PlaceIntInArr()[6]].eveningmealside[0];
  normalized[PlaceIntInArr()[6]].eveningmealside[1];
}
}
console.log(getDetails().meal);
