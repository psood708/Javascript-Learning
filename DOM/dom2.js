//Here we will use the EVENTS 

// var button = document.getElementById('button').addEventListener('click',buttonClick)
 
//e is an event parameters

// function buttonClick(e){
    // console.log('Button Clicked!!');
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor='#f4f4f4';
//     // console.log(e);
//     console.log(e.target);
//     //e is the event for which this function is given here
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     //this here will print the object that we clicked onto the DOM
//     var output = document.getElementById('output');
//     output.innerHTML = '<h3>'+e.target.id+'</h3>';
//     console.log(e.type);

  //this clientX,clientY is the position of the mouse click pointer from top or left of the DOM
//   console.log(e.clientX,e.clientY);

//   //offset is from the specific element that we work with 
//   console.log(e.offsetX,e.offsetY);


  //we can check if we have clicked the alt key along with the event so it will return values accordingly True or False
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);

// }






// //Mouse_events
// var button = document.getElementById('button');
// var box = document.getElementById('box');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);


//Here we will interact with the form
var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');
// // these are key commands
// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

// select.addEventListener('change',runEvent);
select.addEventListener('input',runEvent);

// itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);
// itemInput.addEventListener('input',runEvent);
 

// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mousemove',runEvent);
// box.addEventListener('mouseleave',runEvent);
// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);
// button.addEventListener('mouseup',runEvent);

//this will load all automaticallyy
form.addEventListener('submit',runEvent)

function runEvent(e){
  e.preventDefault();
    console.log('EVENT TYPE: '+e.type);
    console.log(e.target.value);

    // //THis below command is done to have different color at different RGB position
    // output.innerHTML = '<h3>MouseX:'+e.offsetX+'</h3><h3>MouseY:'+e.offsetY+'</h3>';
    // document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";


    // THis will be to get theh data written in the box 
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
}