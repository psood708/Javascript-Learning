function getIndexToIns(arr, num) {
  return arr.filter(val=>num>val).length;
}

getIndexToIns([40, 60], 50);