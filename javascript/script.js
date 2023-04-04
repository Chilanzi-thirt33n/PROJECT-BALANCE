// This script belongs to David Chilanzi Sensenta of Arbit Designs.
// This script is developed as part of the final dissertation project.
// All rights are reserved, please do not use without proper authorization.
//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch this is for tailwind

//*******************************************************************************FUNCTIONS SECTION ****************************************************************************/
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

//todo :function for loading newpage
function loadPlanPage() {
  window.location.assign("HealthyMeal.html");
}

//** ------------------------------------------------------------- FOOD OBJECTS WITH MEALS  --------------------------------------------------------------
//todo :normal meals
let normalized = [
  //day1
  {
    image: "images/meals/normal",
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
    image: "images/meals/normal",
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
    image: "images/meals/normal",
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
    images: "images/meals/normal",
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
    image: "images/meals/normal",
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
    image: "images/meals/normal",
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
    images: "images/meals/normal",
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
//todo :vegan meals
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
let veganMix = [
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
//todo :Diabetic meals
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
let diabeticMix = [
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

//todo :pescaterian meals
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
let pescatarianMix = [
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
  const norm1 = "Savory Safari Supper",
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
//todo :this is the function to stop submit from submitting
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
//todo :this is the function to stop submit from submitting and works for returning users
let returnForm = document.getElementById("issuedCodeForm");
if (returnForm) {
  returnForm.addEventListener("submit", function (event) {
    //prevents submit reload
    event.preventDefault();
    //gets users info to be processed by the meal plan function
    let details = getSpecialCode();
    if (
      details.Name === norm1 ||details.Name ===
      norm2 ||
      details.Name === vegan1 ||
      details.Name === vegan2 ||
      details.Name === diabetic1 ||
      details.Name === diabetic2 ||
      details.Name === pescatarian1 ||
      details.Namw === pescatarian2
    ) {
      if (details.index0 > 6 || details.index1 > 6 || details.index2 > 6 || details.index3 > 6 || details.index4 > 6 || details.index5 > 6 || details.index6 > 6) {
        let msg = document.getElementById("error-msg");
        msg.innerHTML =
          '<small> error: <em style =" color : #86BC42"> meal picked only has values equal or less than 6 </em> </small>';
      } else {
        // saves the user details to session storage
        sessionStorage.setItem("userDetailsTwo", JSON.stringify(details));
        //loads new page
        loadPlanPage();
      }
    }
    else {
      // saves the user details to session storage
      sessionStorage.setItem("userDetailsTwo", JSON.stringify(details));
      //loads new page
      loadPlanPage();
    }
  });
}

// ** --------------------------------------------------------------- THIS IS THE FUNCTION TO PLACE ON DOCUMENT -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  let loadMeal = document.getElementById("sevenday-plan");
  if (loadMeal) {
    //randomize function is called for seven and fourteen
    PlaceIntInArr();
    PlaceIntInArrTwo();

    // retrieves the user details from session storage
    let userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    let userDetailsTwo = JSON.parse(sessionStorage.getItem("userDetailsTwo"));
   

    //todo :this gets age and offers the recommendation
    let DisplayAge = document.getElementById("Header-Age");
    let DisplayRecommendation = document.querySelector("#Header-Age+p");
    //todo :| 1 - 15 Age | 16 - 25 age| 26 - 45 age| 46 + age
    let OneToFifteen = [
        "Balanced diet with fruits, veggies, lean protein, low-fat dairy, limit sugary & processed foods.",
        "Be active with sports, swimming, or dancing, limit TV and video games.",
      ],
      SixteenToTwentyFive = [
        "Balanced diet with whole foods, limit processed/fast foods, drink water, limit alcohol.",
        "Regular exercise like jogging, cycling, or weights, try yoga or rock climbing.",
      ],
      TwentyFiveToFortyFive = [
        "Whole foods, limit processed/fast foods, drink water, limit alcohol and caffeine.",
        "Regular exercises jogging, cycling, or lifting weights, and try new activities like hiking or martial arts.",
      ],
      fortySixPlus = [
        "Balanced diet with whole foods, lean protein, healthy fats, limit sugar/salt, drink water.",
        "Stay active with walking, swimming, yoga, exercise, social activities for mental health.",
      ],
      RecommendationList = [
        "Balanced diet with whole foods, limit processed/fast foods, drink water, limit alcohol.",
        "Regular exercise like jogging, cycling, or weights, try yoga or rock climbing.",
        "Whole foods, limit processed/fast foods, drink water, limit alcohol and caffeine.",
        "Regular exercises jogging, cycling, or lifting weights, and try new activities like hiking or martial arts.",
        "Balanced diet with whole foods, lean protein, healthy fats, limit sugar/salt, drink water.",
        "Stay active with walking, swimming, yoga, exercise, social activities for mental health.",
      ]; 
    let young = 15,
      teen = 25,
      middleAge = 45,
      oldAge = 46;
    //todo : random function for two and six
    function getRandomOfTwo() {
      let randomInt = Math.floor(Math.random() * 2);
      return randomInt;
    }
    function getRandomOfSix() {
      let randomInt = Math.floor(Math.random() * 6);
      return randomInt;
    }
    // the logic for displaying the data
    if (DisplayAge && userDetails) {
      // to make sure these properties are available
      let UserAge = parseInt(userDetails.age,10); // this changes string to integer
      if (UserAge <= young) {
        DisplayAge.textContent = "Aged " + UserAge;
        DisplayRecommendation.textContent = OneToFifteen[getRandomOfTwo()];
      } else if (UserAge <= teen) {
        DisplayAge.textContent = "Aged " + UserAge;
        DisplayRecommendation.textContent =
          SixteenToTwentyFive[getRandomOfTwo()];
      } else if (UserAge <= middleAge) {
        DisplayAge.textContent = "Aged " + UserAge;
        DisplayRecommendation.textContent =
          TwentyFiveToFortyFive[getRandomOfTwo()];
      } else if ( UserAge >=  oldAge) {
        DisplayAge.textContent = "Aged " + UserAge;
        DisplayRecommendation.textContent = fortySixPlus[getRandomOfTwo()];
      } else {
        DisplayAge.textContent = "Recommendation";
         DisplayRecommendation.textContent = RecommendationList[getRandomOfSix()];
      }
    }
    //todo : make these variables so that it easy to read
    // these are the types of meals users may enter
    let typeOne = "western",
      typeThree = "mix",
      typeTwo = "zambian";

    // these are condition users may enter
    let conOne = "normal",
      conTwo = "vegan",
      conThree = "diabetic",
      conFour = "pescatarian";

    // these are special names tired to the  meal type present

    //************************************************ NORMAL MEAL ***********************************************************/
    // normal one
    if (userDetails && userDetails.condition === conOne && userDetails.meal === typeTwo) {
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
    }
    // normal two
    else if (userDetails && userDetails.condition === conOne && userDetails.meal === typeOne) {
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

      snackDayTwo.textContent = normalWest[PlaceIntInArr()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[PlaceIntInArr()[1]].mealSunsetSide[1];

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
    }
    // normal three
    else if (userDetails &&
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

      breakfastDayThree.textContent =
        normalMix[PlaceIntInArrTwo()[2]].breakfast;
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

      breakfastDaySeven.textContent =
        normalMix[PlaceIntInArrTwo()[6]].breakfast;
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
    // vegan one
    else if (userDetails && userDetails.condition === conTwo && userDetails.meal === typeTwo) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = vegan1;

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
    //vegan two
    else if (userDetails && userDetails.condition === conTwo && userDetails.meal === typeOne) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = vegan2;

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
    }
    // vegan three
    else if ( userDetails &&
      userDetails.condition === conTwo &&
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
      FancyName.textContent = vegan3;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = veganMix[PlaceIntInArrTwo()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[0]].breakfastSide[1];

      lunchDayOne.textContent = veganMix[PlaceIntInArrTwo()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[0]].lunchside[1];

      snackDayOne.textContent = veganMix[PlaceIntInArrTwo()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[0]].mealSunsetSide[1];

      supaDayOne.textContent = veganMix[PlaceIntInArrTwo()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = veganMix[PlaceIntInArrTwo()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[1]].breakfastSide[1];

      lunchDayTwo.textContent = veganMix[PlaceIntInArrTwo()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[1]].lunchside[1];

      snackDayTwo.textContent = veganMix[PlaceIntInArrTwo()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = veganMix[PlaceIntInArrTwo()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = veganMix[PlaceIntInArrTwo()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[2]].breakfastSide[1];

      lunchDayThree.textContent = veganMix[PlaceIntInArrTwo()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[2]].lunchside[1];

      snackDayThree.textContent = veganMix[PlaceIntInArrTwo()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[2]].mealSunsetSide[1];

      supaDayThree.textContent = veganMix[PlaceIntInArrTwo()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = veganMix[PlaceIntInArrTwo()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[3]].breakfastSide[1];

      lunchDayFour.textContent = veganMix[PlaceIntInArrTwo()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[3]].lunchside[1];

      snackDayFour.textContent = veganMix[PlaceIntInArrTwo()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[3]].mealSunsetSide[1];

      supaDayFour.textContent = veganMix[PlaceIntInArrTwo()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = veganMix[PlaceIntInArrTwo()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[4]].breakfastSide[1];

      lunchDayFive.textContent = veganMix[PlaceIntInArrTwo()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[4]].lunchside[1];

      snackDayFive.textContent = veganMix[PlaceIntInArrTwo()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[4]].mealSunsetSide[1];

      supaDayFive.textContent = veganMix[PlaceIntInArrTwo()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = veganMix[PlaceIntInArrTwo()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[5]].breakfastSide[1];

      lunchDaySix.textContent = veganMix[PlaceIntInArrTwo()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[5]].lunchside[1];

      snackDaySix.textContent = veganMix[PlaceIntInArrTwo()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[5]].mealSunsetSide[1];

      supaDaySix.textContent = veganMix[PlaceIntInArrTwo()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = veganMix[PlaceIntInArrTwo()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[6]].breakfastSide[1];

      lunchDaySeven.textContent = veganMix[PlaceIntInArrTwo()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[6]].lunchside[1];

      snackDaySeven.textContent = veganMix[PlaceIntInArrTwo()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[6]].mealSunsetSide[1];

      supaDaySeven.textContent = veganMix[PlaceIntInArrTwo()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganMix[PlaceIntInArrTwo()[6]].eveningmealside[1];
    }
    //***************************************************** DIABETIC MEALS *********************************************************/
    // diabetic one
    else if ( userDetails &&
      userDetails.condition === conThree &&
      userDetails.meal === typeTwo
    ) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = diabetic1;

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

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = diabeticZed[PlaceIntInArr()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[0]].breakfastSide[1];

      lunchDayOne.textContent = diabeticZed[PlaceIntInArr()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[0]].lunchside[1];

      snackDayOne.textContent = diabeticZed[PlaceIntInArr()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[0]].mealSunsetSide[1];

      supaDayOne.textContent = diabeticZed[PlaceIntInArr()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = diabeticZed[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[1]].breakfastSide[1];

      lunchDayTwo.textContent = diabeticZed[PlaceIntInArr()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[1]].lunchside[1];

      snackDayTwo.textContent = normalized[PlaceIntInArr()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = diabeticZed[PlaceIntInArr()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = diabeticZed[PlaceIntInArr()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[2]].breakfastSide[1];

      lunchDayThree.textContent = diabeticZed[PlaceIntInArr()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[2]].lunchside[1];

      snackDayThree.textContent = diabeticZed[PlaceIntInArr()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[2]].mealSunsetSide[1];

      supaDayThree.textContent = diabeticZed[PlaceIntInArr()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = diabeticZed[PlaceIntInArr()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[3]].breakfastSide[1];

      lunchDayFour.textContent = diabeticZed[PlaceIntInArr()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[3]].lunchside[1];

      snackDayFour.textContent = diabeticZed[PlaceIntInArr()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[3]].mealSunsetSide[1];

      supaDayFour.textContent = diabeticZed[PlaceIntInArr()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = diabeticZed[PlaceIntInArr()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[4]].breakfastSide[1];

      lunchDayFive.textContent = diabeticZed[PlaceIntInArr()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[4]].lunchside[1];

      snackDayFive.textContent = diabeticZed[PlaceIntInArr()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[4]].mealSunsetSide[1];

      supaDayFive.textContent = diabeticZed[PlaceIntInArr()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = diabeticZed[PlaceIntInArr()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[5]].breakfastSide[1];

      lunchDaySix.textContent = diabeticZed[PlaceIntInArr()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[5]].lunchside[1];

      snackDaySix.textContent = diabeticZed[PlaceIntInArr()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[5]].mealSunsetSide[1];

      supaDaySix.textContent = diabeticZed[PlaceIntInArr()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = diabeticZed[PlaceIntInArr()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[6]].breakfastSide[1];

      lunchDaySeven.textContent = diabeticZed[PlaceIntInArr()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[6]].lunchside[1];

      snackDaySeven.textContent = diabeticZed[PlaceIntInArr()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[6]].mealSunsetSide[1];

      supaDaySeven.textContent = diabeticZed[PlaceIntInArr()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[PlaceIntInArr()[6]].eveningmealside[1];
    }
    // diabetic two
    else if ( userDetails &&
      userDetails.condition === conThree &&
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
      FancyName.textContent = diabetic2;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = diabeticWest[PlaceIntInArr()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[0]].breakfastSide[1];

      lunchDayOne.textContent = diabeticWest[PlaceIntInArr()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[0]].lunchside[1];

      snackDayOne.textContent = diabeticWest[PlaceIntInArr()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[0]].mealSunsetSide[1];

      supaDayOne.textContent = diabeticWest[PlaceIntInArr()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = diabeticWest[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[1]].breakfastSide[1];

      lunchDayTwo.textContent = diabeticWest[PlaceIntInArr()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[1]].lunchside[1];

      snackDayTwo.textContent = diabeticWest[PlaceIntInArr()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = diabeticWest[PlaceIntInArr()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        diabeticWest[PlaceIntInArr()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[2]].breakfastSide[1];

      lunchDayThree.textContent = diabeticWest[PlaceIntInArr()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[2]].lunchside[1];

      snackDayThree.textContent = diabeticWest[PlaceIntInArr()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[2]].mealSunsetSide[1];

      supaDayThree.textContent = diabeticWest[PlaceIntInArr()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = diabeticWest[PlaceIntInArr()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[3]].breakfastSide[1];

      lunchDayFour.textContent = diabeticWest[PlaceIntInArr()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[3]].lunchside[1];

      snackDayFour.textContent = diabeticWest[PlaceIntInArr()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[3]].mealSunsetSide[1];

      supaDayFour.textContent = diabeticWest[PlaceIntInArr()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = diabeticWest[PlaceIntInArr()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[4]].breakfastSide[1];

      lunchDayFive.textContent = diabeticWest[PlaceIntInArr()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[4]].lunchside[1];

      snackDayFive.textContent = diabeticWest[PlaceIntInArr()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[4]].mealSunsetSide[1];

      supaDayFive.textContent = diabeticWest[PlaceIntInArr()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = diabeticWest[PlaceIntInArr()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[5]].breakfastSide[1];

      lunchDaySix.textContent = diabeticWest[PlaceIntInArr()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[5]].lunchside[1];

      snackDaySix.textContent = diabeticWest[PlaceIntInArr()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[5]].mealSunsetSide[1];

      supaDaySix.textContent = diabeticWest[PlaceIntInArr()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        diabeticWest[PlaceIntInArr()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[6]].breakfastSide[1];

      lunchDaySeven.textContent = diabeticWest[PlaceIntInArr()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[6]].lunchside[1];

      snackDaySeven.textContent = diabeticWest[PlaceIntInArr()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[6]].mealSunsetSide[1];

      supaDaySeven.textContent = diabeticWest[PlaceIntInArr()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[PlaceIntInArr()[6]].eveningmealside[1];
    }
    // diabetic three
    else if ( userDetails &&
      userDetails.condition === conThree &&
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
      FancyName.textContent = diabetic3;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent =
        diabeticMix[PlaceIntInArrTwo()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[0]].breakfastSide[1];

      lunchDayOne.textContent = diabeticMix[PlaceIntInArrTwo()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[0]].lunchside[1];

      snackDayOne.textContent = diabeticMix[PlaceIntInArrTwo()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[0]].mealSunsetSide[1];

      supaDayOne.textContent = diabeticMix[PlaceIntInArrTwo()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent =
        diabeticMix[PlaceIntInArrTwo()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[1]].breakfastSide[1];

      lunchDayTwo.textContent = diabeticMix[PlaceIntInArrTwo()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[1]].lunchside[1];

      snackDayTwo.textContent = diabeticMix[PlaceIntInArrTwo()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = diabeticMix[PlaceIntInArrTwo()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        diabeticMix[PlaceIntInArrTwo()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[2]].breakfastSide[1];

      lunchDayThree.textContent = diabeticMix[PlaceIntInArrTwo()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[2]].lunchside[1];

      snackDayThree.textContent = diabeticMix[PlaceIntInArrTwo()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[2]].mealSunsetSide[1];

      supaDayThree.textContent = diabeticMix[PlaceIntInArrTwo()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent =
        diabeticMix[PlaceIntInArrTwo()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[3]].breakfastSide[1];

      lunchDayFour.textContent = diabeticMix[PlaceIntInArrTwo()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[3]].lunchside[1];

      snackDayFour.textContent = diabeticMix[PlaceIntInArrTwo()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[3]].mealSunsetSide[1];

      supaDayFour.textContent = diabeticMix[PlaceIntInArrTwo()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent =
        diabeticMix[PlaceIntInArrTwo()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[4]].breakfastSide[1];

      lunchDayFive.textContent = diabeticMix[PlaceIntInArrTwo()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[4]].lunchside[1];

      snackDayFive.textContent = diabeticMix[PlaceIntInArrTwo()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[4]].mealSunsetSide[1];

      supaDayFive.textContent = diabeticMix[PlaceIntInArrTwo()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent =
        diabeticMix[PlaceIntInArrTwo()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[5]].breakfastSide[1];

      lunchDaySix.textContent = diabeticMix[PlaceIntInArrTwo()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[5]].lunchside[1];

      snackDaySix.textContent = diabeticMix[PlaceIntInArrTwo()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[5]].mealSunsetSide[1];

      supaDaySix.textContent = diabeticMix[PlaceIntInArrTwo()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        diabeticMix[PlaceIntInArrTwo()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[6]].breakfastSide[1];

      lunchDaySeven.textContent = diabeticMix[PlaceIntInArrTwo()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[6]].lunchside[1];

      snackDaySeven.textContent = diabeticMix[PlaceIntInArrTwo()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[6]].mealSunsetSide[1];

      supaDaySeven.textContent = diabeticMix[PlaceIntInArrTwo()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[PlaceIntInArrTwo()[6]].eveningmealside[1];
    }
    // Pescaerian one
    else if (userDetails &&
      userDetails.condition === conFour &&
      userDetails.meal === typeTwo
    ) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = pescatarian1;

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

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent =
        pescatarianZed[PlaceIntInArr()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[0]].breakfastSide[1];

      lunchDayOne.textContent = pescatarianZed[PlaceIntInArr()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[0]].lunchside[1];

      snackDayOne.textContent = pescatarianZed[PlaceIntInArr()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[0]].mealSunsetSide[1];

      supaDayOne.textContent = pescatarianZed[PlaceIntInArr()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent =
        pescatarianZed[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[1]].breakfastSide[1];

      lunchDayTwo.textContent = pescatarianZed[PlaceIntInArr()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[1]].lunchside[1];

      snackDayTwo.textContent = normalized[PlaceIntInArr()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = pescatarianZed[PlaceIntInArr()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        pescatarianZed[PlaceIntInArr()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[2]].breakfastSide[1];

      lunchDayThree.textContent = pescatarianZed[PlaceIntInArr()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[2]].lunchside[1];

      snackDayThree.textContent = pescatarianZed[PlaceIntInArr()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[2]].mealSunsetSide[1];

      supaDayThree.textContent = pescatarianZed[PlaceIntInArr()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent =
        pescatarianZed[PlaceIntInArr()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[3]].breakfastSide[1];

      lunchDayFour.textContent = pescatarianZed[PlaceIntInArr()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[3]].lunchside[1];

      snackDayFour.textContent = pescatarianZed[PlaceIntInArr()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[3]].mealSunsetSide[1];

      supaDayFour.textContent = pescatarianZed[PlaceIntInArr()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent =
        pescatarianZed[PlaceIntInArr()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[4]].breakfastSide[1];

      lunchDayFive.textContent = pescatarianZed[PlaceIntInArr()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[4]].lunchside[1];

      snackDayFive.textContent = pescatarianZed[PlaceIntInArr()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[4]].mealSunsetSide[1];

      supaDayFive.textContent = pescatarianZed[PlaceIntInArr()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent =
        pescatarianZed[PlaceIntInArr()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[5]].breakfastSide[1];

      lunchDaySix.textContent = pescatarianZed[PlaceIntInArr()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[5]].lunchside[1];

      snackDaySix.textContent = pescatarianZed[PlaceIntInArr()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[5]].mealSunsetSide[1];

      supaDaySix.textContent = pescatarianZed[PlaceIntInArr()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        pescatarianZed[PlaceIntInArr()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[6]].breakfastSide[1];

      lunchDaySeven.textContent = pescatarianZed[PlaceIntInArr()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[6]].lunchside[1];

      snackDaySeven.textContent = pescatarianZed[PlaceIntInArr()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[6]].mealSunsetSide[1];

      supaDaySeven.textContent = pescatarianZed[PlaceIntInArr()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[PlaceIntInArr()[6]].eveningmealside[1];
    }
    // pescatarian Two
    else if (userDetails &&
      userDetails.condition === conFour &&
      userDetails.meal === typeOne
    ) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = pescatarian2;

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

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent =
        pescatarianWest[PlaceIntInArr()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[0]].breakfastSide[1];

      lunchDayOne.textContent = pescatarianWest[PlaceIntInArr()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[0]].lunchside[1];

      snackDayOne.textContent = pescatarianWest[PlaceIntInArr()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[0]].mealSunsetSide[1];

      supaDayOne.textContent = pescatarianWest[PlaceIntInArr()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent =
        pescatarianWest[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[1]].breakfastSide[1];

      lunchDayTwo.textContent = pescatarianWest[PlaceIntInArr()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[1]].lunchside[1];

      snackDayTwo.textContent = normalized[PlaceIntInArr()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[PlaceIntInArr()[1]].mealSunsetSide[1];

      supaDayTwo.textContent = pescatarianWest[PlaceIntInArr()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        pescatarianWest[PlaceIntInArr()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[2]].breakfastSide[1];

      lunchDayThree.textContent = pescatarianWest[PlaceIntInArr()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[2]].lunchside[1];

      snackDayThree.textContent =
        pescatarianWest[PlaceIntInArr()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[2]].mealSunsetSide[1];

      supaDayThree.textContent =
        pescatarianWest[PlaceIntInArr()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent =
        pescatarianWest[PlaceIntInArr()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[3]].breakfastSide[1];

      lunchDayFour.textContent = pescatarianWest[PlaceIntInArr()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[3]].lunchside[1];

      snackDayFour.textContent = pescatarianWest[PlaceIntInArr()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[3]].mealSunsetSide[1];

      supaDayFour.textContent = pescatarianWest[PlaceIntInArr()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent =
        pescatarianWest[PlaceIntInArr()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[4]].breakfastSide[1];

      lunchDayFive.textContent = pescatarianWest[PlaceIntInArr()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[4]].lunchside[1];

      snackDayFive.textContent = pescatarianWest[PlaceIntInArr()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[4]].mealSunsetSide[1];

      supaDayFive.textContent = pescatarianWest[PlaceIntInArr()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent =
        pescatarianWest[PlaceIntInArr()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[5]].breakfastSide[1];

      lunchDaySix.textContent = pescatarianWest[PlaceIntInArr()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[5]].lunchside[1];

      snackDaySix.textContent = pescatarianWest[PlaceIntInArr()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[5]].mealSunsetSide[1];

      supaDaySix.textContent = pescatarianWest[PlaceIntInArr()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        pescatarianWest[PlaceIntInArr()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[6]].breakfastSide[1];

      lunchDaySeven.textContent = pescatarianWest[PlaceIntInArr()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[6]].lunchside[1];

      snackDaySeven.textContent =
        pescatarianWest[PlaceIntInArr()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[6]].mealSunsetSide[1];

      supaDaySeven.textContent =
        pescatarianWest[PlaceIntInArr()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[PlaceIntInArr()[6]].eveningmealside[1];
    }
    // pescaterian three
    else if (userDetails &&
      userDetails.condition === conFour &&
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
      FancyName.textContent = pescatarian3;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].breakfastSide[1];

      lunchDayOne.textContent = pescatarianMix[PlaceIntInArrTwo()[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].lunchside[1];

      snackDayOne.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].mealSunsetSide[1];

      supaDayOne.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].breakfastSide[1];

      lunchDayTwo.textContent = pescatarianMix[PlaceIntInArrTwo()[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].lunchside[1];

      snackDayTwo.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].mealSunsetSide[1];

      supaDayTwo.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].breakfastSide[1];

      lunchDayThree.textContent = pescatarianMix[PlaceIntInArrTwo()[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].lunchside[1];

      snackDayThree.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].mealSunsetSide[1];

      supaDayThree.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].breakfastSide[1];

      lunchDayFour.textContent = pescatarianMix[PlaceIntInArrTwo()[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].lunchside[1];

      snackDayFour.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].mealSunsetSide[1];

      supaDayFour.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].breakfastSide[1];

      lunchDayFive.textContent = pescatarianMix[PlaceIntInArrTwo()[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].lunchside[1];

      snackDayFive.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].mealSunsetSide[1];

      supaDayFive.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].breakfastSide[1];

      lunchDaySix.textContent = pescatarianMix[PlaceIntInArrTwo()[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].lunchside[1];

      snackDaySix.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].mealSunsetSide[1];

      supaDaySix.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].breakfastSide[1];

      lunchDaySeven.textContent = pescatarianMix[PlaceIntInArrTwo()[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].lunchside[1];

      snackDaySeven.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].mealSunsetSide[1];

      supaDaySeven.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[PlaceIntInArrTwo()[6]].eveningmealside[1];
    } 
    // ** normal 1 returning customer
    else if (userDetailsTwo && userDetailsTwo.Name === norm1) {
      // creates index for accessing the meal index
      let index0 = parseInt(userDetailsTwo.index0, 10);
      let index1 = parseInt(userDetailsTwo.index1, 10);
      let index2 = parseInt(userDetailsTwo.index2, 10);
      let index3 = parseInt(userDetailsTwo.index3, 10);
      let index4 = parseInt(userDetailsTwo.index4, 10);
      let index5 = parseInt(userDetailsTwo.index5, 10);
      let index6 = parseInt(userDetailsTwo.index6, 10);
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        index0 +
        " - " +
        index1 +
        " - " +
        index2 +
        " - " +
        index3 +
        " - " +
        index4 +
        " - " +
        index5 +
        " - " +
        index6;

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

      breakfastDayOne.textContent = normalized[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalized[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].breakfastSide[1];

      lunchDayOne.textContent = normalized[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalized[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].lunchside[1];

      snackDayOne.textContent = normalized[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalized[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].mealSunsetSide[1];

      supaDayOne.textContent = normalized[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalized[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalized[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalized[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].breakfastSide[1];

      lunchDayTwo.textContent = normalized[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalized[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].lunchside[1];

      snackDayTwo.textContent = normalized[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].mealSunsetSide[1];

      supaDayTwo.textContent = normalized[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalized[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = normalized[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalized[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].breakfastSide[1];

      lunchDayThree.textContent = normalized[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalized[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].lunchside[1];

      snackDayThree.textContent = normalized[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalized[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].mealSunsetSide[1];

      supaDayThree.textContent = normalized[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalized[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalized[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalized[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].breakfastSide[1];

      lunchDayFour.textContent = normalized[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalized[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].lunchside[1];

      snackDayFour.textContent = normalized[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalized[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].mealSunsetSide[1];

      supaDayFour.textContent = normalized[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalized[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalized[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalized[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].breakfastSide[1];

      lunchDayFive.textContent = normalized[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalized[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].lunchside[1];

      snackDayFive.textContent = normalized[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalized[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].mealSunsetSide[1];

      supaDayFive.textContent = normalized[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalized[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalized[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalized[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].breakfastSide[1];

      lunchDaySix.textContent = normalized[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalized[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].lunchside[1];

      snackDaySix.textContent = normalized[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalized[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].mealSunsetSide[1];

      supaDaySix.textContent = normalized[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalized[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = normalized[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalized[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].breakfastSide[1];

      lunchDaySeven.textContent = normalized[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalized[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].lunchside[1];

      snackDaySeven.textContent = normalized[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalized[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].mealSunsetSide[1];

      supaDaySeven.textContent = normalized[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalized[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].eveningmealside[1];
    } 
    // ** normal 2 returning customer
    else if (userDetailsTwo && userDetailsTwo.Name === norm2) {
      // creates index for accessing the meal index
      let index0 = parseInt(userDetailsTwo.index0, 10);
      let index1 = parseInt(userDetailsTwo.index1, 10);
      let index2 = parseInt(userDetailsTwo.index2, 10);
      let index3 = parseInt(userDetailsTwo.index3, 10);
      let index4 = parseInt(userDetailsTwo.index4, 10);
      let index5 = parseInt(userDetailsTwo.index5, 10);
      let index6 = parseInt(userDetailsTwo.index6, 10);
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        index0 +
        " - " +
        index1 +
        " - " +
        index2 +
        " - " +
        index3 +
        " - " +
        index4 +
        " - " +
        index5 +
        " - " +
        index6;

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

      breakfastDayOne.textContent = normalized[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalized[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].breakfastSide[1];

      lunchDayOne.textContent = normalized[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalized[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].lunchside[1];

      snackDayOne.textContent = normalized[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalized[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].mealSunsetSide[1];

      supaDayOne.textContent = normalized[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalized[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalized[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalized[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].breakfastSide[1];

      lunchDayTwo.textContent = normalized[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalized[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].lunchside[1];

      snackDayTwo.textContent = normalized[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].mealSunsetSide[1];

      supaDayTwo.textContent = normalized[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalized[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = normalized[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalized[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].breakfastSide[1];

      lunchDayThree.textContent = normalized[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalized[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].lunchside[1];

      snackDayThree.textContent = normalized[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalized[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].mealSunsetSide[1];

      supaDayThree.textContent = normalized[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalized[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalized[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalized[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].breakfastSide[1];

      lunchDayFour.textContent = normalized[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalized[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].lunchside[1];

      snackDayFour.textContent = normalized[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalized[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].mealSunsetSide[1];

      supaDayFour.textContent = normalized[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalized[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalized[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalized[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].breakfastSide[1];

      lunchDayFive.textContent = normalized[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalized[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].lunchside[1];

      snackDayFive.textContent = normalized[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalized[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].mealSunsetSide[1];

      supaDayFive.textContent = normalized[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalized[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalized[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalized[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].breakfastSide[1];

      lunchDaySix.textContent = normalized[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalized[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].lunchside[1];

      snackDaySix.textContent = normalized[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalized[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].mealSunsetSide[1];

      supaDaySix.textContent = normalized[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalized[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = normalized[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalized[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].breakfastSide[1];

      lunchDaySeven.textContent = normalized[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalized[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].lunchside[1];

      snackDaySeven.textContent = normalized[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalized[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].mealSunsetSide[1];

      supaDaySeven.textContent = normalized[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalized[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].eveningmealside[1];
    }
    //** Normal 3 returnomg customer */
    else if (userDetailsTwo && userDetailsTwo.Name === norm3) {
      // creates index for accessing the meal index
      let index0 = parseInt(userDetailsTwo.index0, 10);
      let index1 = parseInt(userDetailsTwo.index1, 10);
      let index2 = parseInt(userDetailsTwo.index2, 10);
      let index3 = parseInt(userDetailsTwo.index3, 10);
      let index4 = parseInt(userDetailsTwo.index4, 10);
      let index5 = parseInt(userDetailsTwo.index5, 10);
      let index6 = parseInt(userDetailsTwo.index6, 10);
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        index0 +
        " - " +
        index1 +
        " - " +
        index2 +
        " - " +
        index3 +
        " - " +
        index4 +
        " - " +
        index5 +
        " - " +
        index6;

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

      breakfastDayOne.textContent = normalized[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalized[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].breakfastSide[1];

      lunchDayOne.textContent = normalized[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalized[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].lunchside[1];

      snackDayOne.textContent = normalized[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalized[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].mealSunsetSide[1];

      supaDayOne.textContent = normalized[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalized[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalized[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalized[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].breakfastSide[1];

      lunchDayTwo.textContent = normalized[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalized[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].lunchside[1];

      snackDayTwo.textContent = normalized[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].mealSunsetSide[1];

      supaDayTwo.textContent = normalized[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalized[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = normalized[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalized[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].breakfastSide[1];

      lunchDayThree.textContent = normalized[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalized[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].lunchside[1];

      snackDayThree.textContent = normalized[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalized[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].mealSunsetSide[1];

      supaDayThree.textContent = normalized[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalized[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalized[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalized[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].breakfastSide[1];

      lunchDayFour.textContent = normalized[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalized[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].lunchside[1];

      snackDayFour.textContent = normalized[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalized[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].mealSunsetSide[1];

      supaDayFour.textContent = normalized[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalized[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalized[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalized[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].breakfastSide[1];

      lunchDayFive.textContent = normalized[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalized[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].lunchside[1];

      snackDayFive.textContent = normalized[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalized[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].mealSunsetSide[1];

      supaDayFive.textContent = normalized[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalized[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalized[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalized[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].breakfastSide[1];

      lunchDaySix.textContent = normalized[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalized[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].lunchside[1];

      snackDaySix.textContent = normalized[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalized[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].mealSunsetSide[1];

      supaDaySix.textContent = normalized[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalized[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = normalized[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalized[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].breakfastSide[1];

      lunchDaySeven.textContent = normalized[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalized[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].lunchside[1];

      snackDaySeven.textContent = normalized[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalized[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].mealSunsetSide[1];

      supaDaySeven.textContent = normalized[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalized[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[index6].eveningmealside[1];
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

//****** BUTTONs FUNCTIONALITY *********/

//todo :this is for randomizing the exported information
let button = document.querySelectorAll("#random-btn button, #random-btn img ");
button.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e) {
      location.reload();
    }
  });
});
