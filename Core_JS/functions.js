//Function Statement aka Functino Declaration
a();
function a(){
    console.log("a called");
}


//Function expression(these are not hoisted)
var b = function(){
    console.log('b called');
}
b();


//ANonymous Function(here we need to initialize the function with a variable so that it can be anonymous)
var c = function(){
    console.log("Anonymous called");
}
c();


//Named Function Expression
var c = function nm(){
    console.log("Nm called");
}

///DIfference betweeen parameters and arguments
// when we put values to function these are called parameters
function n_w(param1,param2){ //These here are parameters
  console.log(param1,param2);
}
n_w("Parth","Good"); //These here are the arguments that we give.


// //First Class Function
// THese are functions and we can pass functions as arguments in a function 
//The ability to be used as values of functions is called first class functions
var th = function n(par1){
    return par1;
} 
th(c());