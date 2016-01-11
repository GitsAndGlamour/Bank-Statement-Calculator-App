function Statement(startBalance, startDate, endDate, standardAPY, bonusAPY) {
    this.startBalance = startBalance;
    this.startDate = startDate;
    this.endDate = endDate;
    this.standardAPY = standardAPY;
    this.bonusAPY = bonusAPY;
    this.Transactions = new Transactions();
}
