
// function personalDice(name){
//   return function(){
//       // generate random number between 1 and 6
//     const newRoll = Math.floor(Math.random() * 6);
//     console.log(`${name} rolled a ${newRoll}`)
//   }
// }

// const dansRoll = personalDice("Dan");

// const zoesRoll = personalDice("Zoe");


// dansRoll();
// dansRoll();

// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
// function processFirstItem(stringList, callback) {
//   return callback(stringList[0])

// }
// processFirstItem();
// // ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  
 *    counter1 returns additional instructions and the count stays permanent.   Counter 2 returns count++ only, but lets count be set to 0 at the start.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  
 *    counter1 uses closure because its modifying a variable outside of it's scope.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
      If you want your count to be private and only accessible from within counterMaker, use counter 1.
      If you want the variable count to be accessible from outside the function use counter 2.
  */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();
// counter2 code
  let count = 0;
  function counter2() {
    return count++;
  }


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

let inning = () =>{
  let points = Math.floor(Math.random() * 3);
  return points;
}


/* Task 3: finalScore()
Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
For example, 
finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}
*/

var score = []; 


//Establish finalscore as a function expression.
let finalScore = (myFunc, inningsPlayed) => {
  //Starting at inning 1, play until you reach the input inning amount.
  // for (let i = 1 ; i < inningsPlayed+1 ; i++)
    {
    scoreHome.push(myFunc());
    scoreAway.push(myFunc());
    
    }
    
  
}
// console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */
// let home = 0;
// let away = 0;
// let score = { Home : home, Away : away };


// console.log(finalScore(inning, 9));




// //Establish inning as a function expression
// let inning = () =>{
//   //points will hold a random number between 0-2.
//   let points = Math.floor(Math.random() * 3);
//   return points;
// }


// //Establish finalscore as a function expression.
// let finalScore = (myFunc, inningsPlayed) => {
//   //Starting at inning 1, play until you reach the input inning amount.
//   for (let i = 1 ; i < inningsPlayed+1 ; i++)
//     {
//       //Push this new object to [score], stopping when it reaches inningsPlayed
//     score.push({ Inning : i , Away: myFunc() , Home: myFunc() });
//     }
//   return score;
// }

let scoreHome = [];
let scoreAway = [];
// console.log(finalScore(inning, 9));

let scoreboard = ( myFunc1, myFunc2, totalRound ) => {
  //Establishing variables
  let currentRound = 1;
  
  //Grab score for each inning
  for (let i = 0 ; i < totalRound + 1 ; i++)
   if ( currentRound <= totalRound){
    myFunc2(myFunc1, totalRound);
    currentRound += 1;
    //console.log(currentRound);
    console.log('away array')
    console.log(scoreAway);
    console.log('home array')
    console.log(scoreHome)
   }
    
    //use the reduce function to take all the scores and input them into their own variable for reporting
    else{
      const newScoreAway = scoreAway.reduce(( acc, value ) => value + acc , 0 );
      const newScoreHome = scoreHome.reduce(( acc, value ) => value + acc , 0 );
      console.log(newScoreAway);
      console.log(newScoreHome);
    
      
    }
}
  scoreboard(inning, finalScore, 9);























































//OLD CODE STORAGE

// if() {

    //     //Log results of score, per inning
    //     console.log( `Inning: ${currentRound} | Away: ${score[i].Away} - Home: ${score[i].Home}`)

    //     //Advance to next inning
    //     currentRound += 1;
    //     return score;
      
    //     }

    // else{
    //   //Report the final score at the end of the game.
    //   let newAway = score.reduce(function (acc, obj) { return acc + obj.away; }, 0);
    //   let newHome = score.reduce(function (acc, obj) { return acc + obj.home; }, 0);
    //   console.log(newAway);
    //   console.log(newHome);







// //f3
// let scoreboard = (myFunc1 , myFunc2 , totalRound) => {
//   //Establish Variables
//   let currentRound = 1;
//   for ( let i = 1 ; i < totalRound ; i++ )




// }
// scoreboard(inning, finalScore, 9)












// //Full "best" Code
// var score = [{ Away : 0, Home : 0 }]; 

// function inning(){
//   let points = Math.floor(Math.random() * 3);
//   return points;
// }


// function finalScore(myFunc, inningsPlayed){
//   for (let i = 0 ; i < inningsPlayed ; i++)
//     {
//      let results =  score.push({ Away: inning() , Home: inning() });
//     }
//   return score;
// }

// let scoreboard = ( myfunc1, myfunc2, totalRound ) => {
//   //Establishing variables
//     let currentRound = 1;
//     //Start of each inning
//     for ( let i = 1; i = currentRound ; i++ )
//       if(currentRound <= totalRound) {
//         //Grab score for each inning
//         myfunc2(myfunc1(), 1)
//         //Log results of score, per inning
//         console.log( `Inning: ${currentRound} | Away: ${score[i].Away} - Home: ${score[i].Home}`)
//         //Advance to next inning
//         currentRound += 1;
//         return score;
//   }
//   else{
//     //Report the final score at the end of the game.
//     let newAway = score.reduce(function (acc, obj) { return acc + obj.away; }, 0);
//     let newHome = score.reduce(function (acc, obj) { return acc + obj.home; }, 0);
//     console.log(newAway);
//     console.log(newHome);
//     }
//   }
//   scoreboard(inning, finalScore, 9);