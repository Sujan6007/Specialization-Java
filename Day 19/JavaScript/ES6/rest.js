console.log('rest operator');
function add(...a){
    var b=0;
    for(const i of a){
       
        b+=i;
        
    }
    console.log(b);
    
}
add(1,2);
add(1,2,3);
add(1,2,3,4);
console