export default  function isValidEmail(email) {
    // Define a regular expression pattern for a simple email validation
    var pattern = /^\S+@\S+\.\S+$/;
  
    // Use the test method to check if the email matches the pattern
    return pattern.test(email);
  }

  