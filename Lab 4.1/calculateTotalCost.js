function calculateTotalCost (price, quantity, taxRate) {

    if (typeof price !== "number"||

        typeof quantity !== "number"||

        typeof taxRate !== "number" ) {
            return "Invalid input";
        }
         
        const subtotal = price *quantity;
        const totalCost = subtotal* (1+taxRate);

        return totalCost.toFixed(2);

}
//test cases
 console.log (calculateTotalCost (25, 15, 0.25));
  console.log (calculateTotalCost (25.10, 15, 0.75));
   console.log (calculateTotalCost (23.5, 8 , 0.95));
    console.log (calculateTotalCost (45, 5, 1.25));
     console.log (calculateTotalCost (8 , 15,0.25));