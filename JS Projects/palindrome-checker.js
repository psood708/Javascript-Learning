 function palindrome(str) {
   let a = str.toLowerCase().replace(/[\W_]/g,'');
   let b = a.split("").reverse().join("");
   return a===b ?true:false;

}

palindrome("eye");