export class Student{
    id:number;
    name:String;
    marks:number;


    constructor(id:number,name:String,marks:number){
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    verify():void{
        if(this.marks>= 35){
                console.log('Pass');
                console.log(`Student name is ${this.name} and marks is ${this.marks}`)
                // console.log(`Student name is ${this.name} and passed in ${this.subject}`)
            }
            else
            {
                console.log('Fail');
            }
    }

}
class Teacher extends Student{
    subject:String;
    constructor(id:number,name:String,marks:number,subject:String){
        super(id,name,marks);
        this.subject = subject;
    }
}
// var std:Student=new Teacher(1,"sujan",75,"Maths");
var std:Student=new Teacher(1,"sujan",75,"Maths");
std.verify();


