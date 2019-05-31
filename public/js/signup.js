$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // Additional Data from Sign-in Form
  var firstNameInput = $("input#first-name-input");
  var lastNameInput = $("input#last-name-input");
  var addressOneInput = $("input#address-one-input");
  var addressTwoInput = $("input#address-two-input");
  var cityInput = $("input#city-input");
  var stateInput = $("#state-input");
  var zipInput = $("input#zip-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      addressOne: addressOneInput.val().trim(),
      addressTwo: addressTwoInput.val().trim(),
      city: cityInput.val().trim(),
      state: stateInput.val(),
      zipcode: zipInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.email,
      userData.password,
      userData.firstName,
      userData.lastName,
      userData.addressOne,
      userData.addressTwo,
      userData.city,
      userData.state,
      userData.zipcode
    );
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(
    email,
    password,
    firstName,
    lastName,
    addressOne,
    addressTwo,
    city,
    state,
    zipcode
  ) {
    $.post("/api/dog-owner-signup", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      addressOne: addressOne,
      addressTwo: addressTwo,
      city: city,
      state: state,
      zipcode: zipcode
    })
      .then(function(data) {
        window.location.replace(data);
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
