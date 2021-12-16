class Car{
    constructor(name,model,price){
    this.name=name;
    this.model=model;
    this.price=price;
    }
    getCarDetails(){
    console.log('name: '+ this.name+ '--- model: '+this.model+'---- price: '+this.price+'----type'+this.type);
    }
    }
    class Hyundai extends Car{
    constructor(name,model, price,type){
    super(name,model,price);
    this.type=type;
    }
}
    class Kia extends Hyundai{
        constructor(name,model, price,type){
        super(name,model,price);
        this.type=type;
        }
    // carType(){
    // console.log('car type is'+ this.type());
    // }
    
    }
    var car=new Hyundai('toyota', 'fortuner', 4000000,"sedan");
    car.getCarDetails();
    var car=new Kia('Kia', 'Sonet', 4000000,"sedan");
    car.getCarDetails();
    