let person1name = "saraa"
let person1age =30;
let person1address = "UB";



let person2name ="boldoo"
let person2age =40;
let person2address ="darkhan"
let person1 ={
    name:"saraa",
    age:30,
    address:"ulaanbaatar"
}
let person2 ={
    name:"bold",
    age:40,
    address:"ulaanbaatar"
}
console.log(person1);
console.log(person2);
//dot notation
console.log(person1.name);
console.log(person2.address);

//bracked notation
console.log(person1["age"]);
console.log(`person 1 address: ${person1 ["address"]}`);

//add property
person1.email ="sraa@gmail.com";
console.log(person1);


person2.isMarried = true;
console.log(person2);

//delete propery
delete person2.address;
console.log(person2);


let dog = {
    name:"jerry",
    age:3,
    breed:"chihuahua",
    makeNoise: function(){
        console.log("hov hov!");
    }
}
console.log(dog);
dog.makeNoise();

//for loop in object 
for(let key in dog){
    console.log(`${key}: ${dog[key]}`);

}

//constant - togtmol
const pi = 3.14;
const student ={
    name:"bat",
    scores: [80,90,70,60,],
    address:{
        city:"ulaanbaatar",
        district: "bayngol"
    }

}
let avgScore =0;
let sum =0;
for(let score of student.scores){
    sum+=student.scores[score];
}
avgScore =sum/student.scores.length;
console.log(avgScore);
console.log(student.address.city)

let users= [
    {
        name:"tuya",
        age:20,
        city:"erdenet",

    },
    {
        name:"bold",
        age:28,
        city:"ub"
    },
    {

        name:"bat",
        age:78,
        city:"ub"
    }
];

for(let user of users){
    if(user.age >20){
        console.log(user.name);
    }

}