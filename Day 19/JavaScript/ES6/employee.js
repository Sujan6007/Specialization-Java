function emp(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
}
emp.prototype={
    getDetails:function(){
        console.log("inside the getdetails")
        console.log("name "+this.name+"Age "+this.age+"salary "+this.salary)
        return " ";
    }
}
var e = new emp("sujan",21,25000)
e.getDetails();

