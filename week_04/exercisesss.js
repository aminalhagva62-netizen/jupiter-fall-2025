function addAndPrint(num1,num2){
    let total = num1 + num2;
    console.log(`total: ${total}`);

}
let sum1 = addAndPrint(10,20);
console.log(sum1)
let result1 = sum1 - 5; 
console.log(result1);

function addAndResult(num1,num2){
    let total = num1 + num2 
    return  total;

}

let sum2 =addAndResult(7,15)
console.log(sum2)
let result2 = sum2 - 5
console.log(result2)




//exercises







// //hoyr toog nemeh 1
// function addTwoNumbers(num1,num2){
//     return num1 + num2;

// }
// let result = addTwoNumbers(10,25);
// console.log(`niilber: ${result}`);







// //buren ner uusgeh 2
function getFullName(firstName,LastName){
    return firstName + LastName

}
let result = getFullName("bat")
let a1 = getFullName("dprj")
console.log(`${result} iin ${a1}`)




//tegsh ontsogtiin talbai 3



function calculateArea(length,width){
let total = length * width;
console.log(`talbai: ${total}`)
}
calculateArea(3,5)


//цейлсийг фарангетрүү буцаах 4


function celsiusToFahrenheit(celsius){
let f = celsius *1.8 +32
console.log(`fahrenheit: ${f} F`)
}
celsiusToFahrenheit(32)


///tegsh too eseh 
function isEven(number){
    if(number % 2 == 0 ){
        return[true,number]
    }else{
        return [false,number]
    }

}
let [evenOrOdd,number]=isEven(10)
console.log(`${number } - tegsh uu ${evenOrOdd}`)



//tom usgend horvuuleh 6


// function toUpperCase(text){
// let n = text.toUpperCase()
// return n 
// }
// let b = toUpperCase("sain uu")
// console.log(b)





//ihiig ni oloh 8




function findLarger(num1,num2){
    return Math.max(num1,num2)
}
let results8 = findLarger(55,66)
console.log(`ih too ni: ${results8}`)


//9 


function sumList(numbers){
 let p = 0
for (let number of numbers){
    p = p + number;
}
return p
}
let results9= sumList([1,4,5])
console.log(`niilber: ${results9}`)


//10 
function countChar(text,charToFind){
    let count = 0 
for(let char of text){
    if(char == charToFind){
        count += 1
    }
     
}
return [charToFind,count]

}
let [char,result10] = countChar("sain uu", "u")
console.log(`${char} useg ${result10} udaa orson baina`)


//11

function getGrade(score){
if(score >= 90){
    console.log("A");
}else{
    console.log("b");
}
  if(score >= 80){
 
    console.log("c");
}else{
    console.log("d")
}
return [score]
}
let [results11] = getGrade(70)
console.log(`tanii unelgee: ${results11}`)
let score = 70;



//12

function isPrime(number){
    
        if(number % number,1  == 0 ){
            return[true,number]
        }else{
            return [false,number]
        }
    
    }
let [ta,number1]=isPrime(10)
console.log(`${number1} anhnii too mon uu  ${ta}`)
    


//13

function isPalindrome(text){
//text dahi useg buriigsalgaj array dotor hadgalah 
let stringArray = text .split("")
//array dotorh elementuudiig urvuu haruulah 
let reversedArray = stringArray.reverse()
//array dotorh usegnuudiig hoorond ni niiluuleh 
let reversedText = reversedArray.join("")


 
}

//14

function factorial(n){
let f = 5 *4 *3*2*1
console.log(`5-iin factorial:${f}`)
}
factorial()


//15 

// function findLongestWord(words){
//     for(let word of words ){
// if(word.length ==0 ){
// }
// }
// findLongestWord( "boldoo","anu")
// }








//18 
function generateFibonacci(n){
    if(n<=0) return[]
    if(n === 1) return[0]
    let sequence = [0,1]
    for(let i = 2; i<n; i++){
        let nextFib = sequence[i-1] + sequence[i - 2 ]
    sequence.push(nextFib)

}
return sequence;
}
let result19 = generateFibonacci(10)
console.log(`ehnii 10 gishuun [${result19.join(",")}]`)