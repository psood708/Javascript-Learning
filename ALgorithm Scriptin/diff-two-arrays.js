function diffArray(arr1, arr2) {
let newArr = [];
function checkbhai(first,second){
for(let i = 0;i<first.length;i++)
{
  if(second.indexOf(first[i])=== -1)
  {
    newArr.push(first[i]);
  }
}
}
checkbhai(arr1,arr2);
checkbhai(arr2,arr1);

return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);