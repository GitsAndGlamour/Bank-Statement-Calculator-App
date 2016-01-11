var isDateError = false;
var form = $("form");
form.submit( function catchDateError(event) {
    var message, start, end;
    message = document.getElementById("finish-prompt");
    start = document.getElementById("start-date").value;
    end   = document.getElementById("end-date").value;
    try {
        if(start.length == 0 || end.length == 0) throw "Date input fields cannot be left blank.";
        if(start == end)  throw "The start and end dates cannot be the same.";
        if(start > end) throw "The end date cannot occur before the start date.";

    }
    catch(err) {
        message.innerHTML = "<b>Invalid Date Input!</b> " + err;
        $("#end-date-label").append(message);
        $(".date-input").css("border-color", "red");
        $("#finish-btn").addClass("alert").text("Try again");
        console.log("Date error.");
        isDateError = true;
        event.preventDefault();
    }
    if(!isDateError) {
        console.log("No error returned.");
        $("#finish-btn").addClass("success").text("Success!");
    } else {
        console.log("Error returned.");
    }

}); // End finishButton submit
