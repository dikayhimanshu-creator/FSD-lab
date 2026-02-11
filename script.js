function validateForm() {

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value.trim();

    // Name validation
    if (name === "") {
        alert("Name must not be empty");
        return false;
    }

    // Email validation
    if (email === "") {
        alert("Email must not be empty");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email address");
        return false;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Mobile validation
    if (isNaN(mobile)) {
        alert("Mobile number must contain only digits");
        return false;
    }

    if (mobile.length !== 10) {
        alert("Mobile number must be exactly 10 digits");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
