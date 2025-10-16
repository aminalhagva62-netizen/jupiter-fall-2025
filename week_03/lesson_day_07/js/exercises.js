function greetByName(name){
    console.log(`sain uu, ${name} !`);

}
greetByName("dorj");
greetByName("saraa");


//dasgal 2

function addTwoNumbers(num1, num2){
        add = num1 + num2
        console.log(`${num1} + ${num2} = ${add}`)
        

}
addTwoNumbers(10,25);
addTwoNumbers(100, -50);

//dasgal 3


function printFavoriteColor(color){
    console.log(`minii durtai ongo bol ${color}`);
}
printFavoriteColor("yagaan");

//dasgal 4


function calculateAre(length,width){
    add = length * width;
    console.log(`urt ${length}, orgon${width} uyd talbai ni ${add} baina.`);
}
calculateAre(10,5);

//dasgal 5


function repeatMessage(message,times){
    for(let i = 1; i<= times; i++){
            console.log(message);
    }
}
repeatMessage("javascript bol sonirholtoi", 5);


//dasgal 6 
function describePet(name , animalType){
    name = "banhar"
    animalType = "nohoi"
    console.log(`minii ${animalType} g ${name} gedeg`)
}
describePet();

//dasgal 7



function printAddress(city,district,street){
city ="ulaanbaatar";
district ="suhbaatar";
street ="ih toiruu";
console.log("----hayg---- ")
console.log(`hot:${city}   duureg:${district}   gudamj:${street}`)
}
printAddress();

//dasgal 8


function showMultiplicationTable(number){

for(let i  = 1; i <=10; i++){
    add = number * i
            if(i * 2 >=10);
            console.log(`${number} * ${i} =${add}`)
        
            }
}
showMultiplicationTable(9);

//dasgal9


function chekEvenOdd(number){
    if(number %2 == 0){
        console.log(`${number} bol tegsh too`);
    }else{
        console.log(`${number} bol sondgoi too`)
    }

}
chekEvenOdd(10);
chekEvenOdd(17);

//dasgal 10

function drawLine(length,character){
    let pattern= ""
    for(let i = 1; i <=length; i++){
        pattern += character 
        
    }
console.log(pattern);
}
drawLine(20,"=");
drawLine(10,"*")

//dasgal 11

function checkPassword(passwordAttemp){
correctPassword = "javascript"

}
checkPassword("wrongPassword");
checkPassword("javascript12")


//dasgal 12
let fruit  =["alim","banana","jruj"];
function prinListItems(myList){
    
   for (let i = 1; i < myList.length;i++){
console.log(`${i +1}. ${myList[i]}`)

   }
}
prinListItems(fruit);


//dasgal 13


function calculateDiscount(price,precentage){
    let a = price / 100 * precentage
    let b = price - a 
    console.log(`anhnii une: ${price} , hymdral ${precentage}% , etssiin une: ${b}`)
}
calculateDiscount(50000, 10);


//dasgal 14

function chekAgeGroup(age){
    let a = "osvor nas"
    let n = "nasand hursen"
    let b = "ahmad nastan "
    if(age  <= 18){
        console.log(`${age} nas bol ${a} angilald bagtana`);
    } 
    else if (18 <=65){
        console.log(`${age} nas bol ${n} angilald bagtana`);
    }else{
        console.log(`${age} nas bol ${b} angilald bagtana`);
    }

}
chekAgeGroup(15);
chekAgeGroup(30);
chekAgeGroup(70);


//dasgal 15 


function countDownFrom(startNumber){
   
    console.log(`${startNumber} -s toolj ehellee`)
    for(let i = startNumber ; i >=1; i--){
        let delay = (startNumber- i) *1000;
       setTimeout(() => {
        console.log(i);
       }, delay);
    }
    setTimeout(() => {
        console.log("hoorloo")
    }, startNumber * 1000);
    }
    
countDownFrom(5);

// dasgal 16 

// function drawRectangle(width,height,character){
    
    
//     }


// drawRectangle(10);