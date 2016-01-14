/* Deposits Object Constructor */
function Deposits() {
    this.deposits = [];
    this.depositsIndex = 0;
};

/* Name Deposits Object as Child of Transactions */
Deposits.prototype = Object.create(Transactions.prototype);

/* Add a transaction to the Deposits array */
var Deposits.prototype.addDeposit = function(Transaction) {
    this.deposits.push(Transaction);
};

/* Update or Reset the Deposits array */
var updateDeposits = function() {
    this.deposits = [];
    var transactions = this.$super.transactions;
    for(var i = 0; i < transactions.length; i++) {
        if(transactions[i].amount > 0) {
            this.deposits[i] = transactions[i];
        }
    }
};

/* Delete a transaction from the Deposits array */
var deleteDeposit = function() {
    splice(this.depositsIndex,1);
};

/* Select the previous trasaction in the Deposits array */
var Deposits.prototype.selectPrevDeposit = function() {
    this.depositsIndex--;
    if (this.depositsIndex < 0) {
        this.depositsIndex = this.deposits.length-1;
    }
    this.selectCurrentDeposit();
};

/* Select the current transaction in the Deposits array */
var Deposits.prototype.selectCurrentDeposit = function() {
    return this.transactions[this.depositsIndex];
};

/* Select the next transaction in the Deposits array */
var Deposits.prototype.selectNextDeposit = function() {
    this.depositsIndex++;
    if (this.depositsIndex == this.deposits.length) {
        this.depositsIndex = 0;
    }
    this.selectCurrentDeposit();
};
