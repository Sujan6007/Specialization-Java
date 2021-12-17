interface Address{
    city:String;
    pincode:number;
}
interface Employee extends Address{
    id:number;
    name:String;
    display():void
}
var v:Employee={
    id: 1,
    name: 'Sujan',
    city: 'Banglore',
    pincode: 560091,
    display: function (): void {
        console.log("demo txt")
    }
};
console.log('Json implementation -----------------')
console.log(`Name is ${v.name} and city is ${v.city}`)

class Manager implements Employee{
    id: number;
    name: String;
    city: String;
    pincode: number;
    constructor(id:number,name:String,city:String,pincode:number){
        this.id=id;
        this.name=name;
        this.city=city;
        this.pincode=pincode;
    }
    display(): void {
        console.log(`hi this is ${this.name} and i am in ${this.city}`)
    }
}
console.log('Object implementation-----------------')
var employee:Manager=new Manager(1,'Srinivas','Banglore',560091)
employee.display();