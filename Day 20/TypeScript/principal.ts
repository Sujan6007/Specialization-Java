import { Student } from './student';
class Principal extends Student{
    constructor(id:number,name:String,marks:number){
        super(id,name,marks);
    }

}
var pp:Principal=new Principal(2,"suhas",67);
console.log(pp.name);
// import { Student} from './student';



// class principal extends Student{
// constructor(id:number, name:string,marks:number){
// super(id,name,marks);
// }
// }



// var pp:principal= new principal(1,'sonu',23);
// console.log(pp.name);