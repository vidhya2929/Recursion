function factorial(n){      //declaring a function 'fact' with parameter n   
  let fact;  //declaring a variable to store fact
  if(n === 1 || n === 0)  // if 'n' is equal to 0 or 1 , return factorial as 1 
    return 1;  // (factorial of 0 and 1 = 1)
  else
    fact = n * factorial(n-1); 
    return fact  // calling the function recursively(In the reverse order) to find the factorial of 'n'
  // eg:
  // fact(3) = 3 * fact(2);
  // fact(2) = 2 * fact(1);
  // fact(1) meets if condition, so 1
  // firstly, winding up the call stack and then unwinding the stack.  
  // As unwind the call stack, multiply each result. 1 * 2 * 3  is 6 and return it.
}
// Winding and Unwinding
console.log(factorial(5));