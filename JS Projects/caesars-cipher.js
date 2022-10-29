function rot13(str) {
   let decrypt= [];
   for(let i = 0;i<str.length;i++){
     decrypt.push(str.charCodeAt(i));
   }
   let solve = decrypt.map(function(key){
      if(key>=65 && key<=77){
        return key+13;
      }
      else if(key>=78 && key<=90)
      {
        return key-13;
      }
      else if(key<65){
        return key;
      }
   })
   return String.fromCharCode(...solve);
}

rot13("SERR PBQR PNZC");