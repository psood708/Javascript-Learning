function addTogether() {
  const[first,second]=arguments;
  if(typeof(first)!=="number"){
    return undefined;
  }
  if(second===undefined){
    return (second)=>addTogether(first,second);
  }
  if(typeof(second)!=="number"){
    return undefined;
  }
  else{
    return first+second;
  }
}

addTogether(2,3);