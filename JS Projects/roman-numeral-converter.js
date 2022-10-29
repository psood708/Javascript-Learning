function convertToRoman(num) {
  let roman = "";
  let romannum = {
    M:1000, CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1
  }
  for (let c in romannum){
    for(let cnum = romannum[c];num>=cnum;num-=cnum){
      roman +=c;
    }
  }
  return roman;
}

convertToRoman(69);