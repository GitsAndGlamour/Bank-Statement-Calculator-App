var form = $("form");

var getEndDateFromPeriod = function() {
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
    console.log("End Date String: ", endDateString, "\n");
    console.log("Start Date: ", startDateValue, "\nBalance Period: ", balancePeriodValue, "\nstart Day: ", startDayValue, "\nReference: ", ref, "\nEnd Date: ", document.getElementById("end-date").value);
    return endDateString;
};
var getEndDateFromCycle = function(startDate) {
    var endDate = new Date(startDate);
    endDate.setDate(28);
        if(endDate.getMonth() == 10) {
            if(isThanksgiving(endDate,28)) {
            endDate.setDate(27);
        } else if(isThanksgiving(endDate,27)) {
            endDate.setDate(26);
        }
    }
    if(endDate.getDay() == 6) {
       endDate.setDate(27);
       if(endDate.getMonth() == 10 && isThanksgiving(endDate,26)) {
           endDate.setDate(25);
       }
    } else if(endDate.getDay() == 0) {
       endDate.setDate(26);
       if(endDate.getMonth() == 10 && isThanksgiving(endDate,25)) {
           endDate.setDate(24);
       } else if(endDate.getMonth() == 11) {
           endDate.setDate(24);
       }
    }
    return endDate;
};
var isThanksgiving = function(endDate, day) {
    var ref = new Date(endDate);
    var thanksgiving = new Date("November 01");
    thanksgiving.setFullYear(ref.getFullYear());
    var thursCount = 0;
    for(var i = 1; i <= 30; i++) {
        thanksgiving.setDate(i);
        if(thanksgiving.getDay() == 4) {
            thursCount++;
            if(thurs == 4) {
                if(thanksgiving.getDate() == day) {
                    return true;
                }
            }
        }
    }
    return false;
};
var displayAPYrates = function() {
    var APYrates = [
        [1, "Rewards Checking", 1.25],
        [2, "Platinum Checking", 0.71],
        [3, "High Yield Savings", 0.61],
        [4, "Money Market Savings", 0.75],
        [5, "3 month", 0.15],
        [6, "6 month", 0.25],
        [7, "12 month", 0.55],
        [8, "24 moth", 0.7],
        [9, "36 month", 0.9],
        [10, "48 month", 1.05],
        [11, "60 month", 1.35]
    ];

    var APYselect = $("<select></select>");
    for(var i = 0; i < APYrates.length; i++) {
        var APYoption = $('<option></option>');
        APYoption.attr("value", Number(APYrates[i][2]));
        APYoption.text(APYrates[i][1] + ' - ' + APYrates[i][2] + '%');
        APYselect.append(APYoption);
    }
    APYselect.attr("id","standard-apy-select");
    return APYselect;
};
var dateToString = function(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var dateString;
    if (Number(month) < 10) {
        month = "0" + month;
    }
    if (Number(day) < 10) {
        day = "0" + day;
    }
    dateString = year + "-" + month + "-" + day;
    return dateString;
};

form.submit( function getSubmitValues() {
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
