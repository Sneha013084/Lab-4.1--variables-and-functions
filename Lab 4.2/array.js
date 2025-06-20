let shoppingList = [];

function addItem( item){
     shoppingList.push(item);
}
function removeItem (){
    shoppingList.pop();
}
function displayList(){
    if(shoppingList.length===0){
        console.log(" The shopping list is empty");
    }else{
        console.log("Shopping List:");

        shoppingList.forEach ((item, index) =>{
            console.log(`${index+1}.${item}`)

        });
    }
}

// testing
   
  addItem("Milk");
  addItem("egg");
  addItem ("Bread");

  displayList();
  removeItem();
  displayList ();

  removeItem();
  displayList();