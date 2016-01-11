function Transaction(transactionDate, amount, description, isNegative) {
    this.transactionDate = transactionDate;
    this.amount = amount;
    this.description = description;
    this.isNegative = false;
}
var Transaction.prototype.setNegative = function() {
    if (!this.isNegative) {
    this.amount *= -1;
    this.isNegative = true;
    }
};
var Transaction.prototype.setPositive = function() {
    if (this.isNegative) {
    this.amount *= -1;
    this.isNegative = false;
    }
};
var Transaction.prototype.toHTML = function() {

    /* TODO: Create Transaction Render Function */
    transactionHTML  = '<tr>';
    transactionHTML += '<td>';
    transactionHTML += this.transactionDate;
    transactionHTML += '</td>';
    transactionHTML += '<td>';
    transactionHTML += this.amount;
    transactionHTML += '</td>';
    transactionHTML += '<td>';
    transactionHTML += this.description;
    transactionHTML += '</td>';
    transactionHTML += '</tr>';

    return transactionHTML;
};
var Transaction.prototype.addIdNumber = function(i) {
    var transaction = $(this.toHTML);
    transaction.attr("id", "transaction"+i);
}
