function Withdrawals() {
    this.withdrawals = [];
    this.withdrawalsIndex = 0;
};
Withdrawals.prototype = Object.create(Transactions.prototype);

var Withdrawals.prototype.addWithdrawal = function(Transaction) {
    this.withdrawals.push(Transaction);
};
var updateWithdrawals = function() {
    this.withdrawals = [];
    var transactions = this.$super.transactions;
    for(var i = 0; i < transactions.length; i++) {
        if(transactions[i].amount > 0) {
            this.withdrawals[i] = transactions[i];
        }
    }
};
var deleteWithdrawal = function() {
     splice(this.withdrawalsIndex,1);
};
var Withdrawals.prototype.selectPrevWithdrawal = function() {
    this.withdrawalsIndex--;
    if (this.withdrawalsIndex < 0) {
        this.withdrawalsIndex = this.withdrawals.length-1;
    }
    this.selectCurrentWithdrawal();
};
var Withdrawals.prototype.selectCurrentWithdrawal = function() {
    return this.transactions[this.withdrawalsIndex];
};
var Withdrawals.prototype.selectNextWithdrawal = function() {
    this.withdrawalsIndex++;
    if (this.withdrawalsIndex == this.withdrawals.length) {
        this.withdrawalsIndex = 0;
    }
    this.selectCurrentWithdrawal();
