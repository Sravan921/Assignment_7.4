function outerFunction(innerFunction) {
  if (innerFunction && (typeof innerFunction == "function")) {
      innerFunction();
  }
}

function innerFunction()
{
    console.log("Hello World from Inner Function");
}
