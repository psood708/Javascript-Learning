
// //----------------EXAMPLE_1-----------------------
// //it;s kind of a countdown
// function x(){
//     for(var i = 1;i<=5;i++){
//     function close(i){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
// //this i*1000 is done so that it can print after 1 second
//     close(i);
// }
//     console.log("Haa bHai");
// }
// x();



// //EXAMPLE_2
function outer_par(b){
  function outer(){
    let a = 10
    function inner(){
    console.log("This is closure value of a:",a,b);
    }
    inner();
  }
  outer();
}
var close = outer_par("Hello!");
 


//EXAMPLE_3-----
// function a (){
//     var a = 0;
//     function b(){
//         console.log(a);
//     }
// }
// var y = a();
// y();