//dasgal 1

let length=12;
let width =5;
let area =length * width;
console.log(`tegsh ontsogtiin talbai: ${area} .`)


//dasgal 2


let price =5000.0
let discountPercentage=10
let discountAmount=price*discountPercentage / 100
let finalPrice= price  - discountAmount
console.log(`etssiin une: ${finalPrice}`)

//dasgal 3


let firstName="amina"
let lastName="lhagva"
let fullName=lastName + firstName
console.log(`namaig ${fullName} gedeg.`)


//dasgal 4


let temperature = 25  
if(temperature>20){
    console.log("gadaa dulaahan baina")
}else{
    console.log("gadaa huiten baina")
}

//dasgal 5

let secretWord = "puthon"
let userCuess = "java"
if(userCuess == secretWord){
    console.log("ta zov taalaa")

}else{
    console.log("ta buruu taalaaa")
}


//dasgal 6 

for(let i = 1; i <= 5; i++){
    console.log(`${i} dahi udaagiin mendcilgee`);
}


//dasgal 7

 let fruits=["alim","banana","jurj"]
 
 
for(let fruit of fruits ){
    console.log(`bi ${fruit} -d durtai `);

}

//dasgal 8


function displayWelcomeMessage(h,b){
    console.log(`${h} ${b}`)
}
displayWelcomeMessage("surgaltand tavtai morilno uu");
displayWelcomeMessage("tand amjilt husey");

//dasgal 9

// let birthYearStr=prompt("ta heden ond torson be")
// let birthYear = Number(birthYearStr)
// let currentYear= 2025
// let age = (currentYear - birthYear)
// console.log(`ta oiroltsoogoor ${age} nastai ym baina `)

//dasgal 2/1

let planets =["angarag","sugar","delhii","barhabaidi"];
console.log(` minii jagsaaltand ${planets.length} garag baina`)


//dasgal 2



function drawLine(length){
    let symbol= "-*"
    for(let i = 1; i <=length; i++){
        symbol += "-*"
        
    }
console.log(symbol);
}
drawLine(10);



//dasgal 3


let tasks =[]
if(tasks === 0){
    console.log("hiih ajil alga ")
}else{
    console.log("hiih ajil baina ")
}


//dasgal 4

let message = "bi java d durtai "
let new_message =message.replace("java","python")
console.log(new_message);

// dasgak 5

let numbers=[10,20,30,40]
let trash= numbers.pop()
console.log(numbers)


//dasgal 3/1


let scores = [20,50,80,90,]
function calculateGrade(){
    
    if(100 <= 90){
        console.log("A")
}
else if (89<=80){
    console.log("B")
}
else if (79<=70){
    console.log("D")
}else{
    console.log("F")
}
}
calculateGrade();
calculateGrade();



// dasgal 2

function filterPositiveNumbers(){
let Numbers= [2,-3,4,-5]

    for(let Number of Numbers){
        if(Number %2 == 0 )
            console.log(`jagsalt dahi eyreg toonuud ${Number}`)
    }
}

filterPositiveNumbers();


//dasgal 3

function findNumber(){
    let data =[11,23,8,42,15,99]
    let targetNumber = 42 ;
    let found = false;
    for(let i=0 ; i<=data.length ; i++){
        if (data[i]=== targetNumber) {
            found = true;
            break
        }
    }
    if(found){
       console.log(targetNumber+"too oldlooo")
    }else{
        console.log("too oldsongui")
    }
 
}
findNumber();






