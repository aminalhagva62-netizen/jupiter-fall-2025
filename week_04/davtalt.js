//dasgal 1 
console.log("tanii ner hen be")
// console.log(prompt("tanii ner hen be"))

// console.log("sain uu")

//dasgal 2

// console.log("ta heden nastai ve")
 
//     console.log(prompt("ta heden nastai ve"))
//     if (90>= 18){
//     console.log("та насанд хүрсэн байна.");
//  } else{
//     console.log("та насанд хүрээгүй байна.");
//  }
 

 //dasgal 3

 function addNumbers(num1,num2){
    
    console.log(`ehnii toog oruul ${num1}`)
    console.log(`hoyr dahi toog oruul ${num2}`)
    for(let i = 1; i<= 10; i++){
        num3 = num1 + num2;
    
    }
    console.log(`${num1} + ${num2} = ${num3}`);
    

 }
 addNumbers(10.5,20.1)

 //dasgal 4

let fruits = ["alim","banana","jurj"]
    console.log("-----jimsniii jigsaalt------")
    for(let fruit of fruits ){
    console.log(` ${fruit}`);
}
//dasgal 5
let numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(`1- 10  hoorond  dahi tegsh toonuud `)
for(let number of numbers){
    if(number  %2 == 0){
        
        console.log(`${number}`)
    }

}
//dasgal 6 


function MultiplicationTable(number){
 console.log("----5 iin hurd----")
    for(let i  = 1; i <=10; i++){
        add = number * i
                if(i * 2 >=10);
                console.log(`${number} * ${i} = ${add}`)
            
                }
    }
    MultiplicationTable(5);
    
    //dasgal 7

//     function findLongestWord(words){
        
//  longest = findLongestWord(wordList)
// console.log(`hamgiin urt ug ${longest}`)
//     }
//  findLongestWord(wordList = ["python","java"])


 //dasgal 8
 function getStats(numbers){
    let total = 0 
    let avg = 0
    let max = numbers[0]
for(let number of numbers){
if(number >max){
        max = number
}
}
for(let number of numbers){
    if(number + total ){
        total = number 
    }
}
for(let number of numbers ){
    if(total % length ){
avg= number 
            
 }
}
let nums = [10,20,30,40,50]
let (total,avg,max) = getStats(nums)
console.log(`niilber: ${total}, dundaj${avg}, maxium${max}`)
 }
 