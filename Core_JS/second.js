// var x =1;
// a();
// b();
// console.log(x);
// function a(){
//     var x = 10;
//     console.log(x);
// }
// function b(){
//     var x = 100;
//     console.log(x);
// }
// function a(){
//     c();
//     function c(){
//         console.log(42);
//     }
// }
// a();

// console.log(a);
// let a = 10;
// var b = 100;


//...CLOSURES....
function z(){
    var b = 900;
    function x(){
    var a = 7;
    function y(){
        console.log(a,b);
        // return a;
    }
   
    y();
  }
x();
}
// var z = x();
// console.log(z);
z();
//here when we return y then it remembers it's lexical scope and then when it is called it works completely fine...