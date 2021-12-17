interface Emp{
    name:String;
    age:number;
    salary?:number;
    display?():String;
}
var emp={'name':'sujan','age':21,'salary':25000,'city':'Bangalore'};//here the object or interface is not invoked
console.log(emp.name);                                              //it will accept any variables

var emp1:Emp={'name':'Sujan','age':21,'salary':25000};//this will invoke interface variables
                                                      //json will accept only the variables which are declared in interface
var emp2:Emp={'name':'Ram','age':22,
display:():String =>{
    return "hi this is text ";
}
};//here salary is optional

console.log('-----------------------------------------------')
console.log('Employee name : '+emp1.name)
console.log('Employee age : '+emp1.age)
console.log('Employee salary : '+emp1.salary)

console.log('-----------------------------------------------')
console.log('Employee name : '+emp2.name)
console.log('Employee age : '+emp2.age)
console.log('Employee salary : '+emp2.display())
