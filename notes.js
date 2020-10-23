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
function countupAndDown(n) {
  //
  console.log("Going up");
  for (let i = 0; i < n; i++) {
    console.log(i)
  }
  // 

  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j)
  }
  console.log("Back down. Bye!");
}
// this function has two loops. The first one is O(n) and the second one is also O(n). You might say this has a time complexity of O(2n), but we only care about the big picture. We simplify down to O(n). It doesn't matter. Even if it's 2n or 1000n, it doesn't matter because as n grows to infinity, the coefficients in front whether it's 10 or 2 million, it's so insignificant, we just describe it as o(n).


// YET ANOTHER EXAMPLE
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}
// we will have to run n^2 operations since there are o(n) operations inside of an o(n) operations. Therefore, when we have O(n) inside of an O(n) operation or a nested loop, we are talking about O(n * n) or O(n^2). This is called quadratic time. 

//we should avoid writing algorithms that have a time complexity of n^2. 



//Simplifying Big O Expressions
//when determining the time complexity of an algorithm, there are some helpful rule of thumbs for big O expressions. 


//Constants don't matter!
//O(2n)? It just becomes O(n).
//O(500)? It just becomes O(1).
//O(13^2)? It's just O(n^2).

// Similarly, small terms don't matter 
//O(n+10) becomes O(n)
//O(1000n + 50) becomes O(n)
//O(n^2 + 5n + 8) becomes O(n^2) becuase smaller terms don't matter. 5n is way way smaller than n^2. Try plugging in very large number for n and just compare the difference between 5n and n^2. 


//A couple more examples
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
//The function loops 5 times only if the value of n is less than 5. the answer is its time complexity of O(n). 



function logAtMost5(n) {
  for (let i = i; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
//if n is 10, we are looping 5 times. if n is 1000, we loop 5 times. If n is 2, we loop 2 times. The time complexity is O(1). We loop n times if n is less than 5. But after we hit 5, when n is 6,7,8, all the way up to million, we are going to be looping 5 times very time. It generally takes the exact same number of operations no matter how large n is. 
