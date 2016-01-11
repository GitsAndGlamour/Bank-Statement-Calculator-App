function Transactions() {
    this.transactions = [];
    this.transactionsIndex = 0;
};
var Transactions.prototype.addTransaction = function(Transaction) {
    this.transactions.push(Transaction);
};
var Transactions.prototype.deleteTransaction = function() {
    splice(this.transactionsIndex,1)
};
var Transactions.prototype.selectPrevTransaction = function() {
    this.transactionsIndex--;
    if (this.transactionsIndex < 0) {
        this.transactionsIndex = this.transactions.length-1;
    }
    this.selectCurrentTransaction();
};
var Transactions.prototype.selectCurrentTransaction = function() {
    return this.transactions[this.transactionsIndex];
};
var Transactions.prototype.selectNextTransaction = function() {
    this.transactionsIndex++;
    if (this.transactionsIndex == this.transactions.length) {
        this.transactionsIndex = 0;
    }
    this.selectCurrentTransaction();
};
