function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs:5,
  eat:function(){
    console.log("Khana de bhai");
  },
  describe:function(){
    console.log("Yeh toh aisa hee hai!")
  }
};