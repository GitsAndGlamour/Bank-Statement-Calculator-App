function Statements() {
    this.statements = [];
    this.statementsIndex = 0;
}
var Statements.prototype.addStatement = function(Statement) {
    this.statements.push(Statement);
};
var Statements.prototype.deleteStatement = function() {
    splice(this.statementsIndex,1)
};
var Statements.prototype.selectPrevStatement = function() {
    this.statementsIndex--;
    if (this.statementsIndex < 0) {
        this.statementsIndex = this.statements.length-1;
    }
    this.selectCurrentStatement();
};
var Statements.prototype.selectCurrentStatement = function() {
    return this.statements[this.statementsIndex];
};
var Statements.prototype.selectNextStatement = function() {
    this.statementsIndex++;
    if (this.statementsIndex == this.statements.length) {
        this.statementsIndex = 0;
    }
    this.selectCurrentStatement();
};
