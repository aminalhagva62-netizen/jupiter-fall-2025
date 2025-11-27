// const scores = { math: 88, english: 92, physics: 75, history: 90 };
// function sumScores(obj) {
//   let values = Object.values(obj); // Объектийн бүх утгыг авах
//   let sum = 0;

//   for (let i = 0; i < values.length; i++) {
//     sum += values[i]; // Бүх утгыг нэмэх
//   }

//   return sum; // Нийлбэр буцаах
// }

// console.log(sumScores(scores)); 
// // 345 гэж хэвлэнэ


//dasgal2//
const scores =[
    {name:"math",score:88},
    {name:"english",score:92},
    {name:"physics",score:75},
    {name:"history",score:90},
    {name:"biologi",score:95},

];


let max_score = scores[0]
for(let score of scores){
if(score >max_score){
        max_score=score;


}
}
console.log("hamgiin ih too",max_score)


//dasgal3//
// const user = [
//   { name: "Ariunaa", age: 17 },
//   { name: "Bold", age: 22 },
//   { name: "Tugs", age: 19 }
// ];
// let sum=0
// for(let user of users){
//    if(users.age >=18){
//     console.log(`ta nasand hursen${sum}`)
//    }
// }


  const users = [
    { name: "Sara", city: "Ulaanbaatar", age: 21 },
    { name: "Bold", city: "Erdenet", age: 19 },
    { name: "Tuvshin", city: "Ulaanbaatar", age: 25 }
  ];
  for(let user of users){
    if(user.city ==="Ulaanbaatar"){
        console.log(`user:${user.name}`);
    }

}


//dsgal5//

// const products = [
//   { name: "Keyboard", price: 45000 },
//   { name: "Mouse", price: 25000 },
//   { name: "Monitor", price: 320000 }
// ];
// let total = 0;
// for(let i = 0; i<products.length; i++){
// total += products[i].price;
// }
// console.log(total);


//dasgal6//
const alls = [
  { name: "Keyboard", price: 45000 },
  { name: "Mouse", price: 25000 },
  { name: "Monitor", price: 320000 }
]
let expensive = alls[0];
for(let i = 1; i< alls.length; i++){
  if(alls[i].price >expensive.price){
    expensive =alls[i];
  }
}
console.log(expensive);

//dasgal7//
const numbers = [1, 2, 3, 2, 1, 5, 2];
let sum= [];
for(let i=0; i<numbers.length; i++){
  if(!sum.includes(numbers[i])){
    sum.push(numbers[i]);
  }

}
console.log(sum);

//dsgal8//
const text = "hello world";
const h=0

