
function receivesAFunction(callback) {
    return callback();
}

const namedFunction = returnsANamedFunction();
namedFunction();



returnsAnAnonymousFunction(() => {
    console.log("returns an anonymous function");
  });
  
  