let h2 = document.getElementById("my-heading")
console.log(h2)
h2.textContent ="this my heading";


let paragraph = document.getElementsByClassName("my-p")
console.log(paragraph)

paragraph[0].textContent = "my first paragraph"
paragraph[1].textContent = "my second paragraph"
paragraph[0].style.color ="crmson"
paragraph[1].style.backgroundColor ="black"
paragraph[0].style.color ="white"

let box1 = document.createElement("Div")
document.body.appendChild(box1);


let boxHeading = document.createElement("h1")
boxHeading.textContent ="box heading";
box1.appendChild(boxHeading);




let fruits = ["apple","orange","kiwi","banana","watermelon"]
for(let fruit of fruits){
   let p=document.createElement("p");
   p.textContent = fruit;
   box1.appendChild(p);
}
let fruitImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbB_doR9LVg_xVbDXOOZc3TNbgNCEIzLLKw&s",
    "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
    "https://www.bobtailfruit.co.uk/media/mageplaza/blog/post/4/2/42e9as7nataai4a6jcufwg.jpeg",
    "https://www.watermelon.org/wp-content/uploads/2020/07/Seeded-Wedge-scaled.jpg"
];
for(let image of fruitImages){
    let img = document.createElement("img")
    img.src = image;
    img.style.width = "200px"
    box1.appendChild(img)
}
let button1 = document.createElement("button");
button1.textContent = "Click me"
box1.appendChild(button1);
    button1.addEventListener("click",function (){
        console.log("button 1 clicked");
        for(let i = 0;i<fruits.length; i++){
            let fruitName = document.createElement("img")
            fruitName.textContent = fruits[i];
            fruitName.classList.add(fruits[i])
            box1.appendChild(fruitName);

            let fruitImages = document.createElement("img")
            fruitImages.src = fruitImages[i]
            fruitImages.style.width ="200px";
            box1.appendChild(fruitImages);
        }
    })
    let item = document.querySelector(".item");
    item.textContent = "some text...";
    let para = document.querySelector("#para");
    para.style.backgroundColor = "aqua";

    
