
  function formatFullName(firstName,lastName){
  if(! firstName || !lastName || typeof firstName!=="string") || typeof lastName !== "string") {
    return "Invalid name input";
  }

  const formattedFirstName = firstName.charAt(0).toUpperCase + firstName.slice(1).toLowerCase();
   const formattedLastName = lastName.charAt(0).toUpperCase + lastName.slice(1).toLowerCase();

   return '{$formattedLastName},{FirstName}';
}
