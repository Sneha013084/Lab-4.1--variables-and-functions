let shoppingList = [];

function renderList( ){
    const listDisplay= document.getElementById( shoppingListDisplay);
    listDisplay.innerHTML= "";
    shoppingList.forEach ((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${index +1}. ${item}`;
        listDisplay.appendChild(li);
    });
}
  function handleAddItem() {
  const input = document.getElementById("itemInput");
  const newItem = input.value.trim();

  if (newItem !== "") {
    shoppingList.push(newItem);  // Add to array
    renderList();                // Update display
    input.value = "";            // Clear input box
  }
}