// This script belongs to David Chilanzi Sensenta of Arbit Designs.
// This script is developed as part of the final dissertation project.
// All rights are reserved, please do not use without proper authorization.
//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch this is for tailwind

//*******************************************************************************FUNCTIONS SECTION ****************************************************************************/
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

// function to get form details
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
//console.log(getDetails().condition);// testing get Details
// function to get special name and code */
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
//function for loading newpage
function loadPlanPage() {
  getDetails();
  window.location.assign("HealthyMeal.html");
}

//todo :------------------------------------------------------------- FOOD OBJECTS WITH MEALS  --------------------------------------------------------------
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
  },
];
let normalWest = [
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
  },
];
let normalMix = [
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
  },
  //day8
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
  //day9
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
  //day10
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
  //day11
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
  //day12
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
  //day13
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
  //day14
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
];

//console.log(normalized[0].breakfast); // to test if the meals can be displayed
// to test the function of place onto page
/*let breakfastDayOne = document.querySelector("#day1 .day-card .breakfast dt");
breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
  normalized[0].breakfast;*/

//vegan meals
let veganized = [
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
  },
];
let veganWest = [
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
  },
];
let veganMix = [];

//Diabetic meals
let diabeticZed = [
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
  },
];
let diabeticWest = [
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
  },
];
let diabeticMix = [];

//pescaterian meals
let pescatarianZed = [
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
  },
];
let pescatarianWest = [
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
  },
];
let pescatarianMix = [];

//console.log(getDetails().meal);// to test details
//this is the function to stop submit from submiting
let form = document.getElementById("codeSection");
if (form) {
  form.addEventListener("submit", function (event) {
    //prevents submit reload
    event.preventDefault();
    //gets users info to be processed by the meal plan function
    let details = getDetails();
    // saves the user details to session storage
    sessionStorage.setItem("userDetails", JSON.stringify(details));
    //loads new page
    loadPlanPage();
  });
}

// ** --------------------------------------------------------------- THIS IS THE FUNCTION TO PLACE ON DOCUMENT -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  let loadMeal = document.getElementById("sevenday-plan");
  if (loadMeal) {
    PlaceIntInArr(); // randomise the array
    PlaceIntInArrTwo();

    // retrieves the user details from session storage
    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    // places the condition from user details on the new page
    // document.write(userDetails.condition);


    //todo : make these variables so that it easy to read
    let typeOne = "western",
      typeThree = "mix",
      typeTwo = "zambian"; // these are the types to compare to
    let conOne = "normal",
      conTwo = "vegan",
      conThree = "diabetic",
      conFour = "pescatarian"; // these are condition
    let norm1 = "Savory Safari Supper",
      norm2 = "Harvest Harmony Platter",
      norm3 = "Wilderness Wholesome Bowl",
      vegan1 = "Herb & Spice Fusion",
      vegan2 = "Vibrant Veggie Delight",
      vegan3 = "Tropical Tasty Treat",
      diabetic1 = "Diabetic Delicacy Plate",
      diabetic2 = "Western Wellness Plate",
      diabetic3 = "Balanced Bites Mix",
      pescatarian1 = "Pescatarian Paradise Platter",
      pescatarian2 = "Seafood Sensation Spread",
      pescatarian3 = "Mixed Mariner's Medley";

    //************************************************ NORMAL MEAL ***********************************************************/
    if (userDetails.condition === conOne && userDetails.meal === typeTwo) {
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        PlaceIntInArr()[0] +
        " - " +
        PlaceIntInArr()[1] +
        " - " +
        PlaceIntInArr()[2] +
        " - " +
        PlaceIntInArr()[3] +
        " - " +
        PlaceIntInArr()[4] +
        " - " +
        PlaceIntInArr()[5] +
        " - " +
        PlaceIntInArr()[6];

      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = norm1;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = normalized[PlaceIntInArr()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[0]].breakfastSide[1];

      lunchDayOne.textContent = normalized[PlaceIntInArr()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[0]].lunchside[1];

      snackDayOne.textContent = normalized[PlaceIntInArr()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[0]].mealSunsetSide[1];

      supaDayOne.textContent = normalized[PlaceIntInArr()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalized[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].breakfastSide[1];

      lunchDayTwo.textContent = normalized[PlaceIntInArr()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].lunchside[1];

      snackDayTwo.textContent = normalized[PlaceIntInArr()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = normalized[PlaceIntInArr()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = normalized[PlaceIntInArr()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[2]].breakfastSide[1];

      lunchDayThree.textContent = normalized[PlaceIntInArr()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[2]].lunchside[1];

      snackDayThree.textContent = normalized[PlaceIntInArr()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[2]].mealSunsetSide[1];

      supaDayThree.textContent = normalized[PlaceIntInArr()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalized[PlaceIntInArr()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[3]].breakfastSide[1];

      lunchDayFour.textContent = normalized[PlaceIntInArr()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[3]].lunchside[1];

      snackDayFour.textContent = normalized[PlaceIntInArr()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[3]].mealSunsetSide[1];

      supaDayFour.textContent = normalized[PlaceIntInArr()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalized[PlaceIntInArr()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[4]].breakfastSide[1];

      lunchDayFive.textContent = normalized[PlaceIntInArr()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[4]].lunchside[1];

      snackDayFive.textContent = normalized[PlaceIntInArr()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[4]].mealSunsetSide[1];

      supaDayFive.textContent = normalized[PlaceIntInArr()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalized[PlaceIntInArr()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[5]].breakfastSide[1];

      lunchDaySix.textContent = normalized[PlaceIntInArr()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[5]].lunchside[1];

      snackDaySix.textContent = normalized[PlaceIntInArr()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[5]].mealSunsetSide[1];

      supaDaySix.textContent = normalized[PlaceIntInArr()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = normalized[PlaceIntInArr()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[6]].breakfastSide[1];

      lunchDaySeven.textContent = normalized[PlaceIntInArr()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[6]].lunchside[1];

      snackDaySeven.textContent = normalized[PlaceIntInArr()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[6]].mealSunsetSide[1];

      supaDaySeven.textContent = normalized[PlaceIntInArr()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[6]].eveningmealside[1];
    } else if (
      userDetails.condition === conOne &&
      userDetails.meal === typeOne
    ) {
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        PlaceIntInArr()[0] +
        " - " +
        PlaceIntInArr()[1] +
        " - " +
        PlaceIntInArr()[2] +
        " - " +
        PlaceIntInArr()[3] +
        " - " +
        PlaceIntInArr()[4] +
        " - " +
        PlaceIntInArr()[5] +
        " - " +
        PlaceIntInArr()[6];
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = norm2;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = normalWest[PlaceIntInArr()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[0]].breakfastSide[1];

      lunchDayOne.textContent = normalWest[PlaceIntInArr()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[0]].lunchside[1];

      snackDayOne.textContent = normalWest[PlaceIntInArr()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[0]].mealSunsetSide[1];

      supaDayOne.textContent = normalWest[PlaceIntInArr()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalWest[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[1]].breakfastSide[1];

      lunchDayTwo.textContent = normalWest[PlaceIntInArr()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[1]].lunchside[1];

      snackDayTwo.textContent = normalized[PlaceIntInArr()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = normalWest[PlaceIntInArr()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = normalWest[PlaceIntInArr()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[2]].breakfastSide[1];

      lunchDayThree.textContent = normalWest[PlaceIntInArr()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[2]].lunchside[1];

      snackDayThree.textContent = normalWest[PlaceIntInArr()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[2]].mealSunsetSide[1];

      supaDayThree.textContent = normalWest[PlaceIntInArr()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalWest[PlaceIntInArr()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[3]].breakfastSide[1];

      lunchDayFour.textContent = normalWest[PlaceIntInArr()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[3]].lunchside[1];

      snackDayFour.textContent = normalWest[PlaceIntInArr()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[3]].mealSunsetSide[1];

      supaDayFour.textContent = normalWest[PlaceIntInArr()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalWest[PlaceIntInArr()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[4]].breakfastSide[1];

      lunchDayFive.textContent = normalWest[PlaceIntInArr()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[4]].lunchside[1];

      snackDayFive.textContent = normalWest[PlaceIntInArr()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[4]].mealSunsetSide[1];

      supaDayFive.textContent = normalWest[PlaceIntInArr()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalWest[PlaceIntInArr()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[5]].breakfastSide[1];

      lunchDaySix.textContent = normalWest[PlaceIntInArr()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[5]].lunchside[1];

      snackDaySix.textContent = normalWest[PlaceIntInArr()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[5]].mealSunsetSide[1];

      supaDaySix.textContent = normalWest[PlaceIntInArr()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = normalWest[PlaceIntInArr()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[6]].breakfastSide[1];

      lunchDaySeven.textContent = normalWest[PlaceIntInArr()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[6]].lunchside[1];

      snackDaySeven.textContent = normalWest[PlaceIntInArr()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[6]].mealSunsetSide[1];

      supaDaySeven.textContent = normalWest[PlaceIntInArr()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[6]].eveningmealside[1];
    }else if (
      userDetails.condition === conOne &&
      userDetails.meal === typeThree
    ) {
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        PlaceIntInArrTwo()[0] +
        " - " +
        PlaceIntInArrTwo()[1] +
        " - " +
        PlaceIntInArrTwo()[2] +
        " - " +
        PlaceIntInArrTwo()[3] +
        " - " +
        PlaceIntInArrTwo()[4] +
        " - " +
        PlaceIntInArrTwo()[5] +
        " - " +
        PlaceIntInArrTwo()[6];
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = norm3;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = normalMix[PlaceIntInArrTwo()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[0]].breakfastSide[1];

      lunchDayOne.textContent = normalMix[PlaceIntInArrTwo()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[0]].lunchside[1];

      snackDayOne.textContent = normalMix[PlaceIntInArrTwo()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[0]].mealSunsetSide[1];

      supaDayOne.textContent = normalMix[PlaceIntInArrTwo()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalMix[PlaceIntInArrTwo()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[1]].breakfastSide[1];

      lunchDayTwo.textContent = normalMix[PlaceIntInArrTwo()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[1]].lunchside[1];

      snackDayTwo.textContent = normalMix[PlaceIntInArrTwo()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = normalMix[PlaceIntInArrTwo()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = normalMix[PlaceIntInArrTwo()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[2]].breakfastSide[1];

      lunchDayThree.textContent = normalMix[PlaceIntInArrTwo()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[2]].lunchside[1];

      snackDayThree.textContent = normalMix[PlaceIntInArrTwo()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[2]].mealSunsetSide[1];

      supaDayThree.textContent = normalMix[PlaceIntInArrTwo()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalMix[PlaceIntInArrTwo()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[3]].breakfastSide[1];

      lunchDayFour.textContent = normalMix[PlaceIntInArrTwo()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[3]].lunchside[1];

      snackDayFour.textContent = normalMix[PlaceIntInArrTwo()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[3]].mealSunsetSide[1];

      supaDayFour.textContent = normalMix[PlaceIntInArrTwo()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalMix[PlaceIntInArrTwo()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[4]].breakfastSide[1];

      lunchDayFive.textContent = normalMix[PlaceIntInArrTwo()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[4]].lunchside[1];

      snackDayFive.textContent = normalMix[PlaceIntInArrTwo()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[4]].mealSunsetSide[1];

      supaDayFive.textContent = normalMix[PlaceIntInArrTwo()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalMix[PlaceIntInArrTwo()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[5]].breakfastSide[1];

      lunchDaySix.textContent = normalMix[PlaceIntInArrTwo()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[5]].lunchside[1];

      snackDaySix.textContent = normalMix[PlaceIntInArrTwo()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[5]].mealSunsetSide[1];

      supaDaySix.textContent = normalMix[PlaceIntInArrTwo()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = normalMix[PlaceIntInArrTwo()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[6]].breakfastSide[1];

      lunchDaySeven.textContent = normalMix[PlaceIntInArrTwo()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[6]].lunchside[1];

      snackDaySeven.textContent = normalMix[PlaceIntInArrTwo()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[6]].mealSunsetSide[1];

      supaDaySeven.textContent = normalMix[PlaceIntInArrTwo()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[PlaceIntInArrTwo()[6]].eveningmealside[1];
    }
    //******************************************************* VEGAN MEALS ***********************************************************/

    else if (userDetails.condition === conTwo && userDetails.meal === typeTwo) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = vegan1;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = veganized[PlaceIntInArr()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[0]].breakfastSide[1];

      lunchDayOne.textContent = veganized[PlaceIntInArr()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[0]].lunchside[1];

      snackDayOne.textContent = veganized[PlaceIntInArr()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[0]].mealSunsetSide[1];

      supaDayOne.textContent = veganized[PlaceIntInArr()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = veganized[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[1]].breakfastSide[1];

      lunchDayTwo.textContent = veganized[PlaceIntInArr()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[1]].lunchside[1];

      snackDayTwo.textContent = normalized[PlaceIntInArr()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = veganized[PlaceIntInArr()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = veganized[PlaceIntInArr()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[2]].breakfastSide[1];

      lunchDayThree.textContent = veganized[PlaceIntInArr()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[2]].lunchside[1];

      snackDayThree.textContent = veganized[PlaceIntInArr()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[2]].mealSunsetSide[1];

      supaDayThree.textContent = veganized[PlaceIntInArr()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = veganized[PlaceIntInArr()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[3]].breakfastSide[1];

      lunchDayFour.textContent = veganized[PlaceIntInArr()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[3]].lunchside[1];

      snackDayFour.textContent = veganized[PlaceIntInArr()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[3]].mealSunsetSide[1];

      supaDayFour.textContent = veganized[PlaceIntInArr()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = veganized[PlaceIntInArr()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[4]].breakfastSide[1];

      lunchDayFive.textContent = veganized[PlaceIntInArr()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[4]].lunchside[1];

      snackDayFive.textContent = veganized[PlaceIntInArr()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[4]].mealSunsetSide[1];

      supaDayFive.textContent = veganized[PlaceIntInArr()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = veganized[PlaceIntInArr()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[5]].breakfastSide[1];

      lunchDaySix.textContent = veganized[PlaceIntInArr()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[5]].lunchside[1];

      snackDaySix.textContent = veganized[PlaceIntInArr()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[5]].mealSunsetSide[1];

      supaDaySix.textContent = veganized[PlaceIntInArr()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = veganized[PlaceIntInArr()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[6]].breakfastSide[1];

      lunchDaySeven.textContent = veganized[PlaceIntInArr()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[6]].lunchside[1];

      snackDaySeven.textContent = veganized[PlaceIntInArr()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[6]].mealSunsetSide[1];

      supaDaySeven.textContent = veganized[PlaceIntInArr()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[PlaceIntInArr()[6]].eveningmealside[1];
    } 
    //vegan 2
    else if (
      userDetails.condition === conTwo &&
      userDetails.meal === typeOne
    ) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = vegan2;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = veganWest[PlaceIntInArr()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[0]].breakfastSide[1];

      lunchDayOne.textContent = veganWest[PlaceIntInArr()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[0]].lunchside[1];

      snackDayOne.textContent = veganWest[PlaceIntInArr()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[0]].mealSunsetSide[1];

      supaDayOne.textContent = veganWest[PlaceIntInArr()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = veganWest[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[1]].breakfastSide[1];

      lunchDayTwo.textContent = veganWest[PlaceIntInArr()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[1]].lunchside[1];

      snackDayTwo.textContent = normalized[PlaceIntInArr()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = veganWest[PlaceIntInArr()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = veganWest[PlaceIntInArr()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[2]].breakfastSide[1];

      lunchDayThree.textContent = veganWest[PlaceIntInArr()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[2]].lunchside[1];

      snackDayThree.textContent = veganWest[PlaceIntInArr()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[2]].mealSunsetSide[1];

      supaDayThree.textContent = veganWest[PlaceIntInArr()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = veganWest[PlaceIntInArr()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[3]].breakfastSide[1];

      lunchDayFour.textContent = veganWest[PlaceIntInArr()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[3]].lunchside[1];

      snackDayFour.textContent = veganWest[PlaceIntInArr()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[3]].mealSunsetSide[1];

      supaDayFour.textContent = veganWest[PlaceIntInArr()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = veganWest[PlaceIntInArr()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[4]].breakfastSide[1];

      lunchDayFive.textContent = veganWest[PlaceIntInArr()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[4]].lunchside[1];

      snackDayFive.textContent = veganWest[PlaceIntInArr()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[4]].mealSunsetSide[1];

      supaDayFive.textContent = veganWest[PlaceIntInArr()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = veganWest[PlaceIntInArr()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[5]].breakfastSide[1];

      lunchDaySix.textContent = veganWest[PlaceIntInArr()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[5]].lunchside[1];

      snackDaySix.textContent = veganWest[PlaceIntInArr()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[5]].mealSunsetSide[1];

      supaDaySix.textContent = veganWest[PlaceIntInArr()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = veganWest[PlaceIntInArr()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[6]].breakfastSide[1];

      lunchDaySeven.textContent = veganWest[PlaceIntInArr()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[6]].lunchside[1];

      snackDaySeven.textContent = veganWest[PlaceIntInArr()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[6]].mealSunsetSide[1];

      supaDaySeven.textContent = veganWest[PlaceIntInArr()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[PlaceIntInArr()[6]].eveningmealside[1];
    } else {
      document.write(
        " The " +
          userDetails.condition +
          " condition was picked . " +
          " " +
          userDetails.meal +
          " Meal plan was picked \n " +
          " and " +
          userDetails.age +
          " was the given age"
      );
    }
  }
});
