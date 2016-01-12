
var startPrompt = $('<h3>Click here to create your first statement!</h3>');
var startButton = $('<button type="button" class="button" id="start-btn">Start</button>');

var formBuildPrompt = $('<h5>Please Input the following values.</h5>');

var startingBalancePrompt = $('<label for="starting-balance" class="right inline">Starting Balance</label>');
var startingBalanceInput = $('<input id="starting-balance" type="number" name="startingbalance" placeholder="25.00" min="0" step="0.01" autofocus="autofocus" required="required" />');

var startDatePrompt = $('<label for="start-date" class="right inline">Start Date</label>');
var startDateInput = $('<input id="start-date" class="date-input" type="date" required="required" />');
var endDateDiv = $('<div></div>');

var endDatePrompt = $('<label for="end-date" class="right inline">End Date</label>');
var endDateInput = $('<input id="end-date" class="date-input" type="date" name="enddate" required="required" />');

var periodLengthPrompt = $('<label for="period-length" class="right inline">Number of Days in Balance Period</label>');
var periodLengthInput = $('<input id="period-length" type="number" placeholder=" x days" name="enddate" min="1" max="90" />');

var endDateCyclePrompt = $('<label>Choose the last business day of the month: </label>');
var endDateCycleInput = $('<input id="cycle-date" type="checkbox" name="enddate" />');

var standardAPYPrompt = $('<label for="standard-apy-radio">APY</label>');
var standardAPYInput = $('<input id="standard-apy" type="number" placeholder="0.00%" min="0" step="0.01" />');
var standardAPYSelectPrompt = $('<label for="standard-apy-select-radio">Standard Rates</label>');
var standardAPYSelect = displayAPYrates();
var standardAPYInputRadio = $('<input id="standard-apy-radio" type="radio" value="1" name="standardapy" />');
var standardAPYSelectRadio = $('<input id="standard-apy-select-radio" type="radio" value="0" name="standardapy" />');

var bonusAPYPrompt = $('<label>Bonus APY</label>');
var bonusAPYInput = $('<input id="bonus-apy" type="number" placeholder="0.00%"  min="0" step="0.01" />');
var bonusAPYDoubleCheckbox = $('<label>Same as standard APY above: <input id="bonus-apy-checkbox" type="checkbox" name="currentapy" /></label>');

var finishPrompt = $('<p id="finish-prompt">To submit the statement and add Withdrawals or Deposits, click here:');
var finishButton = $('<button type="submit" class="button" id="finish-btn">Submit</button>');

var errorMessage = $("<p><b>Please fix errors and try again.</b></p>");

var fieldSetA = $('<fieldset></fieldset>');
var fieldSetB = $('<fieldset></fieldset>');
var fieldSetC = $('<fieldset></fieldset>');
var fieldLegendA = $('<legend>End Date</legend>');
var fieldLegendB = $('<legend>Standard APY</legend>');
var fieldLegendC = $('<legend>Bonus APY</legend>');

var rowA = $('<div class="row"></div>');
var rowACol1 = $('<div class="small-6 columns"></div>');
var rowACol2 = $('<div class="small-6 columns"></div>');

rowACol1.append(startingBalancePrompt);
rowACol2.append(startingBalanceInput);
rowA.append(rowACol1).append(rowACol2);

var rowB = $('<div class="row"></div>');
var rowBCol1 = $('<div class="small-4 columns"></div>');
var rowBCol2 = $('<div class="small-8 columns"></div>');

rowBCol1.append(startDatePrompt);
rowBCol2.append(startDateInput);
rowB.append(rowBCol1).append(rowBCol2);

var rowC = $('<div class="row"></div>');
var rowCCol1 = $('<div class="small-4 columns"></div>');
var rowCCol2 = $('<div class="small-8 columns"></div>');

rowCCol1.append(endDatePrompt);
rowCCol2.append(endDateInput);
rowC.append(rowCCol1).append(rowCCol2);
fieldSetA.append(fieldLegendA).append(rowC);

var rowD = $('<div class="row"></div>');
var rowDCol1 = $('<div class="small-6 columns"></div>');
var rowDCol2 = $('<div class="small-6 columns"></div>');

periodLengthPrompt.append(periodLengthInput);
endDateCyclePrompt.append(endDateCycleInput);
rowDCol1.append(periodLengthPrompt);
rowDCol2.append(endDateCyclePrompt);
rowD.append(rowDCol1).append(rowDCol2);
fieldSetA.append(rowD);

var rowE = $('<div class="row"></div>');
var rowECol1 = $('<div class="small-4 columns"></div>');
var rowECol2 = $('<div class="small-8 columns"></div>');

rowECol1.append(standardAPYInputRadio).append(standardAPYPrompt).append(standardAPYInput);
rowECol2.append(standardAPYSelectRadio).append(standardAPYSelectPrompt).append(standardAPYSelect);
rowE.append(rowECol1).append(rowECol2);
fieldSetB.append(fieldLegendB).append(rowE);

var rowF = $('<div class="row"></div>');
var rowFCol1 = $('<div class="small-6 columns"></div>');
var rowFCol2 = $('<div class="small-6 columns"></div>');

bonusAPYPrompt.append(bonusAPYInput);
rowFCol1.append(bonusAPYPrompt);
rowFCol2.append(bonusAPYDoubleCheckbox);
rowF.append(rowFCol1).append(rowFCol2);
fieldSetC.append(fieldLegendC).append(rowF);
