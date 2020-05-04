class Car{
    engine:string;
    constructor(brand){
        this.engine=brand;
    }
    mycar=new Car("ford") ;


}
class Subcar extends Car{
    

disp():void{
    console.log("name of the engine"+this.engine)

}
}
var obj=new Subcar("mini");
obj.disp()