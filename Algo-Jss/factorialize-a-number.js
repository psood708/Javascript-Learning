function factorialize(num) {
  let b = 1
  for(let i = 1;i<=num;i++)
  {
    b *=i
  }
  return b ;
}

factorialize(5);