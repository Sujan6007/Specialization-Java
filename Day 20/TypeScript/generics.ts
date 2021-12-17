let arr=['apple',1,2,true,false,()=>{return 'hello'},new Date()]
console.log(arr);

let arr1:Array<number>=[1,2,3,4,5,5,6,6];//here array can hold only number data type
console.log(arr1)
for (const i of arr1) {
    console.log(i)
}