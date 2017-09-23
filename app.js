
var topics = [];


      function renderButtons() {

        $("#button-holder").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {

          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of gif to our button
          a.addClass("giphy");
          // Adding a data-attribute
          a.attr("data-name", topics[i]);
          // Providing the initial button text
          a.text(topics[i]);
          // Adding the button to the button-holder div
          $("#button-holder").append(a);
        }
      };

$(document).on("click", ".giphy", function() {
  	var name = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=4Ob494fCJWhDa7vCwGdXzt6fck2dnpl3&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);

            var gifImage = $("<img>");
           	gifImage.addClass("gif");
            gifImage.attr("src", results[i].images.fixed_height_still.url);
            gifImage.attr('data-still', results[i].images.fixed_height_still.url);
            gifImage.attr('data-animate', results[i].images.fixed_height.url);
            gifImage.attr("data-state", "still");



            gifDiv.prepend(p);
            gifDiv.prepend(gifImage);

            $("#gif-holder").prepend(gifDiv);

    }
});
});

    $(document).on("click", ".gif", function() {

        var state = $(this).attr("data-state");

        if (state === 'still') {
          var aniVal = $(this).attr('data-animate')
          $(this).attr('src', aniVal);
          $(this).attr('data-state', 'animate');
        }

        else if (state === 'animate') {
          var stillVal = $(this).attr('data-still')
          $(this).attr('src', stillVal);
          $(this).attr('data-state', 'still');
        }

    });

$("#create-button").on("click", function() {
	event.preventDefault();
	var userInput = $("#user-input").val().trim();
	topics.push(userInput);
	renderButtons();
	console.log(topics);

});
	



