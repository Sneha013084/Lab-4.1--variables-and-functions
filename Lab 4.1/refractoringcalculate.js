function calculateTotalCost (price, quantity, taxRate, discount = 0){
    if (typeof price != "number" || typeof quantity != " number" || typeof taxRate != "number" ||typeof discount != "number") {

        return "Invalid output";
    }
    const subtotal = price *quantity;

    const adjustedSubtotal =  subtotal< 0 ? 0 : subtotal;

    const totalCost = adjustedSubtotal *(1+taxRate);

    return taxRate.toFixed(2);
}

console.log(calculateTotalCost(10, 3, 0.07));           
console.log(calculateTotalCost(20, 8, 0.25, 2));        
console.log(calculateTotalCost(16, 5, 0.02, 10));      
console.log(calculateTotalCost("10", 6, 0.50, 2));      
console.log(calculateTotalCost(10, 3, 0.07, "five")); 