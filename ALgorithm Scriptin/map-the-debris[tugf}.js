function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let newarr = [];
  const orbPeriod = (arr)=>{
      let a = Math.pow(arr.avgAlt+earthRadius,3);
      let t = 2*Math.PI*Math.sqrt(a/GM);   
      return {name:arr.name,orbitalPeriod:Math.round(t)}   
    }
  for( let c in arr){
    newarr.push(orbPeriod(arr[c]))
  }


return newarr;
  
  
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553},{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);