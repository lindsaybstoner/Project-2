/* console.log("HELLO?");

$(document).ready(function() {
  $("#dogFormSubmit").on("click", function(event) {
    console.log("on submit button");
    event.preventDefault();
    var dogName = $("#dog-name");
    var dogBreed = $("#dog-breed");
    var dogAge = $("#dog-age");
    var dogSex = $("#dog-sex");
    var dogWeight = $("#dog-weight");
    var dogData = {
      name: dogName.val().trim(),
      breed: dogBreed.val().trim(),
      age: dogAge.val().trim(),
      sex: dogSex.val().trim(),
      weight: dogWeight.val().trim()
    };
    console.log(dogData);

    if (
      !dogData.name ||
      !dogData.breed ||
      !dogData.age ||
      !dogData.sex ||
      !dogData.weight
    ) {
      return;
    }

    createDog(
      dogData.name,
      dogData.breed,
      dogData.age,
      dogData.sex,
      dogData.weight
    );

    // dogName.val("");
    // dogBreed.val("");
    // dogAge.val("");
    // dogSex.val("");
    // dogWeight.val("");
  });
  // post request to create dog
  function createDog(name, breed, age, sex, weight) {
    $.post("/api/dog-form", {
      name: name,
      breed: breed,
      age: age,
      sex: sex,
      weight: weight
      // add userId?
    });
  }
  // function to get and display dogs once form is submitted
});
 */
