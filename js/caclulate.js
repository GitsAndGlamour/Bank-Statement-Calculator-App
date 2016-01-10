var getEndDateFromPeriod = function(startDate, periodLength) {
    var endDate = startDate + periodLength;
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
       }
    }
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
