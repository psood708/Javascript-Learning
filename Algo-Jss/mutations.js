function mutation(arr) {
 
  let test = arr[1].toLowerCase()
  let targ = arr[0].toLowerCase()
  for(let i=0;i<test.length;i++)
  {
    if(targ.indexOf(test[i])<0){return false}

  }

  return true;
}

mutation(["hello", "hey"]);