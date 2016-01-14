/* Withdrawals Object Constructor */
function Withdrawals() {
    this.withdrawals = [];
    this.withdrawalsIndex = 0;
};

/* Name Withdrawals Object as Child of Transactions */
Withdrawals.prototype = Object.create(Transactions.prototype);

/* Add a transaction to the Withdrawals array */
var Withdrawals.prototype.addWithdrawal = function(Transaction) {
    this.withdrawals.push(Transaction);
};

/* Update or Reset the Withdrawals array */
var updateWithdrawals = function() {
    this.withdrawals = [];
    var transactions = this.$super.transactions;
    for(var i = 0; i < transactions.length; i++) {
        if(transactions[i].amount > 0) {
            this.withdrawals[i] = transactions[i];
        }
    }
};

/* Delete a transaction from the Withdrawals array */
var deleteWithdrawal = function() {
    splice(this.withdrawalsIndex,1);
};

/* Select the previous trasaction in the Withdrawals array */
var Withdrawals.prototype.selectPrevWithdrawal = function() {
    this.withdrawalsIndex--;
    if (this.withdrawalsIndex < 0) {
        this.withdrawalsIndex = this.withdrawals.length-1;
    }
    this.selectCurrentWithdrawal();
};

/* Select the current transaction in the Withdrawals array */
var Withdrawals.prototype.selectCurrentWithdrawal = function() {
    return this.transactions[this.withdrawalsIndex];
};

/* Select the next transaction in the Withdrawals array */
var Withdrawals.prototype.selectNextWithdrawal = function() {
    this.withdrawalsIndex++;
    if (this.withdrawalsIndex == this.withdrawals.length) {
        this.withdrawalsIndex = 0;
    }
    this.selectCurrentWithdrawal();
};
