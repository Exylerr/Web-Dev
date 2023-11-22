function signIn() {
    // Hardcoded credentials for demonstration purposes
    var validStudentNumber = "2021-00000-MN-0";
    var validPassword = "password123";

    // Get user input
    var inputStudentNumber = document.getElementById("text").value;
    var inputPassword = document.getElementById("password").value;

    // Validate the student number format
    var studentNumberRegex = /^2021-\d{5}-MN-0$/;
    if (!studentNumberRegex.test(inputStudentNumber)) {
        // Display an error message for invalid format
        alert("Invalid student number format. Please use the format: 2021-*****-MN-0");
        return; // Stop further processing
    }

    // Check if credentials are valid
    if (inputStudentNumber === validStudentNumber && inputPassword === validPassword) {
        // Redirect to the home page
        window.location.href = "Home-page.html";
    } else {
        // Display an error message for invalid credentials
        alert("Invalid credentials. Please try again.");
    }
}