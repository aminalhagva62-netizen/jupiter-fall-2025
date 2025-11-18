const person ={
    
    name:"bold",
    age:28,
    city:"ub"
};
console.log(person.name)

//dasgal2
const car ={
    brand:"toyota",
    model:"prius",
};
console.log(car)

//dasgal3
const student = {
    name:"bold",
    hobbies:[2,4,8,64]
};
console.log(student.hobbies[0])

//dasgal44 
const user ={
    name:"amina",
     greet:function(){
console.log("hi "+this.name);
    }
}
user.greet()

//dasgal5
const book ={
    title:"JS basics",
    author:"John",
    year:2024
} 
console.log(book);
for(const key of Object.keys(book)){
    console.log(key);
    }

//dasgal1

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
//dasgal2

const product = {
    name: "Laptop",
    price: 3500,
    brand: "Apple"
  };
  let newProduct ={...product};
  newProduct = "price"
   
  console.log(product);
  //dasgal3
  const settings = {
    theme: "dark",
    notifications: {
      email: true,
      sms: false
    }
   
  };
  settings.notifications.email= false;
console.log(settings);

//dasgal4
const students = [
    { name: "Ari", score: 88 },
    { name: "Temuulen", score: 92 },
    { name: "Enkh", score: 79 }
  ];
  let maxScore =0;
   let topStudent=0;
   maxScore +=topStudent/student.scores.length;
  for(let student of students){
    if(topStudent >maxScore){
        console.log(topStudent.name);
    }
   }