var validate = true;
var form = $('form[name="create-statement"]');


form.submit( function catchDateError(event) {
    var message = document.getElementById("finish-prompt");
    var start = document.getElementById("start-date").value;
    var end   = document.getElementById("end-date").value
    var day = new Date(start);
    var dateLimit = new Date(start);
    var startDay = Number(day.getUTCDate());
    var max = 90 + startDay;
    var limit;

    dateLimit.setUTCDate(max);
    limit = dateToString(dateLimit);

    try {
        if(start == end)  throw "The start and end dates cannot be the same.";
        if(start > end) throw "The end date cannot occur before the start date.";
        if(end > limit) throw "The end date cannot occur more than 90 days from the start date."

    }
    catch(err) {
        validate = false;
        message.innerHTML = "<b>Invalid Date Input!</b> " + err;
        $("#end-date-label").append(message);
        $("#finish-btn").addClass("alert").text("Try again");
        $(".date-input").css("border-color", "red");

        event.preventDefault();
    }
    if(validate) {
        $("#finish-btn").addClass("success").text("Success!");
        /* TODO: Submit Values */
    }

}); // End finishButton submit

//Select the radio button the Standard APY Input is appended to when it is clicked.
standardAPYInput.click(function () {
    document.getElementById("standard-apy-radio").checked = true;
});

//When the Standard APY Rates Select element is clicked, select the radio button it is appended to.
standardAPYSelect.click(function () {
    document.getElementById("standard-apy-select-radio").checked = true;

    //Change the value of the Standard APY textarea to reflect changes in the select element.
    document.getElementById("standard-apy").value = this.value;

    //If the Bonus APY Checkbox is selected, reflect changes in the Bonus APY Input also.
    if(document.getElementById("bonus-apy-checkbox").checked == true) {
        document.getElementById("bonus-apy").value = this.value;
    }
});

//When the End Date Input is changed, set the Balance Period to reflect these changes.
endDateInput.change(function () {
    var startDateValue = document.getElementById("start-date").value;
    var endDateValue = document.getElementById("end-date").value;
    document.getElementById("period-length").value = "" + getDateDiffInDays(startDateValue, endDateValue);

    //Unselect the cycle-date option.
    document.getElementById("cycle-date").checked = false;
});

//When the Balance Period Input is changed, set the End Date to reflect these changes.
periodLengthInput.change(function () {
    var balancePeriodValue = Number(document.getElementById("period-length").value);
    document.getElementById("end-date").value = getEndDateFromPeriod(balancePeriodValue);
});

//When the Balance Period Input is clicked, unselect the cycle-date option.
periodLengthInput.click(function () {
    document.getElementById("cycle-date").checked = false;
});

//When the Cycle-Date option is clickd, reflect these changes in the End Date Input.
endDateCycleInput.click(function () {
    var startDateValue = document.getElementById("start-date").value;
    var endDateValue = document.getElementById("end-date").value;
    document.getElementById("end-date").value = getEndDateFromCycle(startDateValue);

    //Reflect changes in the Balance Period Input.
    document.getElementById("period-length").value = "" + getDateDiffInDays(startDateValue, endDateValue);
});

//When the User hovers over the Cycle-Date prompt, display extra information in FieldSetA.
endDateCyclePrompt.hover(function() {
    popupDiv.show("slow");
});

//When the User is not hovering over the Cycle-Date prompt, hide extra information in FieldSetA.
endDateCyclePrompt.mouseleave(function() {
    popupDiv.hide("slow");
});

//When the Bonus APY Input is changed, unselect the Bonus APY Checkbox.
bonusAPYInput.change(function() {
    document.getElementById("bonus-apy-checkbox").checked = false;
});

//When the Bonus APY Checkbox is clicked, retrieve values from the Standard APY Input.
bonusAPYDoubleCheckbox.click(function() {
    var standardAPY;

    //Reflect changes in the Bonus APY Input Value.
    if(document.getElementById("standard-apy-radio").checked == true) {
        standardAPY = document.getElementById("standard-apy").value;
    } else {
        standardAPY = document.getElementById("standard-apy-select").value;
    }
    document.getElementById("bonus-apy").value = standardAPY;
});

/* Get Raw and Formatted Data from Create-Statement Form Submit Values */
form.submit( function getSubmitValues() {
    
    //Raw Data Values
    var startingBalanceValue = document.getElementById("starting-balance").value;
    var startDateValue = document.getElementById("start-date").value;
    var endDateValue = document.getElementById("end-date").value;
    var balancePeriodValue = document.getElementById("period-length").value;
    var endDateCycleCheckboxValue = document.getElementById("cycle-date").checked;
    var standardAPYValue = document.getElementById("standard-apy").value;
    var standardAPYSelectValue = document.getElementById("standard-apy-select").value;
    var bonusAPYValue = document.getElementById("bonus-apy").value;
    var standardAPYRadioValue = document.getElementById("standard-apy-radio").checked;
    var standardAPYSelectRadioValue = document.getElementById("standard-apy-select-radio").checked;

    //Formatted Data Values
    var starting_balance = Number(startingBalanceValue);
    var start_date = new Date(startDateValue);
    var end_date = new Date(endDateValue);
    var standard_apy = Number(startingBalanceValue);
    var bonus_apy = Number(bonusAPYValue);

});
