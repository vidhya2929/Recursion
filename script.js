// Recursion ==>> function called by itself

function fact(n){     //declaring a function 'fact' with parameter n   
  if(n === 1 || n === 0)  // if 'n' is equal to 0 or 1 , return factorial as 1 
    return 1;  // (factorial of 0 and 1 = 1)
  else
    return n * fact(n-1);   // calling the function recursively to find the factorial of 'n'
  // fact(3) = fact(3-1)
  // fact(2) = fact(2-1)
  // fact(1) = 1
}
function showResult(){    // triggers this function while the user click on submit
  const n = Number(document.querySelector('#factNum').value);    // taking the value with id 'factNum' from the user 
  //here 'Number' function is used to convert the string to number, As document.querySelector returns string.
  const result = fact(n);     //calling the function 'fact' to find the factorial of the input 
  document.querySelector('#result').innerText = `Factorial of ${n} is ${result}`; // Used to display the result  
}