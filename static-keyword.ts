class Members{
    static num:number;
    static disp():void{
        console.log("Hi everyone");
    }
}
//A static variable retains its values till the program finishes execution.
// Static members are referenced by the class name.
Members.num=12;
Members.disp();