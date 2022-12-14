// 'use strict';
//❓ Problem 1 : Given an array of tempratures of one day, calculate the tempreture amplitude. Keep in mind that sometimes there might be a sensor error.

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min tempratures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

//❓ Problem 2: Function should now recieve 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, we should implement functionality twice? No! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge two arrays

// const tempratures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const tempratures2 = [-10, 'error', 3, 5, 25];

// const amplitudeTemp = function (arr1, arr2) {
//   let mergeArray = arr1.concat(arr2);
//   console.log(mergeArray);

//   let max = mergeArray[0];
//   let min = mergeArray[0];

//   for (let item = 0; item <= mergeArray.length; item++) {
//     if (typeof mergeArray[item] !== 'number') continue;
//     if (mergeArray[item] > max) max = mergeArray[item];
//     if (mergeArray[item] < min) min = mergeArray[item];
//   }
//   return max - min;
// };

// console.log(amplitudeTemp(tempratures1, tempratures2));

///////////////////////////////////////////// Coding Challange #1 🎯 /////////////////////////////////////////////

// 1) Understanding the problem
// - Array transformed to string, seperated by ...
// - What is  the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string

// const printForecast = function (arr) {
//   let stringOutput = '...';
//   for (let i = 0; i < arr.length; i++) {
//     stringOutput += ` ${arr[i]}C in ${i + 1} days ...`;
//   }
//   return stringOutput;
// };

// console.log(printForecast([17, 21, 23]));
// console.log(printForecast([12, 5, -5, 0, 4]));
