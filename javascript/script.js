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
  },
];
console.log(normalized[0].breakfast); // to test if the meals can be displayed
// to test the function of place onto page
/*let breakfastDayOne = document.querySelector("#day1 .day-card .breakfast dt");
breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
  normalized[0].breakfast;*/
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
  },
];

function loadMealPlan() {
  PlaceIntInArr(); // this is the arr with random numbers that will be used as index
  //todo : make these variables so that it easy to read
  let typeOne = "western",
    typeTwo = "mix",
    typeThree = "zambian"; // these are the types to compare to
  let conOne = "normal",
    conTwo = "vegan",
    conThree = "diabetic",
    conFour = "pescatarian"; // these are condition
  //if for normal meals
  if (getDetails().condition === conOne && getDetails().meal === typeOne) {
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
    lunchDayTwo.nextElementSibling =
      normalized[PlaceIntInArr()[1]].lunchside[0];
    lunchDayTwo.nextElementSibling.nextElementSibling =
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
//console.log(getDetails().meal);// to test details
//this is the function to stop submit from submiting
let form = document.getElementById("codeSection");
form.addEventListener("submit", function(event) {
  //prevents submit reload
  event.preventDefault();
  //gets users info to be processed by the meal plan function 
  getDetails();
  //loads new page 
  loadPlanPage();
  //on load event listener
});
