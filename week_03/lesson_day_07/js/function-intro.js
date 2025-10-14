let a = 5;
let b = 3;
let sum1 = a + b;
console.log(sum1);

let c = 5;
let d = 3;
let sum2 = c + d;
console.log(sum2);



//функц гэдэг нь 

function addTwoNumbers(a,b){
    let sum = a + b;
    console.log(sum);
    
}
addTwoNumbers(2,5);
addTwoNumbers(6,8);




function greet(){
    console.log("hello.");
    console.log("welcome back!");
}
greet();
greet();
addTwoNumbers(10,20);


//рандом тоо гаргах 0-1хооронд бутарахй 


console.log(Math.random());

//1-10хооронд бутархай 
console.log(Math.random() * 10);
//бүхэл 
console.log(Math.floor(Math.random() *10)+1);