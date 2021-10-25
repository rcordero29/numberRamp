// function rampNumbers(num) {
//   let counter = 0;
//   let numInQuestion = num.toString().split('').map(Number);
//   console.log('numInQuestion', numInQuestion);
//   let result;
//   for (let i = 0; i < num; i++) {
//     let ramp = true;
//     // let numInQuestion = num.toString().split('').map(Number);
//     for (j = 0; j < numInQuestion; j++) {
//       if (numInQuestion[j] <= numInQuestion[j + 1] && ramp === true) {
//         console.log(numInQuestion[j], numInQuestion[j + 1]);
//       } else {
//         ramp = false;
//       }
//     }

//     if (ramp === true) counter++;
//   }
//   return counter;
//   // if (i < i+1)
//   // {
//   //   result = "is a ramp number"
//   // }
//   //   else{
//   //     result = 'is not a ramp number'
//   //   }
//   //   return result
//   // }
// }
// console.log(rampNumbers(65));

//For loop to loop through 0-num -> break up num if 2 or more digits -> for loop to compare and check for ramp number -> return true or false -> up the counter if true
let rampFunction = (num) => {
  let rampNumbers = [];
  let realRampCounter = 0;
  let numberArray = Array.from(Array(num + 1).keys());
  for (let i = 0; i < numberArray.length; i++) {
    if (rampCheck(numberArray[i])) {
      rampNumbers.push(numberArray[i]);
      realRampCounter = realRampCounter + 1;
    }
  }
  console.log(realRampCounter);
  console.log(rampNumbers);
};

let rampCheck = (num) => {
  let counter = 0;
  //array of split number
  const numArray = num.toString().split('').map(Number);

  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] > numArray[i + 1]) {
      counter = counter + 1;
      return false;
    } else {
      counter = counter + 1;
    }
  }
  if (counter === numArray.length - 1) {
    return true;
  }
};

console.log(rampFunction(23));
