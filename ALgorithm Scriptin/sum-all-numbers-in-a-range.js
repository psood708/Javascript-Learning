function sumAll(arr) {
  let high = Math.max(arr[0],arr[1]);
  let low = Math.min(arr[0],arr[1]);
  let sum = 0;
  for(let i = low;i<=high;i++)
  {
     sum = sum+i;
  }
  return sum;
}

sumAll([1, 4]);