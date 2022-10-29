function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
const skey = Object.keys(source);
return collection.filter(obj=> skey.map(key=>obj.hasOwnProperty(key) && obj[key]===source[key]).reduce((a,b)=> a && b));

  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });