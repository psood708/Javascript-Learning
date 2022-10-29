const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let fullname = firstAndLast;
  this.getFirstName = function(){
    return fullname.split(" ")[0];
  }
  this.getLastName = function(){
    return fullname.split(" ")[1];
  }
  this.getFullName = function() {
    return fullname;
  };
  this.setFirstName =(name) =>fullname = name+" "+fullname.split(" ")[1];
  this.setLastName = (name)=> fullname = fullname.split(" ")[0]+" "+name;
  this.setFullName = (name)=>fullname = name;
};

const bob = new Person('Bob Ross');
bob.getLastName();