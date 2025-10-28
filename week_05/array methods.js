//1 .pop suuliin elementiig salgaj avah 
let fruist = ["alim","gaddil"]
let poppedValue = fruist.pop()
console.log(poppedValue)
console.log(fruist)


//.push() element nemeh 
fruist =["alim","gadil"]
fruist.push("tarvas")
console.log(fruist)


          //.shift() ehnii elementiig salgaj avah
fruist = ["alim","gadil"]
let removedFruit = fruist.shift()
//0-r index deh alim iig ustgana 
console.log(fruist)
//ur dun ["gadil", "jurj"]
console.log(removedFruit)
    //ur dun 'alim'



    //.unshift() массивын эхэнд элемэнт нэмэх 

    fruist = ["alim","gadil"]
    let newLength = fruist.unshift("alim " , "kiwi")
    //0-r index deh alim iig ustgana 
    console.log(fruist)
    //ur dun [ " alim ","kiwi "gadil", "jurj"]
    console.log(newLength)
        //ur dun: 4 (massin shine urtiig butsaana )


        //.length() urtiig oloh 
        fruist = ["alim","gadil"]
let numberOfFruist  = fruist.length 
console.log(numberOfFruist)
    //ur dun 2


    //.slice() massiviin hesgiig huulbarlah 
    let numbers = [10,20,30,40,50,60,]
    let sliceArray = numbers.slice(1,4)
    console.log(sliceArray)

    //.splice() massiviin aguulgiig oorcloh
    fruist = ["alim","gadil","kiwi "]
    let removedItems = fruist.splice(2,2)
    console.log(fruist)
    console.log(removedItems)


    //.reverse() massiviin elemntuudiin darralliig urvuulah 
    let numbers1 = [1,2,3,4,5]
    let reversedNumbers1 = numbers1.reverse
    console.log(numbers1)
// sort() elementuudiig eremblh
fruist = ["alim","gadil","kiwi "]
fruist.sort()
console.log(fruist)
  //toon massiviig zov songoh 
  let number2 =[111,5,25,1,10]
  number2.sort((a,b) => a-b )
  console.log(number2)


  //.includes() element aguulagdaj abga esehig shalgah 

fruist = ["alim","gadil", "jurj","kiwi"]
let hasBanana = fruist.includes("gadil")
console.log(hasBanana)
let hasMnago = fruist.includes("mango")
console.log(hasMnago)


//.concat() massiviig negtgeh 
let array1 = [1,2,3]
let array2 = [4,5,6]
let combinedArray = array1.concat(array2)
console.log(combinedArray)
console.log(array1)

//.map() elemnt buriig oorchlon shine massiv uusgeh 
let prices = [100,200,350,50]
let  pricesWithVAT = prices.map(price =>{
    return price * 1.1
})
console.log(pricesWithVAT)
console.log(prices)


//jishe 1
let users =[

{id: 1, name:"bat", age:40},

{id: 2, name:"bot", age:30},
];
let userNames = users.map(user =>user.name)
console.log(userNames)


//.forEach() elemnt buriig davtah 
let colors =["ualan ","yagaan "]
colors.forEach(color =>{
console.log(`ongo: ${color}`)
})

//.find() nohtsol hangasan ehnii element oloh
let numbers3 = [10,20,40,50,30,]
let result = numbers3.find(number3 =>{
    return number3 >30;
})
console.log(result)
let notFound = numbers.find(number3 =>number3>60)
console.log(notFound)
//.filter() nohtsl hangsn elemntuudiig shuuj avah
let numbers4 = [12,5,4,30,22]
let evenNumbers = numbers.filter(number =>{
    return number >10 && number % 2===0 
})
console.log(numbers)
console.log(evenNumbers)

//.join elementuudiig negtgen string uusgeh 
let words = [ "bid " ,"javag","sudalj","bainaa"]
let sentence = words.join("")
console.log(sentence)

//jishee2 
let names = ["amar","bat","baaj "]
let list = names.join(",")
console.log(list)
let charArray = ["j","A","v", "a"]
let word = charArray.join("")
console.log(word)