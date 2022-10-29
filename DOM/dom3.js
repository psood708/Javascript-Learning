var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

///form submit event
form.addEventListener('submit',addItem);

//Delete Event
itemList.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filterItems);

function addItem(e){
    //To prevent normal submition of the form
    e.preventDefault();
     
    //get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    ///class addition
    li.className='list-group-item';
    console.log(li);
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button for each li
    var deleteBtn = document.createElement('button');
    //add classes to deletebtn
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    //apend text node
    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);
    //append li to list
    itemList.appendChild(li);

}

//remove item
function removeItem(e){
     if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure??')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
     }
}

//filter items

function filterItems(e){
    //converts text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);
    //get items of the list
    var items = itemList.getElementsByTagName('li');
    console.log(items)
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}