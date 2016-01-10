
var startPrompt = $('<h3>Click here to create your first statement!</h3>');
var startButton = $('<button type="button" class="button" id="start-btn">Start</button>');
var startingBalLabel = $('<label>Starting Balance: $</label>');
var startingBalInput = $('<input type="number" placeholder="Starting Balance" />');
var startDateLabel = $('<label>Start Date: </label>');
var startDateInput = $('<input type="date" placeholder="mm/dd/yyyy" />');
var periodLengthLabel = $('<label>Number of Days in Period: </label>');
var periodLengthInput = $('<input type="number" placeholder=" x days" />');
$(document).ready( function() {

    $("form").append(startPrompt).append(startButton);
    startButton.click( function(){
        $("form").empty();
    }); // End startButton click
}); // End document ready
