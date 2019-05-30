console.log("HELLO?");

$(document).ready(function() {
  // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false;
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleDogDelete);
  $(document).on("click", "button.edit", handleDogEdit);

  // This function does an API call to delete dog
  function deleteDog(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/dog_data/" + id
    }).then(function() {
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

  // Update a current dog, bring user back to the dog form
  function updateDog(dog) {
    $.ajax({
      method: "PUT",
      url: "/dog-form",
      data: dog
    }).then(function() {
      window.location.href = "/dog-owner";
    });
  }

  function handleDogEdit() {
    localStorage.setItem("dogData", "");
    
    /* if (updating) {
      newDog.id = dogId;
      updateDog(newDog);
    } */
    var dogData = {
      name: $("[data-name]").attr("data-name"),
      breed: $("[data-breed]").attr("data-breed"),
      age: $("[data-age]").attr("data-age"),
      sex: $("[data-sex]").attr("data-sex"),
      weight: $("[data-weight]").attr("data-weight")
    };
    localStorage.setItem("dogData", JSON.stringify(dogData));

    window.location.href = "/dog-form";

  }

  // Gets dog data for the current dog if we're editing
  function getDogData(id, type) {
    $.get(queryUrl, function(data) {
      if (data) {
        console.log(data.AuthorId || data.id);
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);
        bodyInput.val(data.body);
        authorId = data.AuthorId || data.id;
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }

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
