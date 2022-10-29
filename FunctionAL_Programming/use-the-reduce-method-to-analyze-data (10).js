// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr,bookName) {
  let newarr = [...arr];
  newarr.push(bookName);
  return newarr;
  
  // Change code above this line
}

// Change code below this line
function remove(arr1,bookName) {
  let newarr = [...arr1]
  if (newarr.indexOf(bookName)>= 0) {
    newarr.splice(newarr.indexOf(bookName), 1);
    return newarr;

    // Change code above this line
    }
}