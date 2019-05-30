console.log("HELLO?");

$(document).ready(function () {
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleDogDelete);
  $(document).on("click", "button.edit", handlePostEdit);

  // This function does an API call to delete dog
  function deleteDog(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/dog_data/" + id
    }).then(function () {
      console.log("dog has been deleted");
      window.location.reload();
    });
  }

  function handleDogDelete() {
    var id = $(this).data("id");
    console.log(id);
    /* console.log(dogId); */
    deleteDog(id);
  }

  /* // This function does an API call to edit the dogs info
  function editDog(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/dog_data/" + id
    }).then(function () {
      console.log("dog has been deleted");
      window.location.reload();
    });
  } */

  /* $("#dogFormSubmit").on("click", function(event) {
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
  // function to get and display dogs once form is submitted */
});
