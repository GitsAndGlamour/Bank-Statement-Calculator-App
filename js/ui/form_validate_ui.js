var isDateError = false;
var form = $("form");

form.submit( function catchDateError(event) {
    var message, start, end, max, limit;
    message = document.getElementById("finish-prompt");
    start = document.getElementById("start-date").value;
    end   = document.getElementById("end-date").value
    var startDate = new Date(start);
    var maxDate = new Date(start);
    var startValue = Number(startDate.getUTCDate());
    limit = 90 + startValue;
    var maxString;
    maxDate.setUTCDate(limit);
    max = dateToString(maxDate);
    console.log("Start: ", start, "\nLimit: ", limit, "\nMax: ", max);

    try {
        if(start == end)  throw "The start and end dates cannot be the same.";
        if(start > end) throw "The end date cannot occur before the start date.";
        if(end > max) throw "The end date cannot occur more than 90 days from the start date."

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

standardAPYInput.click(function () {
    document.getElementById("standard-apy-radio").checked = true;
});
standardAPYSelect.click(function () {
    document.getElementById("standard-apy-select-radio").checked = true;
});
periodLengthInput.change(function () {
    document.getElementById("end-date").value = getEndDateFromPeriod();
});
endDateCycleInput.click(function () {
    console.log("registered checkbox click");
});
endDateCyclePrompt.hover(function() {
    popupDiv.show();
});
endDateCyclePrompt.mouseleave(function() {
    popupDiv.hide();
});
