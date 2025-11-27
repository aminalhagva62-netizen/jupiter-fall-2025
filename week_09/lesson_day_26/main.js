let title = document.querySelector("#title");
let changeBtn = document.querySelector("#change-btn");


changeBtn.addEventListener("click", function () {
    title.style.color = "deepPink"
})
let searchInput = document.querySelector("#search")
let items = document.querySelectorAll("#items li")
console.log(items);
searchInput.addEventListener("input", () => {
    const text = searchInput.ariaValueMax.toLowerCase();
    items.forEach(li => {
        const itemText = li.textContent.toLowerCase();
        items.forEach(li => {
            const itemText = li.textContent.toLocaleLowerCase();
            li.style.display = itemText.includes(text) ? "bllock" : "none";

        })

    })
})
let students = [
    {
        name: "bayanaa",
        gender: "male",
        favColor: "green",
    },
    {
        name: "amina",
        gender: "female",
        favColor: "white",
    },
    {
        name: "lkhagva",
        gender: "female",
        favColor: "pink",

    },
    {
        name: "turuu",
        gendner: "male",
        favColor: "blue",

    },
    {
        name: "mendee",
        gender: "male",
        favColor: "black",

    },
    {
        name: "amkhaa",
        gender: "male",
        favColor: "white",

    },


]
for (let student of students) {
    // console.log(student)
    // console.log(student.name);
    // console.log(student.gender);
    // console.log(student.favColor);
    //    console.log(`name:${student.name}\ngender:${student.gender}\navcolor: ${student.favColor}`)
    //    console.log(`name:${student.name}\ngender:${student.gender}\nfavcolor: ${student.favColor}`)

}

let box1 = document.querySelector("#box-1");

let container = document.createElement("div");
container.classList.add("container");
box1.appendChild(container);
for(let student of students){
    let studentDiv=document.createElement("div");
    container.appendChild(studentDiv);


    studentDiv.innerHTML = `
    <h1>${student.name}</h1>
    <h2>${student.gender}</h2>
    <i>${student.favColor}</i>
    `;

studentDiv.style.backgroundColor = "LightBlue"
studentDiv.style.width="300px"
studentDiv.style.padding="20px"
studentDiv.style.margin="10px"
studentDiv.style.borderRadius="20px"

}

// for (let student of students) {
//     console.log(`name:${student.name}\ngender:${student.gender}\nfavcolor: ${student.favColor}`)


//     let studentDiv = document.createElement("div");
//     container.appendChild(studentDiv);

//     let h1 = document.createElement("h1");
//     h1.textContent = student.name;
//     studentDiv.appendChild(h1);

// let h2 = document.createElement("h2");
// h2.textContent = student.gender;
// studentDiv.appendChild(h2);
// let i = document.createElement("i")
// i.textContent = student.favColor;
// studentDiv.appendChild(i);

// studentDiv.style.backgroundColor = "LightBlue"
// studentDiv.style.width="300px"
// studentDiv.style.padding="20px"
// studentDiv.style.margin="10px"
// studentDiv.style.borderRadius="20px"
// }
