# Callback-example-in-Javascript


In JavaScript, functions are objects. So we can pass objects to functions as parameters.

We can also pass functions as parameters to other functions and call them inside the outer functions. So callback is a function that is passed to another function. When the first function is done, it will run the second function.



Callback as an Arrow Function:
If you prefer, you can also write the above same callback function as an ES6 arrow function, which is a newer type of function in JavaScript:
The problem with callbacks is it creates something called “Callback Hell.” Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code. So in this situation Promises came to handle the nested callback in a better way.
