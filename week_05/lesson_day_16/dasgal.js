function checkWeather() {
    temperature = 25; // Example temperature
    if (temperature > 30) {
        console.log("Дулаахан байна!");
    } else if (temperature >= 20 && temperature <= 30) {
        console.log("Сэрүүхэн байна!");
    } else {
        console.log("Маш хүйтэн байна !");
    }
}
checkWeather();

// 1-20 hurtel tegsh toog hevleh

function printEvenNumbers() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvenNumbers();

//1-n hurtel niilber oloh
function sumUpToN(n) {
    let sum = 0;
    sum = 0 
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}   
let result = sumUpToN(10);
console.log(`1-n hurtel niilber: ${result}`);            
//dasgagal 4
// function checkAge() {

// }