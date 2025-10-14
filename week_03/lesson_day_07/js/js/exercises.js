// //dasgal 1

// function displayGreeting(){
// console.log("sain uu,javascript-iin yortontsod tavtai moril");
// }
// displayGreeting();

// //dasgal 2

// function showFavoriteQuote(){
//     console.log("albert einstein");
// }
// showFavoriteQuote();

// //dasgal 3

// function drawSquare(){
//     console.log("*****");
//     console.log("*   *");
//     console.log("*****");
// }
// drawSquare();


// //dasgal 4

// function printRecipe(){
//     console.log("===ondog sharah jor===")
//     console.log("1.hairuuliin tavgaa halaah");
//     console.log("2.tosoo hiine");
//     console.log("3.ondgo hagalj hiih");
//     console.log("4.davs nemeed bolgono");
// }
// printRecipe();

//dasgal 5

function calculateFixedArea(a,b){
let sum = a * b ;
console.log(sum);
console.log(`talbai ni ${sum} yum`);
}
calculateFixedArea(5,10);

//dasgal 6 

function showMenu(){
    console.log("---manai tses---");
    console.log("1. huushuur - 200₮");
    console.log("2.tsuivan - 8000₮");
    console.log("3. buuz - 1500₮")
}
showMenu();

 
//dasgal 7


function sing_a_verse(){
    console.log("twinkle,twinkle,litlle star,");
    console.log("how i wonder what you are,");
    console.log("tup above the world so high,")
}
sing_a_verse();

//dasgal 8 

function countToTen(){
    console.log("1-ees 10 hurtel toolj baina ")
    for(let i = 1; i<= 10; i++){
        
    console.log(i)
    
    }
}

countToTen();

//dasgal 10

function rollDie(){
    let i = (Math.floor(Math.random() *6)+1);
    
    console.log(`shoonii nud : ${i}`);
    
}


rollDie();

//dasgal 11

function printShoppingList(){
    let foods =["taalh","suu","ondog","alim"]
    console.log(`delguurees avah zuils ${foods}`)
}
printShoppingList();

//dasgal 12

// function greetUser(){

//     let o =(prompt("tanii ner hen be"));
    
//     console.log(`sain uu ${o}`);
// }
// greetUser();



//dasgal 13


function drawTriangle(){
let pattern= ""
    for(let i = 1; i <=5 ; i++){
        pattern += "*"
        console.log(pattern);
    }
}
drawTriangle();


//dasgal 14



 function displayTime(){
const now = new Date();
const i = now.toLocaleDateString();
console.log(i)
 }
displayTime();

//dasgal 16 

function countDown(){
    console.log("toolj ehellee")
    for(let i = 10; i>= 1; i--){
        
    console.log(i)
    
}
console.log("hoorlooo")
}
countDown();