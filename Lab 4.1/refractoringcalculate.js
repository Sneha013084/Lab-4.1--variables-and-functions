function calculateTotalCost (price, quantity, taxRate, discount = 0){
    if (typeof price != "number" || typeof quantity != " number" || typeof taxRate != "number" ||typeof discount != "number") {

        return "Invalid output";
    }
    const subtotal = price *quantity;

    const adjustedSubtotal =  subtotal< 0 ? 0 : subtotal;

    const totalCost = adjustedSubtotal *(1+taxRate);

    return taxRate.toFixed(2);
}
   