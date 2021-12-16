// () =>  single line

// () => { multiple line
// }


function abc(){
    console.log("hi")
}
abc();

var x=(a,b) => a+b
console.log(x(10,20));

// var xyz = () => {var a=10;
//                 var b=20;
//                 console.log(`the result is ${a+b}`);
//                     return a+b;
                
// }

var xyz = (a,b) => {
    console.log(`the result is ${a+b}`);
        return a+b;
}
xyz(10,20);


// function add(x){
//     var a = x;
//     console.log(a);
// }
var b= xyz();
console.log(b);