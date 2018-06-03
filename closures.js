/**
 * A closure is a function with in a function that
 * has axcess to 3 differnet scopes. the global scope
 * the scope of the outer function and its own scope.
 * 
 * 
 * 
 * 
 * 
 * 
 */


const globalVariable = "global var";

function outterFunc(param1){
  const variable1 = "var one";
  function innerFunc(param2){
    const variable2 = "vartwo";

    console.log("globalVariable:", globalVariable);
    console.log("variable1:". variable1);
    console.log("variable2:", variable2);
    console.log("param1:", param1);
    console.log("param2:", param2);
    
  }
  innerFunc("param one");
}
outterFunk('param two');