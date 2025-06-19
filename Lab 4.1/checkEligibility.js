function checkEligibility (age, isEmployed) {

    if (typeof age != "number" || typeof isEmployed != "boolean"){

        return "Invalid input";
    }
     if (age > 18 && isEmployed){
        return " Eligible";
     } else if ( age > 18 && !isEmployed){ 
        return"Conditionally eligible"

     } if ( age <= 18) {
        return "Not eligible"
     }
 }
   console.log(checkEligibility( 25, true));
   console.log(checkEligibility( 50, false));
   console.log(checkEligibility( 18, true));
   console.log(checkEligibility( 16, false));