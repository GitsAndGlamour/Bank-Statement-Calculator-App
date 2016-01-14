/* Define form to be submitted */
var form = $('form[name="create-statement"]');

/* Get the difference between two dates in days
 * @param string start - Start Date
 * @param string end   - End Date
 *
 * @return number diffDays - Diference in days
 */
var getDateDiffInDays = function(start, end) {
    var startDateValue = start;
    var endDateValue = end;
    var startDate = new Date(startDateValue);
    var endDate = new Date(endDateValue);
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
};
/* Get the end date from a specified period of time
 * @param number period - number of days to calculate the end date from
 *
 * @return string dateString - the End Date returned in string format
 */
var getEndDateFromPeriod = function(period) {
    var start = document.getElementById("start-date").value;
    var end = document.getElementById("end-date").value;
    var startDate = new Date(start);
    var endDate = new Date(end);
    var startDay = Number(startDate.getUTCDate());
    var endDay = Number(period) + startDay;
    var dateString;

    endDate.setUTCDate(endDay);
    dateString = dateToString(endDate);

    return dateString;
};

/* Get the End Date from the 28th of every month as long as the 28th ends on a non-holiday weekday.
 * If the 28th falls on a weekend, choose the preceeding Friday. If the 28th falls on or the day after a holiday,
 * choose the day before the holiday.
 *
 * @param string start - starting date of the balance summary
 */
var getEndDateFromCycle = function(start) {
    var startDateValue = new Date(start);
    var endDateValue = new Date(start);

    // Set Cycle Date: 28
    endDateValue.setUTCDate(28);

    // IF: The Start Date is on or after the 22nd...
    if (startDateValue.getUTCDate() >= 22) {
        //Set the End Date a month ahead.
        endDateValue.setUTCMonth(startDateValue.getUTCMonth() + 1);
    }
        //IF: The month is November...
        if(endDateValue.getUTCMonth() == 10) {
            // And the 28th is on Thanksgiving...
            if(isThanksgiving(endDateValue,28)) {
            // Set the End Date a day ahead of Thanksgiving.
            endDateValue.setUTCDate(27);
          //ELSE IF: The day before the 28th is Thanksgiving...
        } else if(isThanksgiving(endDateValue,27)) {
            // Set the End Date a day ahead of Thanksgiving.
            endDateValue.setUTCDate(26);
        }
    }
    //IF: The 28th is on Saturday...
    if(endDateValue.getUTCDay() == 6) {
        //Set the End Date to the preceeding Friday.
       endDateValue.setUTCDate(27);
       //IF: That Friday is in November and the day before is Thanksgiving...
       if(endDateValue.getUTCMonth() == 10 && isThanksgiving(endDateValue,26)) {
           //Set the End Date a day ahead of Thanksgiving.
           endDateValue.setUTCDate(25);
       }
   }
   //IF: The 28th is on a Sunday...
   if(endDateValue.getUTCDay() == 0) {
       //Set the End Date to the preceeding Friday.
       endDateValue.setUTCDate(26);
       //IF: That Friday is November and the day before is Thanksgiving...
       if(endDateValue.getUTCMonth() == 10 && isThanksgiving(endDateValue,25)) {
           //Set the End Date a day ahead of Thanksgiving.
           endDateValue.setUTCDate(24);
           //ELSE IF: The 25th is in the Month of December (Otherwise known as Christmas)...
       } else if(endDateValue.getUTCMonth() == 11) {
           //Set the End Date a day ahead of Christmas.
           endDateValue.setUTCDate(24);
       }
    }
    var endDateString = dateToString(endDateValue);
return endDateString;
};

/* Check to see if a given day of November is Thanksgiving
 * @param string date - referential date used in order to get the full year
 *
 * @return boolean - return true if Thanksgiving, false if not.
 */
var isThanksgiving = function(date, day) {
    var ref = new Date(date);
    var thanksgiving = new Date("November 01");
    var thursCount = 0;
    thanksgiving.setUTCFullYear(ref.getUTCFullYear());

    for(var i = 1; i <= 30; i++) {
        thanksgiving.setUTCDate(i);
        if(thanksgiving.getUTCDay() == 4) {
            thursCount++;
            if(thursCount == 4) {
                if(thanksgiving.getUTCDate() == day) {
                    return true;
                }
            }
        }
    }
    return false;
};
/* display common APY rates in a select-type input element
 *
 * @return jQuery Object APYselect - the select-type input element
 * holding all the apy rates as options.
 */
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

/* Get the yyyy-mm-dd string format of any date
 * @param date date - referential date to be parsed into a string
 *
 * @return string dateString - parsed date
 */
var dateToString = function(date) {
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1;
    var day = date.getUTCDate();
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
