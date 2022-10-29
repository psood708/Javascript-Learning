console.log("Start Bhaii!!");
setTimeout(function cb(){
    console.log("Callback!!!");
},5000);


//BLocking the main thread...
//as this will block the above setTimeout and is blocked in the single thread due to the below code.
//JS has a single stack and yes eff...
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate <=startDate + 10000){
 endDate = new Date().getTime();
}
console.log("ENddd");