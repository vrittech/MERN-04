function validateForm() {
  const fullName = document.forms["registerUser"]["fullName"].value;
  const email = document.forms["registerUser"]["email"].value;
  const password = document.forms["registerUser"]["password"].value;
  const fullNameValidationMessage = document.getElementById(
    "fullNameValidationMessage"
  );
  const emailValidationMessage = document.getElementById(
    "emailValidationMessage"
  );
  const passwordValidationMessage = document.getElementById(
    "passwordValidationMessage"
  );

  const names = fullName.split(" ");
  if (fullName === "") {
    fullNameValidationMessage.innerHTML = "Full name is required";
    return false;
  } else if (names.length < 2) {
    fullNameValidationMessage.innerHTML = "Full name is incomplete";
    return false;
  }

  if (email === "") {
    // alert("Email is required");
    emailValidationMessage.innerHTML = "Email is required";
    return false;
  } else if (!email.includes("@")) {
    emailValidationMessage.innerHTML = "Please use correct email";
    return false;
  }

  if (password === "") {
    passwordValidationMessage.innerHTML = "Password is required";
    return false;
  } else if (password.length < 8) {
    passwordValidationMessage.innerHTML = "Please use strong password";
    return false;
  }
}
