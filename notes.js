//BIG O AND WHY WE CARE ABOUT IT?
//It's important to have a precise vocabulary to talk about how our code performs. 
//Useful for discussing trade-offs between different approaches.
//When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications. 

//An example.=
// suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n.


//first version
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

//second version
// function addUpTo(n) {
//   return n * (n + 1) / 2;
// }

//WHICH ONE IS BETTER? AND WHAT DOES BETTER MEAN?
// faster? less memory-intensive? more readable? 

// we will focus on speed(time complexity)

//why not use timers?
// function addUpTo(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time elasped: ${(t2 - t1) / 1000} seconds.`);

//The problem with time 
//different machines will record different times.
//the same machine will record different times!
//for fast algorithms, speed measurements may not be precise enough?



