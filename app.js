// It will be used for taking arguments  from inner to outer functions.

function outerFunction(innerFunction) {
  if (innerFunction && (typeof innerFunction == "function")) {
      innerFunction();
  }
}

// It will display the Message from Inner Function
function innerFunction()
{
    console.log("Hello World from Inner Function");
}
