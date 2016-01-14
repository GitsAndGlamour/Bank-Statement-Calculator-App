/* Transaction Object Constructor */
function Transaction(transactionDate, amount, description, isNegative) {
    this.transactionDate = transactionDate;
    this.amount = amount;
    this.description = description;
    this.isNegative = false;
}
/* Set amount value in the Transaction to negative */
var Transaction.prototype.setNegative = function() {
    if (!this.isNegative) {
        this.amount *= -1;
        this.isNegative = true;
    }
};
/* Set amount value in the Transaction to positive */
var Transaction.prototype.setPositive = function() {
    if (this.isNegative) {
        this.amount *= -1;
        this.isNegative = false;
    }
};
/* Renders the Transaction in HTML */
var Transaction.prototype.toHTML = function() {

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
/* Adds Id Number to an element created in the toHTML function */
var Transaction.prototype.addIdNumber = function(i) {
    var transaction = $(this.toHTML);
    transaction.attr("id", "transaction"+i);
}
