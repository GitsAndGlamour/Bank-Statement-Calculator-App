var isDateError = false;
var form = $("form");

form.submit( function() {
    var startingBalanceValue = document.getElementById("starting-balance").value;
    var startDateValue = document.getElementById("start-date").value;
    var endDateValue = document.getElementById("end-date").value;
    var balancePeriodValue = document.getElementById("period-length").value;
    var standardAPYValue = document.getElementById("standard-apy").value;
    var standardAPYSelectValue = document.getElementById("standard-apy-select").value;
    var bonusAPYValue = document.getElementById("bonus-apy").value;
    var standardAPYRadioValue = document.getElementById("standard-apy-radio").checked;
    var standardAPYSelectRadioValue = document.getElementById("standard-apy-select-radio").checked;

    console.log("startingBalanceValue: ", startingBalanceValue);
    console.log("startDateValue: ", startDateValue);
    console.log("balancePeriodValue: ", balancePeriodValue);
    console.log("standardAPYValue: ", standardAPYValue);
    console.log("standardAPYSelectValue: ", standardAPYSelectValue);
    console.log("bonusAPYValue: ", bonusAPYValue);
    console.log("standardAPYRadioValue", standardAPYRadioValue);
    console.log("standardAPYSelectRadioValue", standardAPYSelectRadioValue);
});

form.submit( function catchDateError(event) {
    var message, start, end;
    message = document.getElementById("finish-prompt");
    start = document.getElementById("start-date").value;
    end   = document.getElementById("end-date").value;
    try {
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

standardAPYInput.click(function () {
    document.getElementById("standard-apy-radio").checked = true;
});
standardAPYSelect.click(function () {
    document.getElementById("standard-apy-select-radio").checked = true;
});
periodLengthInput.change(function () {
    var startDateValue = document.getElementById("start-date").value;
    var balancePeriodValue = Number(document.getElementById("period-length").value);
    var endDateValue = document.getElementById("end-date").value;
    var startDay = new Date(startDateValue);
    var endDay = new Date(startDateValue);
    var startDayValue = Number(startDay.getUTCDate());
    var ref = balancePeriodValue + startDayValue + 1;
    var endDateString;
    endDay.setUTCDate(ref);

    endDateString = dateToString(endDay);
    document.getElementById("end-date").value = endDateString;
    console.log("End Date String: ", endDateString, "\n");
    console.log("Start Date: ", startDateValue, "\nBalance Period: ", balancePeriodValue, "\nstart Day: ", startDayValue, "\nReference: ", ref, "\nEnd Date: ", document.getElementById("end-date").value);
});
