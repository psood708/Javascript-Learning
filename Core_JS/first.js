// var n = 2;
// const square =(num)=>{var ans = num*num;return ans;}
// var square2 = square(n);
// var square4=square(8);
// console.log(square2,square4);

//HOisting
//if we remove x = 7 then error will happen
var x = 7;
function getName(){
    console.log("Javascript is Fun!");
}
getName();
console.log(x);
console.log(getName);