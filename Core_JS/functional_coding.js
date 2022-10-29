//Modular Coding
const radius =[3,1,2,5];
const area = function(radius){
    return Math.PI*radius*radius;
}
const circumference = function(radius){
    return Math.PI*2*radius;
}
const diameter = function(radius){
    return 2*radius;
}
function calculate(radius,func){
    for(let i=0;i<radius.length;i++){
        console.log(func(radius[i]));
    }
}

console.log("The different radius are:-",radius);
console.log("AREA!!");
calculate(radius,area);
console.log("DIAMETER!!");
calculate(radius,diameter);
console.log("CIRCUMFERENCE!!");
calculate(radius,circumference);