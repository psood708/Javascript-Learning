function whatIsInAName(collection, source) {

  // Only change code below this line
const skey = Object.keys(source);
return collection.filter(obj=> skey.every(key=>obj.hasOwnProperty(key) && obj[key]=== source[key]));
  // Only change code above this line
  
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });