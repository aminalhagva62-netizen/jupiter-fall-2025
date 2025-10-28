//.slice() textiig salagj avah 
let text = "mongol uls "
let sliced1 = text.slice(4,8)
console.log(sliced1)

//jishe2 
let sentence = "bid ireeduig buteej cadna "
let sliced2 = sentence.slice(4)
console.log(sliced2)

//jishe3
 let data = "java"
 let endPart = data.slice(-4)
 console.log(endPart)
let middlePart = data.slice(-6,-2)
console.log(middlePart)

//substring() text hesgiig salgah 
let text1 = "mongol uls "
let result1 = text1.substring(4,8)
console.log(result1)

//jishe2 
 let word = "hello world"
 let result2 = word.substring(7,2)
 console.log(result2)

 //jishe3 
 let data1= "javascript "
 let result3  = data1.substring(-4,4)
 console.log(result3)
 let result4 = data1.substring(6,-2)
 console.log(result4)

 //.indexxOf() ehni oldotsiin index oloh
 let sentence1 = "bid javag surc bn "
 let strIndex1 = sentence1.indexOf("script")
 console.log(strIndex1)
 let strIndex2 = sentence1.indexOf("t",10)
 console.log(strIndex2)

 //.includes() utga aguulagdaj baigaa eseh 

 let sentence3 = "bid javascript surch bn "
 let hasScript = sentence3.includes("script")
 console.log(hasScript)

 //.startsWith() ehlel shalgah 

 let greeting = "hello, world "
 let chek1 = greeting.startsWith("hello")
 console.log(chek1)
 let chek2 = greeting.startsWith("Hello")
 console.log(chek2)
 
 //.endWith() togsgol shalgh 
  let website ="www.google.mn"
  let check1 = website.endsWith(".mn")
  console.log(check1)

  //replace() textiig solih 
  let greeting1 =  "hello world weolcome "
  let result5 = greeting.replace("world","universe")
  console.log(result5)

//replaceAll() buh oldotsig oloh 
let basket = "bidend alim ,jurj baina "
let result6 = basket.replaceAll("alim", "gadil ")
console.log(result6)

//.trim() hooson zaig arilgah 
let raw = "hereglegchiin ner "
let tri = raw.trim()
console.log(`original: ${raw}`)
console.log(`trimmed ${tri}`)
console.log(raw.length,tri.length)

//.toLowerCase() buh usgiig jijigruuleh 
let o = "mongol hel & JS code "
let lo = o.toLowerCase()
console.log(lo)

//.toUpperCase() buh usgiig tomosgoh 
let original = "medelel tehnologi "
let upp = original.toUpperCase()
console.log(upp)
console.log(original)

//.split() textig huvaaj massiv uusgeh 
let sentence9 = "java hiceel "
let words = sentence9.split("")
console.log(words)

//jishe 3 
let word2 = "mongol"
let characters = word2.split("")
console.log(characters)
//jishe 2
let data3 = "apple,banana"
let fruits2 = data.split(",")
console.log(fruits2)







//number methods 


//.toFixed aravtin butrhai orong zadlah 
let price = 123.45678
let fixed2 = price.toFixed(2)
console.log(fixed2)
let fixed3 = price.toFixed(3)
console.log(fixed3)

//parseInt() string ees buhel too gargj avah 
let priceString = "12500₮"
let ageString = "30 nas "
let price1 = parseInt(priceString,10 )
let age = parseInt(ageString,10)
console.log(price)


// number.isInteger() buhel too mon esehiig shalgah 

console.log(Number.isInteger(10))
console.log(Number.isInteger(10.5))
console.log(Number.isInteger(-10))