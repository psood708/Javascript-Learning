//JS is a synchronous and single thresaded langugae
//with the help of callback functions we can perform async functionalities
setTimeout(function(){
    console.log("Timer!!");

},5000)

function x(y){
console.log("I will come first!!");
y();
}
x(function y(){
    console.log("I will come second!!");
});

function attachEventListener(){
let count = 0;
document.getElementById('clickMe').addEventListener("click",function () {
    console.log("Are You Serious!!!",count++);
    
})
console.log(count);
 
}
attachEventListener();