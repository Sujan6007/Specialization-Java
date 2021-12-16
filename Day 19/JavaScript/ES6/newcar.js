// import {Car} from './car'
class BMW extends Car{
    constructor(name,model,price){
        this.name=name;
        this.model=model;
        this.price=price;
        }
}
var bmw = new BMW("BMW","X5",7500000,"sedan");
bmw.getCarDetails();