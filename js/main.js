/* Define form variables */
var form = $("form");
var defaultBalance = "125.00";
var createStatementForm = $('form[name="create-statement"]');

/* Ready JavaScript after HTML/CSS */
$(document).ready( function() {

    /* Append the starting prompt and button for statement creation */
    form.append(startPrompt).append(startButton);

    /* When the start button is clicked, empty the start prompt and button, then build the create-statement form  */
    startButton.click( function(){
        form.empty();
        form.append(formBuildPrompt); // Header Prompt
        form.append(rowA);            // Starting Balance
        form.append(rowB);            // Start Date
        form.append(fieldSetA);       // End Date
        form.append(fieldSetB);       // Standard APY
        form.append(fieldSetC);       // Bonus APY

        /* Append a submit button for form submission */
        form.append(finishPrompt).append(finishButton);

        /* TODO: When the submit button for statement creation is clicked... */
        createStatementForm.submit(function() {
            /* Retrieve Data */
            /* Create Statement Object */
            /* Add Statement to Statements array */
            /* Empty form */
            /* Change name attribute of form to modify-statement */
            /* Build the modify-statement form */
            /* Append a submit button for form submission */

            /* When the submit button for statement modification is clicked...*/
            /* Retrieve Data */
        });
    }); // End startButton click

}); // End document ready

/* TODO:
A. Create Another Statement
B. Modify a Statement
C. Add or Remove a Transaction to Existing Statement

A. Create Another Statement:
    Reload the create-statement Form
    Submit values to next index Statement
B. Modify a Statement
    1. Edit
    Reload the create-statement Form
    Submit values to current index Statement
    2. Delete
    Are you sure you want to delete this statement?
        if No statements (create statement form)
        if 1 or more statements (modify statement form)
C. Add or Remove a Transaction to Existing Statement
    1. Select Statement
        a. Add Transaction
            i. Deposit
            ii. Withdrawal
        b. Remove Transaction
            i. Deposit
            ii. Withdrawal
            iii. View all
*/
