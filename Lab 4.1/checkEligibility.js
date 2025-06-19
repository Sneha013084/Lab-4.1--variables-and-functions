function checkEligibility (age, isEmployed) {

    if (age != "number" || isEmployed != "boolean"){

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
   console.log(checkEligibility( 25,isEmployed));