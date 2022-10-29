//Examine the DOCUMENT Object
// console.dir(document);
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// // document.title= 123;
// console.log(document.doctype)
// // console.log(document.all[10]) 
// // document.all[10].textContent='hello';
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)



//SELECTORSS
//GET_ELEMENT_WITH_ID
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('main-header');
// headerTitle.textContent='Hello';
// headerTitle.innerText="Goodnight!!";
// console.log(headerTitle.innerText)
// headerTitle.innerHTML='<h3>My name is....</h3>'

//we can change the css style using this
// headerTitle.style.borderBottom='solid 3px #000'


//get_elements_by_classname
//if we need to get the list items
// var items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent='This is 2nd item';
// items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'Yellow';
// //we can't directly style all the items by writing items
// //the solution is to iterate it in a loop
// for(var i=0;i< items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4'
// }



// //get_elements_by_tag_name
// var li = document.getElementsByTagName('li')
// console.log(li)
// console.log(li[1])
// li[1].textContent='This is 2nd item';
// li[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'Yellow';
// //we can't directly style all the items by writing items
// //the solution is to iterate it in a loop
// for(var i=0;i< li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4'
// }



// //QuerySelector --> This will only select the first query of the type
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';
// var lastItem = document.querySelector('.list-group-item:nth-child(2)');
// lastItem.style.color='coral';

//Query Selector ALL

// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent='hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i =0;odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }





//Traversing the DOM
var itemList = document.querySelector('#items');
//parentnode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentNode)

// //parentElement
// console.log(itemList.parentElement)
// itemList.parentNode.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentNode.parentNode.parentElement)

// //childNodes and children
// console.log(itemList.children)
// console.log(itemList.children[2])
// itemList.children[2].style.backgroundColor ='Red'

// //FirstChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello_1'


// //Next_Sibling
// console.log(itemList.nextSibling);
// //Next_element_sibling
// console.log(itemList.nextElementSibling);



// //Previous Sibling
// console.log(itemList.previousSibling);
// //previousElementSiblibg
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


//createELement

//Create a div
var newDiv = document.createElement('div');
newDiv.className = 'Hello';
console.log(newDiv);

//Add class
newDiv.id = 'Hello1'
newDiv.setAttribute('title',"Hello DIv");

//create text node
var newDivText = document.createTextNode('Hello World');
//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
//this is to put the newDiv before a specific class/id/element
container.insertBefore(newDiv,h1);