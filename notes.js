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



//INTRODUCING...BIG O
//Big o notation is a way to formalize fuzzy counting. We are using fuzzy because we are not being specific and we are just assuming way out and imagining what the number of operations looks like as n gets larger. 
//It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow. We won't care about the details, only the trends.

//BIO O DEFINITION
//we say that an algorithm is O(f(n)) if the number of simple oeprations the computer has to do is eventually less than a const times f(n), as n increases.
//f(n) could be linear (f(n) = n )
//f(n) could be quadratic (f(n) = n^2)
//f(n) could be constant (f(n) = 1)
// when we say the algorithm has O(f(n)), we mean that as n grows, the amount of operations/time it takes, is going to grow in proportion with this function. 

//EXAMPLE
// function addUpTo(n) {
//   return n * (n + 1) / 2;
// }
//again, this function ALWAYS has 3 operations; therefore, it is O(1). What this means is as n grows, if n is 10, million, or trillion, it doesn't matter. The number of operations we have to do STAYS the SAME! If we were to graph this, we would have a flat line. There is NO INCREASE in the amount of time it takes and the number of operations as we move toward the larger n. 



// function addUpTo(n) {
//   let total = 0; //1 assignment
//   for (let i = 1; i <= n; i++) { //1 assignment, n comparisons, n additions and n assignments
//     total += i; //we have n additions inside the loop. if n is million, we are adding million times. //n additions, n assignments
//   }
//   return total;
// }
//number of operations is going to grow in proportion to n. Some multiple of n. It doesn't matter it's 10n, 1n, or 50,000n. We just want the general trend. As n grows larger, so does the number of operations. This is called linear time. The graph is linear. As n grows, the number of operations it takes is going to grow in proportion. 



//ANOTHER EXAMPLE 
