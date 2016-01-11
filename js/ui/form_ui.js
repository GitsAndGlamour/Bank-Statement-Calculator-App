
var startPrompt = $('<h3>Click here to create your first statement!</h3>');
var startButton = $('<button type="button" class="button" id="start-btn">Start</button>');

var formBuildPrompt = $('<h5>Please Input the following values.</h5>');

var startingBalancePrompt = $('<label>Starting Balance: $</label>');
var startingBalanceInput = $('<input id="starting-balance" type="number" name="startingbalance" placeholder="25.00" min="0" autofocus="autofocus" required="required" />');

var startDatePrompt = $('<label id="start-date-label">Start Date: </label>');
var startDateInput = $('<input id="start-date" class="date-input" type="date" placeholder="mm/dd/yyyy" required="required" />');
var endDateDiv = $('<div></div>');

var endDatePrompt = $('<label id="end-date-label">End Date: </label>');
var endDateInput = $('<input id="end-date" class="date-input" type="date" placeholder="mm/dd/yyyy" name="enddate" required="required" />');

var periodLengthPrompt = $('<label>Number of Days in Period: </label>');
var periodLengthInput = $('<input id="period-length" type="number" placeholder=" x days" name="enddate" min="1" />');

var endDateCyclePrompt = $('<label>Choose the last business day of the month: </label>');
var endDateCycleInput = $('<input id="cycle-date" type="checkbox" name="enddate" />');

var standardAPYPrompt = $('<label>APY%: </label>');
var standardAPYInput = $('<input id="standard-apy" type="number" placeholder="0.00%" min="0" step="0.01" />');
var standardAPYSelect = displayAPYrates();

var bonusAPYPrompt = $('<label>Bonus APY$: </label>');
var bonusAPYInput = $('<input id="bonus-apy" type="number" placeholder="0.00%"  min="0" step="0.01" />');
var bonusAPYDoubleCheckbox = $('<label><input type="checkbox" name="currentapy" />Current APY%</label>');

var finishPrompt = $('<p id="finish-prompt">To submit the statement and add Withdrawals or Deposits, click here:');
var finishButton = $('<button type="submit" class="button" id="finish-btn">Submit</button>');

var errorMessage = $("<p><b>Please fix errors and try again.</b></p>");

var orPromptA =$('<p> - or - </p>');
var orPromptB =$('<p> - or - </p>');
var orPromptC =$('<p> - or - </p>');
var orPromptD =$('<p> - or - </p>');
var hrA = $('<hr width="75%" size="2" color="black">');
var hrB = $('<hr width="75%" size="2" color="black">');

startingBalancePrompt.append(startingBalanceInput);
startDatePrompt.append(startDateInput);
endDatePrompt.append(endDateInput);
periodLengthPrompt.append(periodLengthInput);
endDateCyclePrompt.append(endDateCycleInput);
endDateDiv.append(endDatePrompt).append(orPromptA).append(periodLengthPrompt).append(orPromptB).append(endDateCyclePrompt).append(hrA);
standardAPYSelect.append(hrB);
standardAPYPrompt.append(standardAPYInput).append(orPromptC).append(standardAPYSelect).append(hrB);
bonusAPYPrompt.append(bonusAPYInput).append(orPromptD).append(bonusAPYDoubleCheckbox);
