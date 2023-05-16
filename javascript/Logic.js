// This script belongs to David Chilanzi Sensenta of Arbit Designs.
// This script is developed as part of the final dissertation project.
// All rights are reserved, please do not use without proper authorization.
//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch this is for tailwind

import {
  normalized,
  normalWest,
  normalMix,
  veganized,
  veganWest,
  veganMix,
  diabeticZed,
  diabeticWest,
  diabeticMix,
  pescatarianZed,
  pescatarianWest,
  pescatarianMix,
} from "./meals.js";

import {
  PlaceIntInArr,
  PlaceIntInArrTwo,
  getDetails,
  loadPlanPage,
  getRandomOfTwo,
  getRandomOfSix,
  getSpecialCode,
} from "./methods.js";

//todo : make these variables so that it easy to read
// these are the types of meals users may enter
const typeOne = "western",
  typeThree = "mix",
  typeTwo = "zambian";

// these are condition users may enter
const conOne = "normal",
  conTwo = "vegan",
  conThree = "diabetic",
  conFour = "pescatarian";

//these are age ranges
const young = 15,
  teen = 25,
  middleAge = 45,
  oldAge = 46;

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
      details.Name === norm1 ||
      details.Name === norm2 ||
      details.Name === vegan1 ||
      details.Name === vegan2 ||
      details.Name === diabetic1 ||
      details.Name === diabetic2 ||
      details.Name === pescatarian1 ||
      details.Namw === pescatarian2
    ) {
      if (
        details.index0 > 6 ||
        details.index1 > 6 ||
        details.index2 > 6 ||
        details.index3 > 6 ||
        details.index4 > 6 ||
        details.index5 > 6 ||
        details.index6 > 6
      ) {
        let msg = document.getElementById("error-msg");
        msg.innerHTML =
          '<small style = "text-align : center" > <em style =" color : #86BC42">Meal code Error: </em>  meal picked only has values from 0 to 6   </small>';
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
   let indexGiven = PlaceIntInArr();
   let indexGiven2 = PlaceIntInArrTwo();

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
        "Balanced diet with whole foods, limit processed fast foods, drink water, limit alcohol.",
        "Regular exercise like jogging, cycling, or weights, try yoga or rock climbing.",
      ],
      TwentyFiveToFortyFive = [
        "Whole foods, limit processed fast foods, drink water, limit alcohol and caffeine.",
        "Regular exercises jogging, cycling, or lifting weights, and try new activities like hiking or martial arts.",
      ],
      fortySixPlus = [
        "Balanced diet with whole foods, lean protein, healthy fats, limit sugar salt, drink water.",
        "Stay active with walking, swimming, yoga, exercise, social activities for mental health.",
      ],
      RecommendationList = [
        "Balanced diet with whole foods, limit processed/fast foods, drink water, limit alcohol.",
        "Regular exercise like jogging, cycling, or weights, try yoga or rock climbing.",
        "Whole foods, limit processed fast foods, drink water, limit alcohol and caffeine.",
        "Regular exercises jogging, cycling, or lifting weights, and try new activities like hiking or martial arts.",
        "Balanced diet with whole foods, lean protein, healthy fats, limit sugar salt, drink water.",
        "Stay active with walking, swimming, yoga, exercise, social activities for mental health.",
      ];
    // the logic for displaying the data
    if (DisplayAge && userDetails) {
      // to make sure these properties are available
      let UserAge = parseInt(userDetails.age, 10); // this changes string to integer
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
      } else if (UserAge >= oldAge) {
        DisplayAge.textContent = "Aged " + UserAge;
        DisplayRecommendation.textContent = fortySixPlus[getRandomOfTwo()];
      } else {
        DisplayAge.textContent = "Recommendation";
        DisplayRecommendation.textContent =
          RecommendationList[getRandomOfSix()];
      }
    }

    //************************************************ NORMAL MEAL ***********************************************************/
    // normal one
    if (
      userDetails &&
      userDetails.condition === conOne &&
      userDetails.meal === typeTwo
    ) {
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven[0] +
        " - " +
        indexGiven[1] +
        " - " +
        indexGiven[2] +
        " - " +
        indexGiven[3] +
        " - " +
        indexGiven[4] +
        " - " +
        indexGiven[5] +
        " - " +
        indexGiven[6];

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

      breakfastDayOne.textContent = normalized[indexGiven[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalized[indexGiven[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[0]].breakfastSide[1];

      lunchDayOne.textContent = normalized[indexGiven[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalized[indexGiven[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[0]].lunchside[1];

      snackDayOne.textContent = normalized[indexGiven[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalized[indexGiven[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[0]].mealSunsetSide[1];

      supaDayOne.textContent = normalized[indexGiven[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalized[indexGiven[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalized[indexGiven[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalized[indexGiven[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[1]].breakfastSide[1];

      lunchDayTwo.textContent = normalized[indexGiven[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalized[indexGiven[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[1]].lunchside[1];

      snackDayTwo.textContent = normalized[indexGiven[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[1];

      supaDayTwo.textContent = normalized[indexGiven[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalized[indexGiven[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = normalized[indexGiven[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalized[indexGiven[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[2]].breakfastSide[1];

      lunchDayThree.textContent = normalized[indexGiven[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalized[indexGiven[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[2]].lunchside[1];

      snackDayThree.textContent = normalized[indexGiven[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalized[indexGiven[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[2]].mealSunsetSide[1];

      supaDayThree.textContent = normalized[indexGiven[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalized[indexGiven[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalized[indexGiven[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalized[indexGiven[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[3]].breakfastSide[1];

      lunchDayFour.textContent = normalized[indexGiven[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalized[indexGiven[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[3]].lunchside[1];

      snackDayFour.textContent = normalized[indexGiven[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalized[indexGiven[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[3]].mealSunsetSide[1];

      supaDayFour.textContent = normalized[indexGiven[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalized[indexGiven[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalized[indexGiven[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalized[indexGiven[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[4]].breakfastSide[1];

      lunchDayFive.textContent = normalized[indexGiven[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalized[indexGiven[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[4]].lunchside[1];

      snackDayFive.textContent = normalized[indexGiven[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalized[indexGiven[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[4]].mealSunsetSide[1];

      supaDayFive.textContent = normalized[indexGiven[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalized[indexGiven[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalized[indexGiven[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalized[indexGiven[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[5]].breakfastSide[1];

      lunchDaySix.textContent = normalized[indexGiven[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalized[indexGiven[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[5]].lunchside[1];

      snackDaySix.textContent = normalized[indexGiven[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalized[indexGiven[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[5]].mealSunsetSide[1];

      supaDaySix.textContent = normalized[indexGiven[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalized[indexGiven[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = normalized[indexGiven[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalized[indexGiven[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[6]].breakfastSide[1];

      lunchDaySeven.textContent = normalized[indexGiven[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalized[indexGiven[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[6]].lunchside[1];

      snackDaySeven.textContent = normalized[indexGiven[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalized[indexGiven[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[6]].mealSunsetSide[1];

      supaDaySeven.textContent = normalized[indexGiven[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalized[indexGiven[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[6]].eveningmealside[1];
    }
    // normal two
    else if (
      userDetails &&
      userDetails.condition === conOne &&
      userDetails.meal === typeOne
    ) {
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven[0] +
        " - " +
        indexGiven[1] +
        " - " +
        indexGiven[2] +
        " - " +
        indexGiven[3] +
        " - " +
        indexGiven[4] +
        " - " +
        indexGiven[5] +
        " - " +
        indexGiven[6];
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

      breakfastDayOne.textContent = normalWest[indexGiven[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalWest[indexGiven[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[0]].breakfastSide[1];

      lunchDayOne.textContent = normalWest[indexGiven[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalWest[indexGiven[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[0]].lunchside[1];

      snackDayOne.textContent = normalWest[indexGiven[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalWest[indexGiven[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[0]].mealSunsetSide[1];

      supaDayOne.textContent = normalWest[indexGiven[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalWest[indexGiven[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalWest[indexGiven[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalWest[indexGiven[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[1]].breakfastSide[1];

      lunchDayTwo.textContent = normalWest[indexGiven[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalWest[indexGiven[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[1]].lunchside[1];

      snackDayTwo.textContent = normalWest[indexGiven[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalWest[indexGiven[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[1]].mealSunsetSide[1];

      supaDayTwo.textContent = normalWest[indexGiven[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalWest[indexGiven[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = normalWest[indexGiven[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalWest[indexGiven[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[2]].breakfastSide[1];

      lunchDayThree.textContent = normalWest[indexGiven[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalWest[indexGiven[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[2]].lunchside[1];

      snackDayThree.textContent = normalWest[indexGiven[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalWest[indexGiven[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[2]].mealSunsetSide[1];

      supaDayThree.textContent = normalWest[indexGiven[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalWest[indexGiven[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalWest[indexGiven[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalWest[indexGiven[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[3]].breakfastSide[1];

      lunchDayFour.textContent = normalWest[indexGiven[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalWest[indexGiven[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[3]].lunchside[1];

      snackDayFour.textContent = normalWest[indexGiven[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalWest[indexGiven[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[3]].mealSunsetSide[1];

      supaDayFour.textContent = normalWest[indexGiven[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalWest[indexGiven[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalWest[indexGiven[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalWest[indexGiven[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[4]].breakfastSide[1];

      lunchDayFive.textContent = normalWest[indexGiven[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalWest[indexGiven[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[4]].lunchside[1];

      snackDayFive.textContent = normalWest[indexGiven[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalWest[indexGiven[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[4]].mealSunsetSide[1];

      supaDayFive.textContent = normalWest[indexGiven[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalWest[indexGiven[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalWest[indexGiven[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalWest[indexGiven[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[5]].breakfastSide[1];

      lunchDaySix.textContent = normalWest[indexGiven[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalWest[indexGiven[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[5]].lunchside[1];

      snackDaySix.textContent = normalWest[indexGiven[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalWest[indexGiven[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[5]].mealSunsetSide[1];

      supaDaySix.textContent = normalWest[indexGiven[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalWest[indexGiven[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = normalWest[indexGiven[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalWest[indexGiven[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[6]].breakfastSide[1];

      lunchDaySeven.textContent = normalWest[indexGiven[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalWest[indexGiven[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[6]].lunchside[1];

      snackDaySeven.textContent = normalWest[indexGiven[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalWest[indexGiven[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[6]].mealSunsetSide[1];

      supaDaySeven.textContent = normalWest[indexGiven[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalWest[indexGiven[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[indexGiven[6]].eveningmealside[1];
    }
    // normal three
    else if (
      userDetails &&
      userDetails.condition === conOne &&
      userDetails.meal === typeThree
    ) {
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven2[0] +
        " - " +
        indexGiven2[1] +
        " - " +
        indexGiven2[2] +
        " - " +
        indexGiven2[3] +
        " - " +
        indexGiven2[4] +
        " - " +
        indexGiven2[5] +
        " - " +
        indexGiven2[6];
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

      breakfastDayOne.textContent = normalMix[indexGiven2[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalMix[indexGiven2[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[0]].breakfastSide[1];

      lunchDayOne.textContent = normalMix[indexGiven2[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalMix[indexGiven2[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[0]].lunchside[1];

      snackDayOne.textContent = normalMix[indexGiven2[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalMix[indexGiven2[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[0]].mealSunsetSide[1];

      supaDayOne.textContent = normalMix[indexGiven2[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalMix[indexGiven2[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalMix[indexGiven2[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalMix[indexGiven2[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[1]].breakfastSide[1];

      lunchDayTwo.textContent = normalMix[indexGiven2[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalMix[indexGiven2[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[1]].lunchside[1];

      snackDayTwo.textContent = normalMix[indexGiven2[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalMix[indexGiven2[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[1]].mealSunsetSide[1];

      supaDayTwo.textContent = normalMix[indexGiven2[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalMix[indexGiven2[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        normalMix[indexGiven2[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalMix[indexGiven2[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[2]].breakfastSide[1];

      lunchDayThree.textContent = normalMix[indexGiven2[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalMix[indexGiven2[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[2]].lunchside[1];

      snackDayThree.textContent = normalMix[indexGiven2[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalMix[indexGiven2[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[2]].mealSunsetSide[1];

      supaDayThree.textContent = normalMix[indexGiven2[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalMix[indexGiven2[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalMix[indexGiven2[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalMix[indexGiven2[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[3]].breakfastSide[1];

      lunchDayFour.textContent = normalMix[indexGiven2[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalMix[indexGiven2[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[3]].lunchside[1];

      snackDayFour.textContent = normalMix[indexGiven2[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalMix[indexGiven2[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[3]].mealSunsetSide[1];

      supaDayFour.textContent = normalMix[indexGiven2[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalMix[indexGiven2[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalMix[indexGiven2[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalMix[indexGiven2[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[4]].breakfastSide[1];

      lunchDayFive.textContent = normalMix[indexGiven2[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalMix[indexGiven2[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[4]].lunchside[1];

      snackDayFive.textContent = normalMix[indexGiven2[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalMix[indexGiven2[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[4]].mealSunsetSide[1];

      supaDayFive.textContent = normalMix[indexGiven2[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalMix[indexGiven2[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalMix[indexGiven2[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalMix[indexGiven2[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[5]].breakfastSide[1];

      lunchDaySix.textContent = normalMix[indexGiven2[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalMix[indexGiven2[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[5]].lunchside[1];

      snackDaySix.textContent = normalMix[indexGiven2[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalMix[indexGiven2[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[5]].mealSunsetSide[1];

      supaDaySix.textContent = normalMix[indexGiven2[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalMix[indexGiven2[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        normalMix[indexGiven2[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalMix[indexGiven2[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[6]].breakfastSide[1];

      lunchDaySeven.textContent = normalMix[indexGiven2[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalMix[indexGiven2[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[6]].lunchside[1];

      snackDaySeven.textContent = normalMix[indexGiven2[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalMix[indexGiven2[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[6]].mealSunsetSide[1];

      supaDaySeven.textContent = normalMix[indexGiven2[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalMix[indexGiven2[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[indexGiven2[6]].eveningmealside[1];
    }
    //******************************************************* VEGAN MEALS ***********************************************************/
    // vegan one
    else if (
      userDetails &&
      userDetails.condition === conTwo &&
      userDetails.meal === typeTwo
    ) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = vegan1;

      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven[0] +
        " - " +
        indexGiven[1] +
        " - " +
        indexGiven[2] +
        " - " +
        indexGiven[3] +
        " - " +
        indexGiven[4] +
        " - " +
        indexGiven[5] +
        " - " +
        indexGiven[6];

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = veganized[indexGiven[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        veganized[indexGiven[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[0]].breakfastSide[1];

      lunchDayOne.textContent = veganized[indexGiven[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        veganized[indexGiven[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[0]].lunchside[1];

      snackDayOne.textContent = veganized[indexGiven[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        veganized[indexGiven[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[0]].mealSunsetSide[1];

      supaDayOne.textContent = veganized[indexGiven[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        veganized[indexGiven[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = veganized[indexGiven[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        veganized[indexGiven[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[1]].breakfastSide[1];

      lunchDayTwo.textContent = veganized[indexGiven[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        veganized[indexGiven[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[1]].lunchside[1];

      snackDayTwo.textContent = normalized[indexGiven[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[1];

      supaDayTwo.textContent = veganized[indexGiven[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        veganized[indexGiven[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = veganized[indexGiven[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        veganized[indexGiven[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[2]].breakfastSide[1];

      lunchDayThree.textContent = veganized[indexGiven[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        veganized[indexGiven[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[2]].lunchside[1];

      snackDayThree.textContent = veganized[indexGiven[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        veganized[indexGiven[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[2]].mealSunsetSide[1];

      supaDayThree.textContent = veganized[indexGiven[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        veganized[indexGiven[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = veganized[indexGiven[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        veganized[indexGiven[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[3]].breakfastSide[1];

      lunchDayFour.textContent = veganized[indexGiven[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        veganized[indexGiven[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[3]].lunchside[1];

      snackDayFour.textContent = veganized[indexGiven[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        veganized[indexGiven[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[3]].mealSunsetSide[1];

      supaDayFour.textContent = veganized[indexGiven[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        veganized[indexGiven[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = veganized[indexGiven[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        veganized[indexGiven[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[4]].breakfastSide[1];

      lunchDayFive.textContent = veganized[indexGiven[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        veganized[indexGiven[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[4]].lunchside[1];

      snackDayFive.textContent = veganized[indexGiven[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        veganized[indexGiven[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[4]].mealSunsetSide[1];

      supaDayFive.textContent = veganized[indexGiven[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        veganized[indexGiven[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = veganized[indexGiven[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        veganized[indexGiven[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[5]].breakfastSide[1];

      lunchDaySix.textContent = veganized[indexGiven[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        veganized[indexGiven[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[5]].lunchside[1];

      snackDaySix.textContent = veganized[indexGiven[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        veganized[indexGiven[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[5]].mealSunsetSide[1];

      supaDaySix.textContent = veganized[indexGiven[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        veganized[indexGiven[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = veganized[indexGiven[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        veganized[indexGiven[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[6]].breakfastSide[1];

      lunchDaySeven.textContent = veganized[indexGiven[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        veganized[indexGiven[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[6]].lunchside[1];

      snackDaySeven.textContent = veganized[indexGiven[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        veganized[indexGiven[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[6]].mealSunsetSide[1];

      supaDaySeven.textContent = veganized[indexGiven[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        veganized[indexGiven[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[indexGiven[6]].eveningmealside[1];
    }
    //vegan two
    else if (
      userDetails &&
      userDetails.condition === conTwo &&
      userDetails.meal === typeOne
    ) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = vegan2;

      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven[0] +
        " - " +
        indexGiven[1] +
        " - " +
        indexGiven[2] +
        " - " +
        indexGiven[3] +
        " - " +
        indexGiven[4] +
        " - " +
        indexGiven[5] +
        " - " +
        indexGiven[6];

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = veganWest[indexGiven[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        veganWest[indexGiven[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[0]].breakfastSide[1];

      lunchDayOne.textContent = veganWest[indexGiven[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        veganWest[indexGiven[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[0]].lunchside[1];

      snackDayOne.textContent = veganWest[indexGiven[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        veganWest[indexGiven[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[0]].mealSunsetSide[1];

      supaDayOne.textContent = veganWest[indexGiven[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        veganWest[indexGiven[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = veganWest[indexGiven[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        veganWest[indexGiven[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[1]].breakfastSide[1];

      lunchDayTwo.textContent = veganWest[indexGiven[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        veganWest[indexGiven[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[1]].lunchside[1];

      snackDayTwo.textContent = normalized[indexGiven[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[1];

      supaDayTwo.textContent = veganWest[indexGiven[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        veganWest[indexGiven[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = veganWest[indexGiven[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        veganWest[indexGiven[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[2]].breakfastSide[1];

      lunchDayThree.textContent = veganWest[indexGiven[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        veganWest[indexGiven[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[2]].lunchside[1];

      snackDayThree.textContent = veganWest[indexGiven[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        veganWest[indexGiven[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[2]].mealSunsetSide[1];

      supaDayThree.textContent = veganWest[indexGiven[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        veganWest[indexGiven[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = veganWest[indexGiven[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        veganWest[indexGiven[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[3]].breakfastSide[1];

      lunchDayFour.textContent = veganWest[indexGiven[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        veganWest[indexGiven[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[3]].lunchside[1];

      snackDayFour.textContent = veganWest[indexGiven[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        veganWest[indexGiven[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[3]].mealSunsetSide[1];

      supaDayFour.textContent = veganWest[indexGiven[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        veganWest[indexGiven[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = veganWest[indexGiven[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        veganWest[indexGiven[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[4]].breakfastSide[1];

      lunchDayFive.textContent = veganWest[indexGiven[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        veganWest[indexGiven[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[4]].lunchside[1];

      snackDayFive.textContent = veganWest[indexGiven[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        veganWest[indexGiven[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[4]].mealSunsetSide[1];

      supaDayFive.textContent = veganWest[indexGiven[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        veganWest[indexGiven[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = veganWest[indexGiven[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        veganWest[indexGiven[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[5]].breakfastSide[1];

      lunchDaySix.textContent = veganWest[indexGiven[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        veganWest[indexGiven[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[5]].lunchside[1];

      snackDaySix.textContent = veganWest[indexGiven[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        veganWest[indexGiven[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[5]].mealSunsetSide[1];

      supaDaySix.textContent = veganWest[indexGiven[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        veganWest[indexGiven[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = veganWest[indexGiven[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        veganWest[indexGiven[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[6]].breakfastSide[1];

      lunchDaySeven.textContent = veganWest[indexGiven[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        veganWest[indexGiven[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[6]].lunchside[1];

      snackDaySeven.textContent = veganWest[indexGiven[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        veganWest[indexGiven[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[6]].mealSunsetSide[1];

      supaDaySeven.textContent = veganWest[indexGiven[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        veganWest[indexGiven[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[indexGiven[6]].eveningmealside[1];
    }
    // vegan three
    else if (
      userDetails &&
      userDetails.condition === conTwo &&
      userDetails.meal === typeThree
    ) {
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven2[0] +
        " - " +
        indexGiven2[1] +
        " - " +
        indexGiven2[2] +
        " - " +
        indexGiven2[3] +
        " - " +
        indexGiven2[4] +
        " - " +
        indexGiven2[5] +
        " - " +
        indexGiven2[6];
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

      breakfastDayOne.textContent = veganMix[indexGiven2[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        veganMix[indexGiven2[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[0]].breakfastSide[1];

      lunchDayOne.textContent = veganMix[indexGiven2[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        veganMix[indexGiven2[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[0]].lunchside[1];

      snackDayOne.textContent = veganMix[indexGiven2[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        veganMix[indexGiven2[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[0]].mealSunsetSide[1];

      supaDayOne.textContent = veganMix[indexGiven2[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        veganMix[indexGiven2[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = veganMix[indexGiven2[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        veganMix[indexGiven2[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[1]].breakfastSide[1];

      lunchDayTwo.textContent = veganMix[indexGiven2[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        veganMix[indexGiven2[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[1]].lunchside[1];

      snackDayTwo.textContent = veganMix[indexGiven2[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        veganMix[indexGiven2[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[1]].mealSunsetSide[1];

      supaDayTwo.textContent = veganMix[indexGiven2[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        veganMix[indexGiven2[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = veganMix[indexGiven2[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        veganMix[indexGiven2[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[2]].breakfastSide[1];

      lunchDayThree.textContent = veganMix[indexGiven2[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        veganMix[indexGiven2[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[2]].lunchside[1];

      snackDayThree.textContent = veganMix[indexGiven2[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        veganMix[indexGiven2[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[2]].mealSunsetSide[1];

      supaDayThree.textContent = veganMix[indexGiven2[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        veganMix[indexGiven2[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = veganMix[indexGiven2[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        veganMix[indexGiven2[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[3]].breakfastSide[1];

      lunchDayFour.textContent = veganMix[indexGiven2[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        veganMix[indexGiven2[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[3]].lunchside[1];

      snackDayFour.textContent = veganMix[indexGiven2[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        veganMix[indexGiven2[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[3]].mealSunsetSide[1];

      supaDayFour.textContent = veganMix[indexGiven2[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        veganMix[indexGiven2[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = veganMix[indexGiven2[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        veganMix[indexGiven2[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[4]].breakfastSide[1];

      lunchDayFive.textContent = veganMix[indexGiven2[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        veganMix[indexGiven2[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[4]].lunchside[1];

      snackDayFive.textContent = veganMix[indexGiven2[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        veganMix[indexGiven2[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[4]].mealSunsetSide[1];

      supaDayFive.textContent = veganMix[indexGiven2[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        veganMix[indexGiven2[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = veganMix[indexGiven2[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        veganMix[indexGiven2[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[5]].breakfastSide[1];

      lunchDaySix.textContent = veganMix[indexGiven2[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        veganMix[indexGiven2[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[5]].lunchside[1];

      snackDaySix.textContent = veganMix[indexGiven2[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        veganMix[indexGiven2[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[5]].mealSunsetSide[1];

      supaDaySix.textContent = veganMix[indexGiven2[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        veganMix[indexGiven2[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = veganMix[indexGiven2[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        veganMix[indexGiven2[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[6]].breakfastSide[1];

      lunchDaySeven.textContent = veganMix[indexGiven2[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        veganMix[indexGiven2[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[6]].lunchside[1];

      snackDaySeven.textContent = veganMix[indexGiven2[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        veganMix[indexGiven2[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[6]].mealSunsetSide[1];

      supaDaySeven.textContent = veganMix[indexGiven2[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        veganMix[indexGiven2[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganMix[indexGiven2[6]].eveningmealside[1];
    }
    //***************************************************** DIABETIC MEALS *********************************************************/
    // diabetic one
    else if (
      userDetails &&
      userDetails.condition === conThree &&
      userDetails.meal === typeTwo
    ) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = diabetic1;

      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven[0] +
        " - " +
        indexGiven[1] +
        " - " +
        indexGiven[2] +
        " - " +
        indexGiven[3] +
        " - " +
        indexGiven[4] +
        " - " +
        indexGiven[5] +
        " - " +
        indexGiven[6];

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = diabeticZed[indexGiven[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        diabeticZed[indexGiven[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[0]].breakfastSide[1];

      lunchDayOne.textContent = diabeticZed[indexGiven[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        diabeticZed[indexGiven[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[0]].lunchside[1];

      snackDayOne.textContent = diabeticZed[indexGiven[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        diabeticZed[indexGiven[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[0]].mealSunsetSide[1];

      supaDayOne.textContent = diabeticZed[indexGiven[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        diabeticZed[indexGiven[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = diabeticZed[indexGiven[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        diabeticZed[indexGiven[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[1]].breakfastSide[1];

      lunchDayTwo.textContent = diabeticZed[indexGiven[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        diabeticZed[indexGiven[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[1]].lunchside[1];

      snackDayTwo.textContent = normalized[indexGiven[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[1];

      supaDayTwo.textContent = diabeticZed[indexGiven[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        diabeticZed[indexGiven[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = diabeticZed[indexGiven[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        diabeticZed[indexGiven[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[2]].breakfastSide[1];

      lunchDayThree.textContent = diabeticZed[indexGiven[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        diabeticZed[indexGiven[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[2]].lunchside[1];

      snackDayThree.textContent = diabeticZed[indexGiven[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        diabeticZed[indexGiven[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[2]].mealSunsetSide[1];

      supaDayThree.textContent = diabeticZed[indexGiven[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        diabeticZed[indexGiven[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = diabeticZed[indexGiven[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        diabeticZed[indexGiven[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[3]].breakfastSide[1];

      lunchDayFour.textContent = diabeticZed[indexGiven[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        diabeticZed[indexGiven[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[3]].lunchside[1];

      snackDayFour.textContent = diabeticZed[indexGiven[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        diabeticZed[indexGiven[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[3]].mealSunsetSide[1];

      supaDayFour.textContent = diabeticZed[indexGiven[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        diabeticZed[indexGiven[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = diabeticZed[indexGiven[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        diabeticZed[indexGiven[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[4]].breakfastSide[1];

      lunchDayFive.textContent = diabeticZed[indexGiven[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        diabeticZed[indexGiven[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[4]].lunchside[1];

      snackDayFive.textContent = diabeticZed[indexGiven[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        diabeticZed[indexGiven[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[4]].mealSunsetSide[1];

      supaDayFive.textContent = diabeticZed[indexGiven[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        diabeticZed[indexGiven[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = diabeticZed[indexGiven[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        diabeticZed[indexGiven[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[5]].breakfastSide[1];

      lunchDaySix.textContent = diabeticZed[indexGiven[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        diabeticZed[indexGiven[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[5]].lunchside[1];

      snackDaySix.textContent = diabeticZed[indexGiven[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        diabeticZed[indexGiven[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[5]].mealSunsetSide[1];

      supaDaySix.textContent = diabeticZed[indexGiven[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        diabeticZed[indexGiven[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = diabeticZed[indexGiven[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        diabeticZed[indexGiven[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[6]].breakfastSide[1];

      lunchDaySeven.textContent = diabeticZed[indexGiven[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        diabeticZed[indexGiven[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[6]].lunchside[1];

      snackDaySeven.textContent = diabeticZed[indexGiven[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        diabeticZed[indexGiven[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[6]].mealSunsetSide[1];

      supaDaySeven.textContent = diabeticZed[indexGiven[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        diabeticZed[indexGiven[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[indexGiven[6]].eveningmealside[1];
    }
    // diabetic two
    else if (
      userDetails &&
      userDetails.condition === conThree &&
      userDetails.meal === typeOne
    ) {
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven[0] +
        " - " +
        indexGiven[1] +
        " - " +
        indexGiven[2] +
        " - " +
        indexGiven[3] +
        " - " +
        indexGiven[4] +
        " - " +
        indexGiven[5] +
        " - " +
        indexGiven[6];
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

      breakfastDayOne.textContent = diabeticWest[indexGiven[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        diabeticWest[indexGiven[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[0]].breakfastSide[1];

      lunchDayOne.textContent = diabeticWest[indexGiven[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        diabeticWest[indexGiven[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[0]].lunchside[1];

      snackDayOne.textContent = diabeticWest[indexGiven[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        diabeticWest[indexGiven[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[0]].mealSunsetSide[1];

      supaDayOne.textContent = diabeticWest[indexGiven[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        diabeticWest[indexGiven[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = diabeticWest[indexGiven[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        diabeticWest[indexGiven[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[1]].breakfastSide[1];

      lunchDayTwo.textContent = diabeticWest[indexGiven[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        diabeticWest[indexGiven[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[1]].lunchside[1];

      snackDayTwo.textContent = diabeticWest[indexGiven[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        diabeticWest[indexGiven[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[1]].mealSunsetSide[1];

      supaDayTwo.textContent = diabeticWest[indexGiven[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        diabeticWest[indexGiven[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        diabeticWest[indexGiven[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        diabeticWest[indexGiven[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[2]].breakfastSide[1];

      lunchDayThree.textContent = diabeticWest[indexGiven[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        diabeticWest[indexGiven[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[2]].lunchside[1];

      snackDayThree.textContent = diabeticWest[indexGiven[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        diabeticWest[indexGiven[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[2]].mealSunsetSide[1];

      supaDayThree.textContent = diabeticWest[indexGiven[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        diabeticWest[indexGiven[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = diabeticWest[indexGiven[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        diabeticWest[indexGiven[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[3]].breakfastSide[1];

      lunchDayFour.textContent = diabeticWest[indexGiven[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        diabeticWest[indexGiven[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[3]].lunchside[1];

      snackDayFour.textContent = diabeticWest[indexGiven[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        diabeticWest[indexGiven[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[3]].mealSunsetSide[1];

      supaDayFour.textContent = diabeticWest[indexGiven[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        diabeticWest[indexGiven[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = diabeticWest[indexGiven[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        diabeticWest[indexGiven[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[4]].breakfastSide[1];

      lunchDayFive.textContent = diabeticWest[indexGiven[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        diabeticWest[indexGiven[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[4]].lunchside[1];

      snackDayFive.textContent = diabeticWest[indexGiven[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        diabeticWest[indexGiven[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[4]].mealSunsetSide[1];

      supaDayFive.textContent = diabeticWest[indexGiven[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        diabeticWest[indexGiven[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = diabeticWest[indexGiven[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        diabeticWest[indexGiven[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[5]].breakfastSide[1];

      lunchDaySix.textContent = diabeticWest[indexGiven[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        diabeticWest[indexGiven[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[5]].lunchside[1];

      snackDaySix.textContent = diabeticWest[indexGiven[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        diabeticWest[indexGiven[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[5]].mealSunsetSide[1];

      supaDaySix.textContent = diabeticWest[indexGiven[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        diabeticWest[indexGiven[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        diabeticWest[indexGiven[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        diabeticWest[indexGiven[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[6]].breakfastSide[1];

      lunchDaySeven.textContent = diabeticWest[indexGiven[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        diabeticWest[indexGiven[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[6]].lunchside[1];

      snackDaySeven.textContent = diabeticWest[indexGiven[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        diabeticWest[indexGiven[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[6]].mealSunsetSide[1];

      supaDaySeven.textContent = diabeticWest[indexGiven[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        diabeticWest[indexGiven[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[indexGiven[6]].eveningmealside[1];
    }
    // diabetic three
    else if (
      userDetails &&
      userDetails.condition === conThree &&
      userDetails.meal === typeThree
    ) {
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven2[0] +
        " - " +
        indexGiven2[1] +
        " - " +
        indexGiven2[2] +
        " - " +
        indexGiven2[3] +
        " - " +
        indexGiven2[4] +
        " - " +
        indexGiven2[5] +
        " - " +
        indexGiven2[6];
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
        diabeticMix[indexGiven2[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        diabeticMix[indexGiven2[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[0]].breakfastSide[1];

      lunchDayOne.textContent = diabeticMix[indexGiven2[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        diabeticMix[indexGiven2[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[0]].lunchside[1];

      snackDayOne.textContent = diabeticMix[indexGiven2[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        diabeticMix[indexGiven2[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[0]].mealSunsetSide[1];

      supaDayOne.textContent = diabeticMix[indexGiven2[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        diabeticMix[indexGiven2[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent =
        diabeticMix[indexGiven2[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        diabeticMix[indexGiven2[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[1]].breakfastSide[1];

      lunchDayTwo.textContent = diabeticMix[indexGiven2[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        diabeticMix[indexGiven2[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[1]].lunchside[1];

      snackDayTwo.textContent = diabeticMix[indexGiven2[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        diabeticMix[indexGiven2[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[1]].mealSunsetSide[1];

      supaDayTwo.textContent = diabeticMix[indexGiven2[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        diabeticMix[indexGiven2[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        diabeticMix[indexGiven2[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        diabeticMix[indexGiven2[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[2]].breakfastSide[1];

      lunchDayThree.textContent = diabeticMix[indexGiven2[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        diabeticMix[indexGiven2[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[2]].lunchside[1];

      snackDayThree.textContent = diabeticMix[indexGiven2[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        diabeticMix[indexGiven2[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[2]].mealSunsetSide[1];

      supaDayThree.textContent = diabeticMix[indexGiven2[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        diabeticMix[indexGiven2[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent =
        diabeticMix[indexGiven2[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        diabeticMix[indexGiven2[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[3]].breakfastSide[1];

      lunchDayFour.textContent = diabeticMix[indexGiven2[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        diabeticMix[indexGiven2[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[3]].lunchside[1];

      snackDayFour.textContent = diabeticMix[indexGiven2[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        diabeticMix[indexGiven2[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[3]].mealSunsetSide[1];

      supaDayFour.textContent = diabeticMix[indexGiven2[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        diabeticMix[indexGiven2[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent =
        diabeticMix[indexGiven2[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        diabeticMix[indexGiven2[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[4]].breakfastSide[1];

      lunchDayFive.textContent = diabeticMix[indexGiven2[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        diabeticMix[indexGiven2[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[4]].lunchside[1];

      snackDayFive.textContent = diabeticMix[indexGiven2[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        diabeticMix[indexGiven2[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[4]].mealSunsetSide[1];

      supaDayFive.textContent = diabeticMix[indexGiven2[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        diabeticMix[indexGiven2[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent =
        diabeticMix[indexGiven2[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        diabeticMix[indexGiven2[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[5]].breakfastSide[1];

      lunchDaySix.textContent = diabeticMix[indexGiven2[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        diabeticMix[indexGiven2[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[5]].lunchside[1];

      snackDaySix.textContent = diabeticMix[indexGiven2[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        diabeticMix[indexGiven2[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[5]].mealSunsetSide[1];

      supaDaySix.textContent = diabeticMix[indexGiven2[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        diabeticMix[indexGiven2[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        diabeticMix[indexGiven2[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        diabeticMix[indexGiven2[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[6]].breakfastSide[1];

      lunchDaySeven.textContent = diabeticMix[indexGiven2[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        diabeticMix[indexGiven2[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[6]].lunchside[1];

      snackDaySeven.textContent = diabeticMix[indexGiven2[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        diabeticMix[indexGiven2[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[6]].mealSunsetSide[1];

      supaDaySeven.textContent = diabeticMix[indexGiven2[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        diabeticMix[indexGiven2[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[indexGiven2[6]].eveningmealside[1];
    }
    // Pescaerian one
    else if (
      userDetails &&
      userDetails.condition === conFour &&
      userDetails.meal === typeTwo
    ) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = pescatarian1;

      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven[0] +
        " - " +
        indexGiven[1] +
        " - " +
        indexGiven[2] +
        " - " +
        indexGiven[3] +
        " - " +
        indexGiven[4] +
        " - " +
        indexGiven[5] +
        " - " +
        indexGiven[6];

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent =
        pescatarianZed[indexGiven[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        pescatarianZed[indexGiven[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[0]].breakfastSide[1];

      lunchDayOne.textContent = pescatarianZed[indexGiven[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        pescatarianZed[indexGiven[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[0]].lunchside[1];

      snackDayOne.textContent = pescatarianZed[indexGiven[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        pescatarianZed[indexGiven[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[0]].mealSunsetSide[1];

      supaDayOne.textContent = pescatarianZed[indexGiven[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        pescatarianZed[indexGiven[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent =
        pescatarianZed[indexGiven[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        pescatarianZed[indexGiven[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[1]].breakfastSide[1];

      lunchDayTwo.textContent = pescatarianZed[indexGiven[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        pescatarianZed[indexGiven[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[1]].lunchside[1];

      snackDayTwo.textContent = normalized[indexGiven[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[1];

      supaDayTwo.textContent = pescatarianZed[indexGiven[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        pescatarianZed[indexGiven[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        pescatarianZed[indexGiven[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        pescatarianZed[indexGiven[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[2]].breakfastSide[1];

      lunchDayThree.textContent = pescatarianZed[indexGiven[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        pescatarianZed[indexGiven[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[2]].lunchside[1];

      snackDayThree.textContent = pescatarianZed[indexGiven[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        pescatarianZed[indexGiven[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[2]].mealSunsetSide[1];

      supaDayThree.textContent = pescatarianZed[indexGiven[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        pescatarianZed[indexGiven[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent =
        pescatarianZed[indexGiven[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        pescatarianZed[indexGiven[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[3]].breakfastSide[1];

      lunchDayFour.textContent = pescatarianZed[indexGiven[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        pescatarianZed[indexGiven[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[3]].lunchside[1];

      snackDayFour.textContent = pescatarianZed[indexGiven[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        pescatarianZed[indexGiven[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[3]].mealSunsetSide[1];

      supaDayFour.textContent = pescatarianZed[indexGiven[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        pescatarianZed[indexGiven[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent =
        pescatarianZed[indexGiven[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        pescatarianZed[indexGiven[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[4]].breakfastSide[1];

      lunchDayFive.textContent = pescatarianZed[indexGiven[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        pescatarianZed[indexGiven[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[4]].lunchside[1];

      snackDayFive.textContent = pescatarianZed[indexGiven[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        pescatarianZed[indexGiven[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[4]].mealSunsetSide[1];

      supaDayFive.textContent = pescatarianZed[indexGiven[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        pescatarianZed[indexGiven[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent =
        pescatarianZed[indexGiven[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        pescatarianZed[indexGiven[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[5]].breakfastSide[1];

      lunchDaySix.textContent = pescatarianZed[indexGiven[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        pescatarianZed[indexGiven[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[5]].lunchside[1];

      snackDaySix.textContent = pescatarianZed[indexGiven[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        pescatarianZed[indexGiven[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[5]].mealSunsetSide[1];

      supaDaySix.textContent = pescatarianZed[indexGiven[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        pescatarianZed[indexGiven[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        pescatarianZed[indexGiven[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        pescatarianZed[indexGiven[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[6]].breakfastSide[1];

      lunchDaySeven.textContent = pescatarianZed[indexGiven[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        pescatarianZed[indexGiven[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[6]].lunchside[1];

      snackDaySeven.textContent = pescatarianZed[indexGiven[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        pescatarianZed[indexGiven[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[6]].mealSunsetSide[1];

      supaDaySeven.textContent = pescatarianZed[indexGiven[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        pescatarianZed[indexGiven[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[indexGiven[6]].eveningmealside[1];
    }
    // pescatarian Two
    else if (
      userDetails &&
      userDetails.condition === conFour &&
      userDetails.meal === typeOne
    ) {
      //to place unique word on top
      let FancyName = document.getElementById("special-name");
      FancyName.textContent = pescatarian2;

      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven[0] +
        " - " +
        indexGiven[1] +
        " - " +
        indexGiven[2] +
        " - " +
        indexGiven[3] +
        " - " +
        indexGiven[4] +
        " - " +
        indexGiven[5] +
        " - " +
        indexGiven[6];

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent =
        pescatarianWest[indexGiven[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        pescatarianWest[indexGiven[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[0]].breakfastSide[1];

      lunchDayOne.textContent = pescatarianWest[indexGiven[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        pescatarianWest[indexGiven[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[0]].lunchside[1];

      snackDayOne.textContent = pescatarianWest[indexGiven[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        pescatarianWest[indexGiven[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[0]].mealSunsetSide[1];

      supaDayOne.textContent = pescatarianWest[indexGiven[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        pescatarianWest[indexGiven[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent =
        pescatarianWest[indexGiven[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        pescatarianWest[indexGiven[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[1]].breakfastSide[1];

      lunchDayTwo.textContent = pescatarianWest[indexGiven[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        pescatarianWest[indexGiven[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[1]].lunchside[1];

      snackDayTwo.textContent = normalized[indexGiven[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalized[indexGiven[1]].mealSunsetSide[1];

      supaDayTwo.textContent = pescatarianWest[indexGiven[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        pescatarianWest[indexGiven[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        pescatarianWest[indexGiven[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        pescatarianWest[indexGiven[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[2]].breakfastSide[1];

      lunchDayThree.textContent = pescatarianWest[indexGiven[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        pescatarianWest[indexGiven[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[2]].lunchside[1];

      snackDayThree.textContent =
        pescatarianWest[indexGiven[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        pescatarianWest[indexGiven[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[2]].mealSunsetSide[1];

      supaDayThree.textContent =
        pescatarianWest[indexGiven[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        pescatarianWest[indexGiven[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent =
        pescatarianWest[indexGiven[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        pescatarianWest[indexGiven[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[3]].breakfastSide[1];

      lunchDayFour.textContent = pescatarianWest[indexGiven[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        pescatarianWest[indexGiven[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[3]].lunchside[1];

      snackDayFour.textContent = pescatarianWest[indexGiven[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        pescatarianWest[indexGiven[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[3]].mealSunsetSide[1];

      supaDayFour.textContent = pescatarianWest[indexGiven[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        pescatarianWest[indexGiven[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent =
        pescatarianWest[indexGiven[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        pescatarianWest[indexGiven[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[4]].breakfastSide[1];

      lunchDayFive.textContent = pescatarianWest[indexGiven[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        pescatarianWest[indexGiven[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[4]].lunchside[1];

      snackDayFive.textContent = pescatarianWest[indexGiven[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        pescatarianWest[indexGiven[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[4]].mealSunsetSide[1];

      supaDayFive.textContent = pescatarianWest[indexGiven[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        pescatarianWest[indexGiven[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent =
        pescatarianWest[indexGiven[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        pescatarianWest[indexGiven[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[5]].breakfastSide[1];

      lunchDaySix.textContent = pescatarianWest[indexGiven[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        pescatarianWest[indexGiven[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[5]].lunchside[1];

      snackDaySix.textContent = pescatarianWest[indexGiven[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        pescatarianWest[indexGiven[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[5]].mealSunsetSide[1];

      supaDaySix.textContent = pescatarianWest[indexGiven[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        pescatarianWest[indexGiven[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        pescatarianWest[indexGiven[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        pescatarianWest[indexGiven[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[6]].breakfastSide[1];

      lunchDaySeven.textContent = pescatarianWest[indexGiven[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        pescatarianWest[indexGiven[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[6]].lunchside[1];

      snackDaySeven.textContent =
        pescatarianWest[indexGiven[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        pescatarianWest[indexGiven[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[6]].mealSunsetSide[1];

      supaDaySeven.textContent =
        pescatarianWest[indexGiven[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        pescatarianWest[indexGiven[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[indexGiven[6]].eveningmealside[1];
    }
    // pescaterian three
    else if (
      userDetails &&
      userDetails.condition === conFour &&
      userDetails.meal === typeThree
    ) {
      //to place unique code on header
      let unigueCode = document.getElementById("special-code");
      unigueCode.textContent =
        indexGiven2[0] +
        " - " +
        indexGiven2[1] +
        " - " +
        indexGiven2[2] +
        " - " +
        indexGiven2[3] +
        " - " +
        indexGiven2[4] +
        " - " +
        indexGiven2[5] +
        " - " +
        indexGiven2[6];
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
        pescatarianMix[indexGiven2[0]].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[0]].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[0]].breakfastSide[1];

      lunchDayOne.textContent = pescatarianMix[indexGiven2[0]].lunch;
      lunchDayOne.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[0]].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[0]].lunchside[1];

      snackDayOne.textContent =
        pescatarianMix[indexGiven2[0]].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[0]].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[0]].mealSunsetSide[1];

      supaDayOne.textContent =
        pescatarianMix[indexGiven2[0]].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[0]].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[0]].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent =
        pescatarianMix[indexGiven2[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[1]].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[1]].breakfastSide[1];

      lunchDayTwo.textContent = pescatarianMix[indexGiven2[1]].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[1]].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[1]].lunchside[1];

      snackDayTwo.textContent =
        pescatarianMix[indexGiven2[1]].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[1]].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[1]].mealSunsetSide[1];

      supaDayTwo.textContent =
        pescatarianMix[indexGiven2[1]].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[1]].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[1]].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent =
        pescatarianMix[indexGiven2[2]].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[2]].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[2]].breakfastSide[1];

      lunchDayThree.textContent = pescatarianMix[indexGiven2[2]].lunch;
      lunchDayThree.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[2]].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[2]].lunchside[1];

      snackDayThree.textContent =
        pescatarianMix[indexGiven2[2]].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[2]].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[2]].mealSunsetSide[1];

      supaDayThree.textContent =
        pescatarianMix[indexGiven2[2]].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[2]].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[2]].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent =
        pescatarianMix[indexGiven2[3]].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[3]].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[3]].breakfastSide[1];

      lunchDayFour.textContent = pescatarianMix[indexGiven2[3]].lunch;
      lunchDayFour.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[3]].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[3]].lunchside[1];

      snackDayFour.textContent =
        pescatarianMix[indexGiven2[3]].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[3]].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[3]].mealSunsetSide[1];

      supaDayFour.textContent =
        pescatarianMix[indexGiven2[3]].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[3]].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[3]].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent =
        pescatarianMix[indexGiven2[4]].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[4]].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[4]].breakfastSide[1];

      lunchDayFive.textContent = pescatarianMix[indexGiven2[4]].lunch;
      lunchDayFive.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[4]].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[4]].lunchside[1];

      snackDayFive.textContent =
        pescatarianMix[indexGiven2[4]].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[4]].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[4]].mealSunsetSide[1];

      supaDayFive.textContent =
        pescatarianMix[indexGiven2[4]].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[4]].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[4]].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent =
        pescatarianMix[indexGiven2[5]].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[5]].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[5]].breakfastSide[1];

      lunchDaySix.textContent = pescatarianMix[indexGiven2[5]].lunch;
      lunchDaySix.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[5]].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[5]].lunchside[1];

      snackDaySix.textContent =
        pescatarianMix[indexGiven2[5]].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[5]].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[5]].mealSunsetSide[1];

      supaDaySix.textContent =
        pescatarianMix[indexGiven2[5]].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[5]].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[5]].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent =
        pescatarianMix[indexGiven2[6]].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[6]].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[6]].breakfastSide[1];

      lunchDaySeven.textContent = pescatarianMix[indexGiven2[6]].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[6]].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[6]].lunchside[1];

      snackDaySeven.textContent =
        pescatarianMix[indexGiven2[6]].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[6]].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[6]].mealSunsetSide[1];

      supaDaySeven.textContent =
        pescatarianMix[indexGiven2[6]].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[6]].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[indexGiven2[6]].eveningmealside[1];
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

      breakfastDayOne.textContent = normalWest[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalWest[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[index0].breakfastSide[1];

      lunchDayOne.textContent = normalWest[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalWest[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[index0].lunchside[1];

      snackDayOne.textContent = normalWest[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalWest[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[index0].mealSunsetSide[1];

      supaDayOne.textContent = normalWest[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalWest[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalWest[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalWest[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalWest[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[index1].breakfastSide[1];

      lunchDayTwo.textContent = normalWest[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalWest[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[index1].lunchside[1];

      snackDayTwo.textContent = normalWest[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalWest[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[index1].mealSunsetSide[1];

      supaDayTwo.textContent = normalWest[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalWest[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalWest[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = normalWest[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalWest[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[index2].breakfastSide[1];

      lunchDayThree.textContent = normalWest[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalWest[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[index2].lunchside[1];

      snackDayThree.textContent = normalWest[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalWest[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[index2].mealSunsetSide[1];

      supaDayThree.textContent = normalWest[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalWest[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalWest[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalWest[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalWest[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[index3].breakfastSide[1];

      lunchDayFour.textContent = normalWest[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalWest[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[index3].lunchside[1];

      snackDayFour.textContent = normalWest[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalWest[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[index3].mealSunsetSide[1];

      supaDayFour.textContent = normalWest[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalWest[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalWest[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalWest[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalWest[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[index4].breakfastSide[1];

      lunchDayFive.textContent = normalWest[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalWest[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[index4].lunchside[1];

      snackDayFive.textContent = normalWest[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalWest[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[index4].mealSunsetSide[1];

      supaDayFive.textContent = normalWest[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalWest[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalWest[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalWest[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalWest[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[index5].breakfastSide[1];

      lunchDaySix.textContent = normalWest[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalWest[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[index5].lunchside[1];

      snackDaySix.textContent = normalWest[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalWest[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[index5].mealSunsetSide[1];

      supaDaySix.textContent = normalWest[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalWest[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalWest[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = normalWest[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalWest[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[index6].breakfastSide[1];

      lunchDaySeven.textContent = normalWest[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalWest[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[index6].lunchside[1];

      snackDaySeven.textContent = normalWest[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalWest[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[index6].mealSunsetSide[1];

      supaDaySeven.textContent = normalWest[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalWest[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalWest[index6].eveningmealside[1];
    }
    //** Normal 3 returning customer */
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

      breakfastDayOne.textContent = normalMix[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        normalMix[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[index0].breakfastSide[1];

      lunchDayOne.textContent = normalMix[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        normalMix[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[index0].lunchside[1];

      snackDayOne.textContent = normalMix[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        normalMix[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[index0].mealSunsetSide[1];

      supaDayOne.textContent = normalMix[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        normalMix[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        normalMix[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = normalMix[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        normalMix[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[index1].breakfastSide[1];

      lunchDayTwo.textContent = normalMix[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        normalMix[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[index1].lunchside[1];

      snackDayTwo.textContent = normalMix[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        normalMix[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[index1].mealSunsetSide[1];

      supaDayTwo.textContent = normalMix[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        normalMix[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        normalMix[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = normalMix[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        normalMix[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[index2].breakfastSide[1];

      lunchDayThree.textContent = normalMix[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        normalMix[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[index2].lunchside[1];

      snackDayThree.textContent = normalMix[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        normalMix[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[index2].mealSunsetSide[1];

      supaDayThree.textContent = normalMix[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        normalMix[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        normalMix[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = normalMix[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        normalMix[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[index3].breakfastSide[1];

      lunchDayFour.textContent = normalMix[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        normalMix[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[index3].lunchside[1];

      snackDayFour.textContent = normalMix[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        normalMix[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[index3].mealSunsetSide[1];

      supaDayFour.textContent = normalMix[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        normalMix[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        normalMix[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = normalMix[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        normalMix[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[index4].breakfastSide[1];

      lunchDayFive.textContent = normalMix[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        normalMix[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[index4].lunchside[1];

      snackDayFive.textContent = normalMix[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        normalMix[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[index4].mealSunsetSide[1];

      supaDayFive.textContent = normalMix[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        normalMix[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        normalMix[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = normalMix[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        normalMix[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[index5].breakfastSide[1];

      lunchDaySix.textContent = normalMix[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        normalMix[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[index5].lunchside[1];

      snackDaySix.textContent = normalMix[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        normalMix[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[index5].mealSunsetSide[1];

      supaDaySix.textContent = normalMix[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        normalMix[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        normalMix[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = normalMix[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        normalMix[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[index6].breakfastSide[1];

      lunchDaySeven.textContent = normalMix[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        normalMix[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[index6].lunchside[1];

      snackDaySeven.textContent = normalMix[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        normalMix[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[index6].mealSunsetSide[1];

      supaDaySeven.textContent = normalMix[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        normalMix[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        normalMix[index6].eveningmealside[1];
    } // ** vegan 1 returning customer
    else if (userDetailsTwo && userDetailsTwo.Name === vegan1) {
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
      FancyName.textContent = vegan1;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = veganized[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        veganized[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[index0].breakfastSide[1];

      lunchDayOne.textContent = veganized[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        veganized[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[index0].lunchside[1];

      snackDayOne.textContent = veganized[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        veganized[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[index0].mealSunsetSide[1];

      supaDayOne.textContent = veganized[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        veganized[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        veganized[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = veganized[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        veganized[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganized[index1].breakfastSide[1];

      lunchDayTwo.textContent = veganized[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        veganized[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganized[index1].lunchside[1];

      snackDayTwo.textContent = veganized[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        veganized[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganized[index1].mealSunsetSide[1];

      supaDayTwo.textContent = veganized[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        veganized[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganized[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = veganized[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        veganized[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[index2].breakfastSide[1];

      lunchDayThree.textContent = veganized[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        veganized[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[index2].lunchside[1];

      snackDayThree.textContent = veganized[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        veganized[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[index2].mealSunsetSide[1];

      supaDayThree.textContent = veganized[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        veganized[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        veganized[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = veganized[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        veganized[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[index3].breakfastSide[1];

      lunchDayFour.textContent = veganized[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        veganized[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[index3].lunchside[1];

      snackDayFour.textContent = veganized[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        veganized[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[index3].mealSunsetSide[1];

      supaDayFour.textContent = veganized[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        veganized[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        veganized[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = veganized[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        veganized[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[index4].breakfastSide[1];

      lunchDayFive.textContent = veganized[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        veganized[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[index4].lunchside[1];

      snackDayFive.textContent = veganized[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        veganized[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[index4].mealSunsetSide[1];

      supaDayFive.textContent = veganized[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        veganized[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        veganized[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = veganized[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        veganized[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[index5].breakfastSide[1];

      lunchDaySix.textContent = veganized[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        veganized[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[index5].lunchside[1];

      snackDaySix.textContent = veganized[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        veganized[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[index5].mealSunsetSide[1];

      supaDaySix.textContent = veganized[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        veganized[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        veganized[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = veganized[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        veganized[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[index6].breakfastSide[1];

      lunchDaySeven.textContent = veganized[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        veganized[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[index6].lunchside[1];

      snackDaySeven.textContent = veganized[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        veganized[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[index6].mealSunsetSide[1];

      supaDaySeven.textContent = veganized[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        veganized[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganized[index6].eveningmealside[1];
    }
    // ** vegan 2 returning customer
    else if (userDetailsTwo && userDetailsTwo.Name === vegan2) {
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
      FancyName.textContent = vegan2;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = veganWest[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        veganWest[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[index0].breakfastSide[1];

      lunchDayOne.textContent = veganWest[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        veganWest[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[index0].lunchside[1];

      snackDayOne.textContent = veganWest[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        veganWest[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[index0].mealSunsetSide[1];

      supaDayOne.textContent = veganWest[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        veganWest[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        veganWest[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = veganWest[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        veganWest[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganWest[index1].breakfastSide[1];

      lunchDayTwo.textContent = veganWest[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        veganWest[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganWest[index1].lunchside[1];

      snackDayTwo.textContent = veganWest[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        veganWest[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganWest[index1].mealSunsetSide[1];

      supaDayTwo.textContent = veganWest[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        veganWest[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        veganWest[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = veganWest[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        veganWest[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[index2].breakfastSide[1];

      lunchDayThree.textContent = veganWest[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        veganWest[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[index2].lunchside[1];

      snackDayThree.textContent = veganWest[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        veganWest[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[index2].mealSunsetSide[1];

      supaDayThree.textContent = veganWest[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        veganWest[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        veganWest[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = veganWest[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        veganWest[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[index3].breakfastSide[1];

      lunchDayFour.textContent = veganWest[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        veganWest[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[index3].lunchside[1];

      snackDayFour.textContent = veganWest[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        veganWest[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[index3].mealSunsetSide[1];

      supaDayFour.textContent = veganWest[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        veganWest[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        veganWest[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = veganWest[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        veganWest[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[index4].breakfastSide[1];

      lunchDayFive.textContent = veganWest[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        veganWest[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[index4].lunchside[1];

      snackDayFive.textContent = veganWest[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        veganWest[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[index4].mealSunsetSide[1];

      supaDayFive.textContent = veganWest[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        veganWest[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        veganWest[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = veganWest[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        veganWest[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[index5].breakfastSide[1];

      lunchDaySix.textContent = veganWest[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        veganWest[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[index5].lunchside[1];

      snackDaySix.textContent = veganWest[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        veganWest[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[index5].mealSunsetSide[1];

      supaDaySix.textContent = veganWest[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        veganWest[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        veganWest[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = veganWest[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        veganWest[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[index6].breakfastSide[1];

      lunchDaySeven.textContent = veganWest[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        veganWest[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[index6].lunchside[1];

      snackDaySeven.textContent = veganWest[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        veganWest[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[index6].mealSunsetSide[1];

      supaDaySeven.textContent = veganWest[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        veganWest[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        veganWest[index6].eveningmealside[1];
    }
    //** vegan 3 returning customer */
    else if (userDetailsTwo && userDetailsTwo.Name === vegan3) {
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
      FancyName.textContent = vegan3;

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
    // ** diabetic 1 returning customer
    else if (userDetailsTwo && userDetailsTwo.Name === diabetic1) {
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
      FancyName.textContent = diabetic1;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = diabeticZed[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        diabeticZed[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index0].breakfastSide[1];

      lunchDayOne.textContent = diabeticZed[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        diabeticZed[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index0].lunchside[1];

      snackDayOne.textContent = diabeticZed[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        diabeticZed[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index0].mealSunsetSide[1];

      supaDayOne.textContent = diabeticZed[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        diabeticZed[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = diabeticZed[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        diabeticZed[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index1].breakfastSide[1];

      lunchDayTwo.textContent = diabeticZed[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        diabeticZed[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index1].lunchside[1];

      snackDayTwo.textContent = diabeticZed[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        diabeticZed[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index1].mealSunsetSide[1];

      supaDayTwo.textContent = diabeticZed[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        diabeticZed[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = diabeticZed[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        diabeticZed[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index2].breakfastSide[1];

      lunchDayThree.textContent = diabeticZed[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        diabeticZed[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index2].lunchside[1];

      snackDayThree.textContent = diabeticZed[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        diabeticZed[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index2].mealSunsetSide[1];

      supaDayThree.textContent = diabeticZed[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        diabeticZed[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = diabeticZed[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        diabeticZed[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index3].breakfastSide[1];

      lunchDayFour.textContent = diabeticZed[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        diabeticZed[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index3].lunchside[1];

      snackDayFour.textContent = diabeticZed[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        diabeticZed[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index3].mealSunsetSide[1];

      supaDayFour.textContent = diabeticZed[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        diabeticZed[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = diabeticZed[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        diabeticZed[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index4].breakfastSide[1];

      lunchDayFive.textContent = diabeticZed[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        diabeticZed[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index4].lunchside[1];

      snackDayFive.textContent = diabeticZed[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        diabeticZed[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index4].mealSunsetSide[1];

      supaDayFive.textContent = diabeticZed[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        diabeticZed[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = diabeticZed[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        diabeticZed[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index5].breakfastSide[1];

      lunchDaySix.textContent = diabeticZed[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        diabeticZed[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index5].lunchside[1];

      snackDaySix.textContent = diabeticZed[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        diabeticZed[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index5].mealSunsetSide[1];

      supaDaySix.textContent = diabeticZed[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        diabeticZed[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = diabeticZed[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        diabeticZed[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index6].breakfastSide[1];

      lunchDaySeven.textContent = diabeticZed[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        diabeticZed[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index6].lunchside[1];

      snackDaySeven.textContent = diabeticZed[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        diabeticZed[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index6].mealSunsetSide[1];

      supaDaySeven.textContent = diabeticZed[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        diabeticZed[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticZed[index6].eveningmealside[1];
    }
    // ** diabetic 2 returning customer
    else if (userDetailsTwo && userDetailsTwo.Name === diabetic2) {
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
      FancyName.textContent = diabetic2;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = diabeticWest[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        diabeticWest[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index0].breakfastSide[1];

      lunchDayOne.textContent = diabeticWest[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        diabeticWest[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index0].lunchside[1];

      snackDayOne.textContent = diabeticWest[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        diabeticWest[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index0].mealSunsetSide[1];

      supaDayOne.textContent = diabeticWest[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        diabeticWest[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = diabeticWest[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        diabeticWest[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index1].breakfastSide[1];

      lunchDayTwo.textContent = diabeticWest[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        diabeticWest[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index1].lunchside[1];

      snackDayTwo.textContent = diabeticWest[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        diabeticWest[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index1].mealSunsetSide[1];

      supaDayTwo.textContent = diabeticWest[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        diabeticWest[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = diabeticWest[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        diabeticWest[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index2].breakfastSide[1];

      lunchDayThree.textContent = diabeticWest[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        diabeticWest[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index2].lunchside[1];

      snackDayThree.textContent = diabeticWest[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        diabeticWest[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index2].mealSunsetSide[1];

      supaDayThree.textContent = diabeticWest[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        diabeticWest[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = diabeticWest[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        diabeticWest[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index3].breakfastSide[1];

      lunchDayFour.textContent = diabeticWest[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        diabeticWest[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index3].lunchside[1];

      snackDayFour.textContent = diabeticWest[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        diabeticWest[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index3].mealSunsetSide[1];

      supaDayFour.textContent = diabeticWest[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        diabeticWest[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = diabeticWest[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        diabeticWest[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index4].breakfastSide[1];

      lunchDayFive.textContent = diabeticWest[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        diabeticWest[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index4].lunchside[1];

      snackDayFive.textContent = diabeticWest[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        diabeticWest[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index4].mealSunsetSide[1];

      supaDayFive.textContent = diabeticWest[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        diabeticWest[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = diabeticWest[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        diabeticWest[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index5].breakfastSide[1];

      lunchDaySix.textContent = diabeticWest[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        diabeticWest[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index5].lunchside[1];

      snackDaySix.textContent = diabeticWest[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        diabeticWest[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index5].mealSunsetSide[1];

      supaDaySix.textContent = diabeticWest[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        diabeticWest[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = diabeticWest[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        diabeticWest[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index6].breakfastSide[1];

      lunchDaySeven.textContent = diabeticWest[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        diabeticWest[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index6].lunchside[1];

      snackDaySeven.textContent = diabeticWest[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        diabeticWest[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index6].mealSunsetSide[1];

      supaDaySeven.textContent = diabeticWest[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        diabeticWest[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticWest[index6].eveningmealside[1];
    }
    //** diabetic 3 returning customer */
    else if (userDetailsTwo && userDetailsTwo.Name === diabetic3) {
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
      FancyName.textContent = diabetic3;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = diabeticMix[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        diabeticMix[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index0].breakfastSide[1];

      lunchDayOne.textContent = diabeticMix[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        diabeticMix[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index0].lunchside[1];

      snackDayOne.textContent = diabeticMix[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        diabeticMix[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index0].mealSunsetSide[1];

      supaDayOne.textContent = diabeticMix[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        diabeticMix[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = diabeticMix[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        diabeticMix[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index1].breakfastSide[1];

      lunchDayTwo.textContent = diabeticMix[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        diabeticMix[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index1].lunchside[1];

      snackDayTwo.textContent = diabeticMix[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        diabeticMix[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index1].mealSunsetSide[1];

      supaDayTwo.textContent = diabeticMix[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        diabeticMix[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = diabeticMix[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        diabeticMix[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index2].breakfastSide[1];

      lunchDayThree.textContent = diabeticMix[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        diabeticMix[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index2].lunchside[1];

      snackDayThree.textContent = diabeticMix[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        diabeticMix[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index2].mealSunsetSide[1];

      supaDayThree.textContent = diabeticMix[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        diabeticMix[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = diabeticMix[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        diabeticMix[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index3].breakfastSide[1];

      lunchDayFour.textContent = diabeticMix[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        diabeticMix[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index3].lunchside[1];

      snackDayFour.textContent = diabeticMix[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        diabeticMix[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index3].mealSunsetSide[1];

      supaDayFour.textContent = diabeticMix[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        diabeticMix[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = diabeticMix[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        diabeticMix[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index4].breakfastSide[1];

      lunchDayFive.textContent = diabeticMix[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        diabeticMix[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index4].lunchside[1];

      snackDayFive.textContent = diabeticMix[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        diabeticMix[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index4].mealSunsetSide[1];

      supaDayFive.textContent = diabeticMix[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        diabeticMix[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = diabeticMix[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        diabeticMix[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index5].breakfastSide[1];

      lunchDaySix.textContent = diabeticMix[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        diabeticMix[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index5].lunchside[1];

      snackDaySix.textContent = diabeticMix[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        diabeticMix[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index5].mealSunsetSide[1];

      supaDaySix.textContent = diabeticMix[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        diabeticMix[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = diabeticMix[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        diabeticMix[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index6].breakfastSide[1];

      lunchDaySeven.textContent = diabeticMix[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        diabeticMix[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index6].lunchside[1];

      snackDaySeven.textContent = diabeticMix[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        diabeticMix[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index6].mealSunsetSide[1];

      supaDaySeven.textContent = diabeticMix[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        diabeticMix[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        diabeticMix[index6].eveningmealside[1];
    }
    // ** pescaterian 1 returning customer
    else if (userDetailsTwo && userDetailsTwo.Name === pescatarian1) {
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
      FancyName.textContent = pescatarian1;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = pescatarianZed[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        pescatarianZed[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index0].breakfastSide[1];

      lunchDayOne.textContent = pescatarianZed[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        pescatarianZed[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index0].lunchside[1];

      snackDayOne.textContent = pescatarianZed[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        pescatarianZed[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index0].mealSunsetSide[1];

      supaDayOne.textContent = pescatarianZed[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        pescatarianZed[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = pescatarianZed[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        pescatarianZed[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index1].breakfastSide[1];

      lunchDayTwo.textContent = pescatarianZed[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        pescatarianZed[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index1].lunchside[1];

      snackDayTwo.textContent = pescatarianZed[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        pescatarianZed[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index1].mealSunsetSide[1];

      supaDayTwo.textContent = pescatarianZed[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        pescatarianZed[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = pescatarianZed[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        pescatarianZed[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index2].breakfastSide[1];

      lunchDayThree.textContent = pescatarianZed[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        pescatarianZed[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index2].lunchside[1];

      snackDayThree.textContent = pescatarianZed[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        pescatarianZed[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index2].mealSunsetSide[1];

      supaDayThree.textContent = pescatarianZed[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        pescatarianZed[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = pescatarianZed[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        pescatarianZed[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index3].breakfastSide[1];

      lunchDayFour.textContent = pescatarianZed[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        pescatarianZed[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index3].lunchside[1];

      snackDayFour.textContent = pescatarianZed[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        pescatarianZed[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index3].mealSunsetSide[1];

      supaDayFour.textContent = pescatarianZed[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        pescatarianZed[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = pescatarianZed[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        pescatarianZed[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index4].breakfastSide[1];

      lunchDayFive.textContent = pescatarianZed[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        pescatarianZed[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index4].lunchside[1];

      snackDayFive.textContent = pescatarianZed[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        pescatarianZed[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index4].mealSunsetSide[1];

      supaDayFive.textContent = pescatarianZed[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        pescatarianZed[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = pescatarianZed[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        pescatarianZed[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index5].breakfastSide[1];

      lunchDaySix.textContent = pescatarianZed[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        pescatarianZed[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index5].lunchside[1];

      snackDaySix.textContent = pescatarianZed[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        pescatarianZed[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index5].mealSunsetSide[1];

      supaDaySix.textContent = pescatarianZed[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        pescatarianZed[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = pescatarianZed[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        pescatarianZed[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index6].breakfastSide[1];

      lunchDaySeven.textContent = pescatarianZed[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        pescatarianZed[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index6].lunchside[1];

      snackDaySeven.textContent = pescatarianZed[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        pescatarianZed[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index6].mealSunsetSide[1];

      supaDaySeven.textContent = pescatarianZed[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        pescatarianZed[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianZed[index6].eveningmealside[1];
    }
    // ** pescaterian 2 returning customer
    else if (userDetailsTwo && userDetailsTwo.Name === pescatarian2) {
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
      FancyName.textContent = pescatarian2;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = pescatarianWest[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        pescatarianWest[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index0].breakfastSide[1];

      lunchDayOne.textContent = pescatarianWest[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        pescatarianWest[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index0].lunchside[1];

      snackDayOne.textContent = pescatarianWest[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        pescatarianWest[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index0].mealSunsetSide[1];

      supaDayOne.textContent = pescatarianWest[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        pescatarianWest[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = pescatarianWest[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        pescatarianWest[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index1].breakfastSide[1];

      lunchDayTwo.textContent = pescatarianWest[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        pescatarianWest[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index1].lunchside[1];

      snackDayTwo.textContent = pescatarianWest[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        pescatarianWest[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index1].mealSunsetSide[1];

      supaDayTwo.textContent = pescatarianWest[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        pescatarianWest[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = pescatarianWest[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        pescatarianWest[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index2].breakfastSide[1];

      lunchDayThree.textContent = pescatarianWest[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        pescatarianWest[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index2].lunchside[1];

      snackDayThree.textContent = pescatarianWest[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        pescatarianWest[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index2].mealSunsetSide[1];

      supaDayThree.textContent = pescatarianWest[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        pescatarianWest[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = pescatarianWest[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        pescatarianWest[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index3].breakfastSide[1];

      lunchDayFour.textContent = pescatarianWest[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        pescatarianWest[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index3].lunchside[1];

      snackDayFour.textContent = pescatarianWest[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        pescatarianWest[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index3].mealSunsetSide[1];

      supaDayFour.textContent = pescatarianWest[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        pescatarianWest[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = pescatarianWest[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        pescatarianWest[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index4].breakfastSide[1];

      lunchDayFive.textContent = pescatarianWest[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        pescatarianWest[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index4].lunchside[1];

      snackDayFive.textContent = pescatarianWest[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        pescatarianWest[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index4].mealSunsetSide[1];

      supaDayFive.textContent = pescatarianWest[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        pescatarianWest[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = pescatarianWest[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        pescatarianWest[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index5].breakfastSide[1];

      lunchDaySix.textContent = pescatarianWest[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        pescatarianWest[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index5].lunchside[1];

      snackDaySix.textContent = pescatarianWest[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        pescatarianWest[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index5].mealSunsetSide[1];

      supaDaySix.textContent = pescatarianWest[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        pescatarianWest[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = pescatarianWest[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        pescatarianWest[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index6].breakfastSide[1];

      lunchDaySeven.textContent = pescatarianWest[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        pescatarianWest[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index6].lunchside[1];

      snackDaySeven.textContent = pescatarianWest[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        pescatarianWest[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index6].mealSunsetSide[1];

      supaDaySeven.textContent = pescatarianWest[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        pescatarianWest[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianWest[index6].eveningmealside[1];
    }
    //** pescaterian 3 returning customer */
    else if (userDetailsTwo && userDetailsTwo.Name === pescatarian3) {
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
      FancyName.textContent = pescatarian3;

      //day1 //variables holding location
      let breakfastDayOne = document.querySelector(
        "#day1 .day-card .breakfast dt"
      );
      let lunchDayOne = document.querySelector("#day1 .day-card .lunch dt");
      let snackDayOne = document.querySelector("#day1 .day-card .snack dt");
      let supaDayOne = document.querySelector("#day1 .day-card .supa dt");

      //placing the meals on document

      breakfastDayOne.textContent = pescatarianMix[index0].breakfast;
      breakfastDayOne.nextElementSibling.textContent =
        pescatarianMix[index0].breakfastSide[0];
      breakfastDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index0].breakfastSide[1];

      lunchDayOne.textContent = pescatarianMix[index0].lunch;
      lunchDayOne.nextElementSibling.textContent =
        pescatarianMix[index0].lunchside[0];
      lunchDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index0].lunchside[1];

      snackDayOne.textContent = pescatarianMix[index0].mealSunset;
      snackDayOne.nextElementSibling.textContent =
        pescatarianMix[index0].mealSunsetSide[0];
      snackDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index0].mealSunsetSide[1];

      supaDayOne.textContent = pescatarianMix[index0].eveningmeal;
      supaDayOne.nextElementSibling.textContent =
        pescatarianMix[index0].eveningmealside[0];
      supaDayOne.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index0].eveningmealside[1];

      //day2
      let breakfastDayTwo = document.querySelector(
        "#day2 .day-card .breakfast dt"
      );
      let lunchDayTwo = document.querySelector("#day2 .day-card .lunch dt");
      let snackDayTwo = document.querySelector("#day2 .day-card .snack dt");
      let supaDayTwo = document.querySelector("#day2 .day-card .supa dt");

      breakfastDayTwo.textContent = pescatarianMix[PlaceIntInArr()[1]].breakfast;
      breakfastDayTwo.nextElementSibling.textContent =
        pescatarianMix[index1].breakfastSide[0];
      breakfastDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index1].breakfastSide[1];

      lunchDayTwo.textContent = pescatarianMix[index1].lunch;
      lunchDayTwo.nextElementSibling.textContent =
        pescatarianMix[index1].lunchside[0];
      lunchDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index1].lunchside[1];

      snackDayTwo.textContent = pescatarianMix[index1].mealSunset;
      snackDayTwo.nextElementSibling.textContent =
        pescatarianMix[index1].mealSunsetSide[0];
      snackDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index1].mealSunsetSide[1];

      supaDayTwo.textContent = pescatarianMix[index1].eveningmeal;
      supaDayTwo.nextElementSibling.textContent =
        pescatarianMix[index1].eveningmealside[0];
      supaDayTwo.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index1].eveningmealside[1];

      //day3
      let breakfastDayThree = document.querySelector(
        "#day3 .day-card .breakfast dt"
      );
      let lunchDayThree = document.querySelector("#day3 .day-card .lunch dt");
      let snackDayThree = document.querySelector("#day3 .day-card .snack dt");
      let supaDayThree = document.querySelector("#day3 .day-card .supa dt");

      breakfastDayThree.textContent = pescatarianMix[index2].breakfast;
      breakfastDayThree.nextElementSibling.textContent =
        pescatarianMix[index2].breakfastSide[0];
      breakfastDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index2].breakfastSide[1];

      lunchDayThree.textContent = pescatarianMix[index2].lunch;
      lunchDayThree.nextElementSibling.textContent =
        pescatarianMix[index2].lunchside[0];
      lunchDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index2].lunchside[1];

      snackDayThree.textContent = pescatarianMix[index2].mealSunset;
      snackDayThree.nextElementSibling.textContent =
        pescatarianMix[index2].mealSunsetSide[0];
      snackDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index2].mealSunsetSide[1];

      supaDayThree.textContent = pescatarianMix[index2].eveningmeal;
      supaDayThree.nextElementSibling.textContent =
        pescatarianMix[index2].eveningmealside[0];
      supaDayThree.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index2].eveningmealside[1];

      //day4
      let breakfastDayFour = document.querySelector(
        "#day4 .day-card .breakfast dt"
      );
      let lunchDayFour = document.querySelector("#day4 .day-card .lunch dt");
      let snackDayFour = document.querySelector("#day4 .day-card .snack dt");
      let supaDayFour = document.querySelector("#day4 .day-card .supa dt");

      breakfastDayFour.textContent = pescatarianMix[index3].breakfast;
      breakfastDayFour.nextElementSibling.textContent =
        pescatarianMix[index3].breakfastSide[0];
      breakfastDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index3].breakfastSide[1];

      lunchDayFour.textContent = pescatarianMix[index3].lunch;
      lunchDayFour.nextElementSibling.textContent =
        pescatarianMix[index3].lunchside[0];
      lunchDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index3].lunchside[1];

      snackDayFour.textContent = pescatarianMix[index3].mealSunset;
      snackDayFour.nextElementSibling.textContent =
        pescatarianMix[index3].mealSunsetSide[0];
      snackDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index3].mealSunsetSide[1];

      supaDayFour.textContent = pescatarianMix[index3].eveningmeal;
      supaDayFour.nextElementSibling.textContent =
        pescatarianMix[index3].eveningmealside[0];
      supaDayFour.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index3].eveningmealside[1];

      //day5
      let breakfastDayFive = document.querySelector(
        "#day5 .day-card .breakfast dt"
      );
      let lunchDayFive = document.querySelector("#day5 .day-card .lunch dt");
      let snackDayFive = document.querySelector("#day5 .day-card .snack dt");
      let supaDayFive = document.querySelector("#day5 .day-card .supa dt");

      breakfastDayFive.textContent = pescatarianMix[index4].breakfast;
      breakfastDayFive.nextElementSibling.textContent =
        pescatarianMix[index4].breakfastSide[0];
      breakfastDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index4].breakfastSide[1];

      lunchDayFive.textContent = pescatarianMix[index4].lunch;
      lunchDayFive.nextElementSibling.textContent =
        pescatarianMix[index4].lunchside[0];
      lunchDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index4].lunchside[1];

      snackDayFive.textContent = pescatarianMix[index4].mealSunset;
      snackDayFive.nextElementSibling.textContent =
        pescatarianMix[index4].mealSunsetSide[0];
      snackDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index4].mealSunsetSide[1];

      supaDayFive.textContent = pescatarianMix[index4].eveningmeal;
      supaDayFive.nextElementSibling.textContent =
        pescatarianMix[index4].eveningmealside[0];
      supaDayFive.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index4].eveningmealside[1];

      //day6
      let breakfastDaySix = document.querySelector(
        "#day6 .day-card .breakfast dt"
      );
      let lunchDaySix = document.querySelector("#day6 .day-card .lunch dt");
      let snackDaySix = document.querySelector("#day6 .day-card .snack dt");
      let supaDaySix = document.querySelector("#day6 .day-card .supa dt");

      breakfastDaySix.textContent = pescatarianMix[index5].breakfast;
      breakfastDaySix.nextElementSibling.textContent =
        pescatarianMix[index5].breakfastSide[0];
      breakfastDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index5].breakfastSide[1];

      lunchDaySix.textContent = pescatarianMix[index5].lunch;
      lunchDaySix.nextElementSibling.textContent =
        pescatarianMix[index5].lunchside[0];
      lunchDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index5].lunchside[1];

      snackDaySix.textContent = pescatarianMix[index5].mealSunset;
      snackDaySix.nextElementSibling.textContent =
        pescatarianMix[index5].mealSunsetSide[0];
      snackDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index5].mealSunsetSide[1];

      supaDaySix.textContent = pescatarianMix[index5].eveningmeal;
      supaDaySix.nextElementSibling.textContent =
        pescatarianMix[index5].eveningmealside[0];
      supaDaySix.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index5].eveningmealside[1];

      //day7
      let breakfastDaySeven = document.querySelector(
        "#day7 .day-card .breakfast dt"
      );
      let lunchDaySeven = document.querySelector("#day7 .day-card .lunch dt");
      let snackDaySeven = document.querySelector("#day7 .day-card .snack dt");
      let supaDaySeven = document.querySelector("#day7 .day-card .supa dt");

      breakfastDaySeven.textContent = pescatarianMix[index6].breakfast;
      breakfastDaySeven.nextElementSibling.textContent =
        pescatarianMix[index6].breakfastSide[0];
      breakfastDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index6].breakfastSide[1];

      lunchDaySeven.textContent = pescatarianMix[index6].lunch;
      lunchDaySeven.nextElementSibling.textContent =
        pescatarianMix[index6].lunchside[0];
      lunchDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index6].lunchside[1];

      snackDaySeven.textContent = pescatarianMix[index6].mealSunset;
      snackDaySeven.nextElementSibling.textContent =
        pescatarianMix[index6].mealSunsetSide[0];
      snackDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index6].mealSunsetSide[1];

      supaDaySeven.textContent = pescatarianMix[index6].eveningmeal;
      supaDaySeven.nextElementSibling.textContent =
        pescatarianMix[index6].eveningmealside[0];
      supaDaySeven.nextElementSibling.nextElementSibling.textContent =
        pescatarianMix[index6].eveningmealside[1];
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
