/* Transactions Object Constructor */
function Transactions() {
    this.transactions = [];
    this.transactionsIndex = 0;
};
/* Add a tranaction to the Transactions array */
var Transactions.prototype.addTransaction = function(Transaction) {
    this.transactions.push(Transaction);
};
/* Remove a tranaction from the Transactions array */
var Transactions.prototype.deleteTransaction = function() {
    splice(this.transactionsIndex,1)
};
/* Select the previous transaction in the Transactions array */
var Transactions.prototype.selectPrevTransaction = function() {
    this.transactionsIndex--;
    if (this.transactionsIndex < 0) {
        this.transactionsIndex = this.transactions.length-1;
    }
    this.selectCurrentTransaction();
};
/* Select the current transaction in the Transactions array */
var Transactions.prototype.selectCurrentTransaction = function() {
    return this.transactions[this.transactionsIndex];
};
/* Select the next transaction in the Transactions array */
var Transactions.prototype.selectNextTransaction = function() {
    this.transactionsIndex++;
    if (this.transactionsIndex == this.transactions.length) {
        this.transactionsIndex = 0;
    }
    this.selectCurrentTransaction();
};
