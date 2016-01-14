/* Statements Object Constructor */
function Statements() {
    this.statements = [];
    this.statementsIndex = 0;
}

/* Add a new statement to the Statements array */
var Statements.prototype.addStatement = function(Statement) {
    this.statements.push(Statement);
};

/* Removes a new statement from the Statements array */
var Statements.prototype.deleteStatement = function() {
    splice(this.statementsIndex,1)
};

/* Select the previous statement in the array */
var Statements.prototype.selectPrevStatement = function() {
    this.statementsIndex--;
    if (this.statementsIndex < 0) {
        this.statementsIndex = this.statements.length-1;
    }
    this.selectCurrentStatement();
};

/* Select the current statement in the array */
var Statements.prototype.selectCurrentStatement = function() {
    return this.statements[this.statementsIndex];
};

/* Select the next statement in the array */
var Statements.prototype.selectNextStatement = function() {
    this.statementsIndex++;
    if (this.statementsIndex == this.statements.length) {
        this.statementsIndex = 0;
    }
    this.selectCurrentStatement();
};
