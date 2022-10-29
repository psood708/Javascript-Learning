function first(){
    console.log('first...');
    third();
}
function second(){
    console.log('second');
   first();
}
function third(){
    console.log('third');
}
second();