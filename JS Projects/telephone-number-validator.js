
function telephoneCheck(str) {
    const result= /^((1\s?)?(\(\d{3}\)|\d{3})(-|\s)?(\d{3})(-|\s)?(\d{4}))$/
    return result.test(str);
      
}
 
 

telephoneCheck("555-555-5555");