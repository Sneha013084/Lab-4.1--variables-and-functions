
let shoppingList = [];

function addItem (item) {
    const lowerItem = item.toLowerCase();
    const alreadyExists = shoppingList.some(existingItem =>existingItem.toLowerCase() ===lowerItem

    );
    if(! alreadyExists) {
        shoppingList.push(item);
    } else {
     console.log(`"${item}" is already in the shopping list.`);
    }
    }
    //testing
     addItem("Milk");
     addItem("milk");
