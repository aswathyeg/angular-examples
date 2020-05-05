class Printerclass{
    doprint():void{
        console.log("printer class");
    }
}
class Subprinterclass extends Printerclass{
    doprint():void{
        super.doprint();
        console.log("subprinter class")

    }
}
 var myobj=new Subprinterclass();
myobj.doprint();