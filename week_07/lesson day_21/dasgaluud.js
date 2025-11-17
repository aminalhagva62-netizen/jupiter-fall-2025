function findMax(a, b) {
    if (a < b) {
        console.log(`${a} hamgiin baga utga`)
    } else {
        console.log(`${b} hamgiin ih utga`)
    }
}
findMax(5, 9);

function checkMultipleOfThree(num) {
    if (num % 3 === 0) {
        console.log(`${num} 3-iin urjver mon`)
    } else {
        console.log(`${num} 3-iin urjver bish`)
    }
}
checkMultipleOfThree(10);
checkMultipleOfThree(9);

function findAverage() {
    let numbers = [5, 10, 15, 20, 25];
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        average = sum / numbers.length;
        console.log(" niilberiin dundaj utga", average);
    }
}
findAverage();

function pritnOddNumbers() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
pritnOddNumbers();

function checkResults() {
  // 2. students массив
  const students = [
    { name: "Бат", score: 85 },
    { name: "Сараа", score: 50 },
    { name: "Ану", score: 73 }
  ];

  // 3. for давталт ашиглах
  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    // 4. if ашиглан шалгах
    if (student.score >= 60) {
      console.log(`${student.name} - Тэнцсэн ✅`);
    } else {
      console.log(`${student.name} - Унасан ❌`);
    }
  }
}

// 7. Function-оо дуудаж шалгах
checkResults();
