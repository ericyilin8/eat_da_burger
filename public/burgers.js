$(function() {
  $(".devour").on("click", function(event) {
    var name = $(this).data("name");

    var burger = {
      name: name
    };


    // Send the PUT request.
    $.ajax("/api/burgers/", {
      type: "PUT",
      data: burger
    }).then(
      function() {
        // Reload the page to get the updated list
        console.log('hi');
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});