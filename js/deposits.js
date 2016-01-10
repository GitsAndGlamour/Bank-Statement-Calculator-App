function Deposits() {
    this.deposits = [];
    this.depositsIndex = 0;
};
Deposits.prototype = Object.create(Transactions.prototype);

var Deposits.prototype.addDeposit = function(Transaction) {
    this.deposits.push(Transaction);
};
var updateDeposits = function() {
    this.deposits = [];
    var transactions = this.$super.transactions;
    for(var i = 0; i < transactions.length; i++) {
        if(transactions[i].amount > 0) {
            this.deposits[i] = transactions[i];
        }
    }
};
var deleteDeposit = function() {
    splice(this.depositsIndex,1);
};
var Deposits.prototype.selectPrevDeposit = function() {
    this.depositsIndex--;
    if (this.depositsIndex < 0) {
        this.depositsIndex = this.deposits.length-1;
    }
    this.selectCurrentDeposit();
};
var Deposits.prototype.selectCurrentDeposit = function() {
    return this.transactions[this.depositsIndex];
};
var Deposits.prototype.selectNextDeposit = function() {
    this.depositsIndex++;
    if (this.depositsIndex == this.deposits.length) {
        this.depositsIndex = 0;
    }
    this.selectCurrentDeposit();
};
