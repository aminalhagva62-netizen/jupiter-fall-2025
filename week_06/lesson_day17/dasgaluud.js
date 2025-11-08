
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
function chekEvenOdd(number){
    if(number %2 == 0){
        console.log(`${number} bol tegsh too`);
    }else{
        console.log(`${number} bol sondgoi too`)
    }

}
chekEvenOdd(10);
chekEvenOdd(17);
function FindFactorial(){
    let  n = []
    let product = 1 
    
}
function printStudents(){
     let students=["anu","bat","sara"]
     students.length
    for(let student of students){
        console.log(`sursgch:${student}`)
    }
}
printStudents()
function guessNimber(){
    let userCuess=[]
    Math.random()
    randomNum = Math.floor(Math.random() * 10) + 1 
    if(userCuess===randomNum){
        console.log("zov")
    }else{console.log(`buruu baina. zov utga ${randomNum}`)}
}
guessNimber(9)