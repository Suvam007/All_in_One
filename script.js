document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // For demonstration purposes, let's assume the login is successful if both fields are filled
    if (username && password) {
        // Redirect the user to the landing page
        window.location.href = "landing_page.html"; // Replace "landing_page.html" with the path to your landing page
    } else {
        alert("Please enter username and password."); // Inform the user if the fields are empty
    }
});