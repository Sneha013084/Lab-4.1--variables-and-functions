1. How did you approach creating more flexible functions with parameters?
I started by identifying the values my function needs to work—such as price, quantity, taxRate, and later, discount. I made each of these a parameter so the function can handle different inputs, making it reusable for many scenarios.
For flexibility, I used default parameter values (like setting discount = 0) to allow the function to work even if optional inputs are not provided. I also added input validation using typeof checks to make the function more reliable with different data.
What challenges did you face while incorporating conditional logic in your functions?
The biggest challenge was ensuring that all conditions are logically correct and that they don’t conflict or overlap.Inthe checkEligibility function, I had to think through how to properly structure the if, else if, and else blocks to cover every case without missing or misclassifying a condition.
I also made a typo in the parameter name (nisEmployed instead of isEmployed), which led to incorrect results. This reminded me how important careful naming and debugging are when working with conditional logic.
How does refactoring improve the readability and maintainability of your code?
Refactoring helped clean up the logic and made the function easier to read and reuse. For example, by adding the discount as a parameter and checking for negative subtotals, the code became more realistic.It also made the function easier to modify later—if requirements change. I now have a solid, readable foundation to build on.
