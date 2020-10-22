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

// https://rithmschool.github.io/function-timer-demo/
// WE must decide how algorithm performs when it starts get to infinity. As input n grows to insane level. We are not going to make graph/chart every single time we want to understand how it performs relative to other code. Instead of working with time(rather than counting seconds, which are variable), we will count the NUMBER of simple operations the computer has to perform! We will do it just by looking at the code WITHOUT having to run the code and print graphs/charts. We will roughly approximate what the chart will look like if we were to plot it. 

//Counting operations 
// EX)
// function addUpTo(n) {
//   return n * (n + 1) / 2;
// }
//This example has 1 multiplication, 1 addition, and 1 division. It doesn't matter how large n is. Whether n is million or 5, we have the same number of addition, multiplication, and division. It doesn't change. Again, we have 3 simple operations, regardless of the size of n. 


//EX)
// function addUpTo(n) {
//   let total = 0; //1 assignment
//   for (let i = 1; i <= n; i++) { //1 assignment, n comparisons, n additions and n assignments
//     total += i; //we have n additions inside the loop. if n is million, we are adding million times. //n additions, n assignments
//   }
//   return total;
// }
//this loop is dependent on the value of n. as n grows larger and larger, eventually approaching infinity, the number of operations we will have here that we have to do will grow at least with proportion to n. Therefore, depending on what we count, the number of operations can be as low as 2n or as high as 5n+2. But regardless of the exact number, the number of operations grows roughly proportionally with n. 



