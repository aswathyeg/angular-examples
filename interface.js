var Bank = /** @class */ (function () {
    function Bank(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return Bank;
}());
var bankobj = new Bank(10, 1);
console.log("interest is" + bankobj.interest + "rebate is" + bankobj.rebate);
