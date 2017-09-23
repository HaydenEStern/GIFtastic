# HW - GIFtastic_week_6_hw


## Live Link (If relevant)
 - http://haydenestern.github.io/GIFtastic/

## Enter a topic to dynamically generate a button labled with that topic. Clicking that button generates gifs from the giphy API themed on that

## Requirements
- Dyamically generate buttons from user input using jQuery
- use Ajax for API GET requests
- display gifs and ratings
- allow gifs to play and pause on click

## Technologies Used
- Jquery for Dom Manipulation
- AJAX for API GET requests

## Code Explaination
- Here, you can either provide a brief summary about your code and perhaps what you learned or you can go into specif detail about how you tackled certain tasks.
- Use code snippets for placing example code and then describing it
- Use subheaders to organize your thoughts
- This is the most important part as it will show other what your code does with out having to download the code. 
- In essense, this will also be a form of notes that you may later reference weeks later

-------------

##Here is an example of what a Readme could look like:

### AJAX Request to Giphy (Example)
I created a function that allowed me to make an AJAX request to the Giphy API and then allowed me to pass through a callback function in order to further process the JSON object that was returned. 

```
var settings = {
  "url": "http://api.giphy.com/v1/gifs/search?q=funny%20cat&api_key=dc6zaTOxFJmzC",
  "method": "GET"
  }
}
function getGiphyList(cb){
	$.ajax(settings).done(function (response) {
	  cb(response)
	});
}
```
Add Comment Collapse



