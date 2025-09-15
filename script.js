// Recursion ==>> function called by itself

function fact(n){      //declaring a function 'fact' with parameter n   
  let fact;  //declaring a variab
  if(n === 1 || n === 0)  // if 'n' is equal to 0 or 1 , return factorial as 1 
    return 1;  // (factorial of 0 and 1 = 1)
  else
    return n * fact(n-1);   // calling the function recursively(In the reverse order) to find the factorial of 'n'
  // eg:
  // fact(3) = 3 * fact(2);
  // fact(2) = 2 * fact(1);
  // fact(1) meets if condition, so 1
  // firstly, winding up the call stack and then unwinding the stack.  
  // As unwind the call stack, multiply each result. 1 * 2 * 3  is 6 and return it.
}
function showResult(){    // triggers this function while the user click on submit
  const n = Number(document.querySelector('#factNum').value);    // taking the value with id 'factNum' from the user 
  //here 'Number' function is used to convert the string to number, As document.querySelector returns string.
  const result = fact(n);     //calling the function 'fact' to find the factorial of the input 
  document.querySelector('#result').innerText = `Factorial of ${n} is ${result}`; // Used to display the result  
}

// Winding and Unwinding
