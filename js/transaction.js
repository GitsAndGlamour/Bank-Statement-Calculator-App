function Transaction(transactionDate, amount, description, isNegative) {
    this.transactionDate = transactionDate;
    this.amount = amount;
    this.description = description;
    this.isNegative = false;
}
var Transaction.prototype.isPositive = function() {
    this.isPositive = true;
}
var Transaction.prototype.setNegative = function() {
    this.isNegative = true;
};
var Transaction.prototype.toHTML = function() {
    
    /* TODO: Create Transaction Render Function */
};
