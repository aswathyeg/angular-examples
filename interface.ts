interface Loan{
    interest:number
}
class Bank implements Loan{
    interest:number
    rebate:number
    constructor( interest:number,rebate:number){
        this.interest=interest;
        this.rebate=rebate;
    }
}
var bankobj=new Bank(10,1)
console.log("interest is"+bankobj.interest + "rebate is" + bankobj.rebate)