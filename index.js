//arrow functions
//const add=(parameter1,parameter2)=>parameter1+parameter2

const receivesAFunction=(callback)=>callback();
    
function returnsANamedFunction(){
    return function namedFunction(){
    console.log ('named function')
    } 
 }

 function returnsAnAnonymousFunction(){
     return function (){
         console.log ("anonymous function")
     }
 }