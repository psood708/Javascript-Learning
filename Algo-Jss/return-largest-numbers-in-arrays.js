function largestOfFour(arr) {
  const newArr=[]
  for(let i=0;i<arr.length;i++)
  {
    let num = arr[i][0];
    for(let j =1;j<arr[i].length;j++)
    {
      if(arr[i][j]>num)
      {
        num = arr[i][j]
      }
      newArr[i]=num;
    }
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);