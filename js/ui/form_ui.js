
var startPrompt = $('<h3>Click here to create your first statement!</h3>');
var startButton = $('<button type="button" class="button" id="start-btn">Start</button>');

var formBuildPrompt = $('<h5>Please Input the following values.</h5>');

var startingBalancePrompt = $('<label>Starting Balance: $</label>');
var startingBalanceInput = $('<input type="number" placeholder="Starting Balance" />');

var startDatePrompt = $('<label>Start Date: </label>');
var startDateInput = $('<input id="start-date-input" type="date" placeholder="mm/dd/yyyy" />');

var endDateDiv = $('<div></div>');

var endDatePrompt = $('<label>End Date: </label>');
var endDateInput = $('<input type="date" placeholder="mm/dd/yyyy" />');

var periodLengthPrompt = $('<label>Number of Days in Period: </label>');
var periodLengthInput = $('<input type="number" placeholder=" x days" />');

var endDateCyclePrompt = $('<label>Choose the last business day of the month:</label>');
var endDateCycleInput = $('<input type="number" placeholder="28" />');

var standardApyPrompt = $('<label>APY%: </label>');
var standardAPYInput = $('<input type="number" placeholder="0.00%" />');
var standardAPYSelect = displayAPYrates();

var bonusApyPrompt = $('<label>Bonus APY$: </label>');
var bonusAPYInput = $('<input type="number" placeholder="0.00%" />');
var bonusAPYDoubleCheckbox = $('<label><input type="checkbox" name="current APY%" />Current APY%</label>');

var finishPrompt = $('<p>To submit the statement and add Withdrawals or Deposits, click here:');
var finishButton = $('<button type="submit" class="button">Submit</button>');

var orPromptA =$('<p> - or - </p>');
var orPromptB =$('<p> - or - </p>');
var orPromptC =$('<p> - or - </p>');
var orPromptD =$('<p> - or - </p>');

startingBalancePrompt.append(startingBalanceInput);
startDatePrompt.append(startDateInput);
endDatePrompt.append(endDateInput);
periodLengthPrompt.append(periodLengthInput);
endDateCyclePrompt.append(endDateCycleInput);
endDateDiv.append(endDatePrompt).append(orPromptA).append(periodLengthPrompt).append(orPromptB).append(endDateCyclePrompt);
standardApyPrompt.append(standardAPYInput).append(orPromptC).append(standardAPYSelect);
bonusApyPrompt.append(bonusAPYInput).append(orPromptD).append(bonusAPYDoubleCheckbox);
