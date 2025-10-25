//dasgal 1
let numString = "15"
let number = 15 + 5 
console.log(number)
//dasgal 2
let a = 3
let b = 5 
let c = 3+5
console.log(`ehnii too: ${a} , hoyr dahi too: ${b} , niilber ni: ${c}`)
//dasgal 4
let age1 = 15 
let age = 14
let name1 = "amina"
let name = "baaj"
let zoruu  = age1 - age 

console.log(`${name1} ${age1} nastai , ${name } ${age} nastai bidnii nasnii zoruu  ${zoruu} jil baina `)
//dasgal 3 
let  urt  = 10 
let orgon  = 20 
let talbaii = urt * orgon
let orgon2 = 30 
let talbai2 = urt * orgon2
console.log(`ehnii talbai:urt ${urt } , orgon ${orgon }  : ${talbaii} `)
console.log(` shine talbai : urt ${urt } , orgon ${orgon2} : ${talbai2}`)

//dasagl 5 
let numberToChek = -20 
if(numberToChek >= 0 ){
    console.log(`${numberToChek} bol eyreg  too `)
}else if (numberToChek <= 0 ){
    console.log ( `${numberToChek} bol sorog too `)
}else{
    console.log ( `${numberToChek} bol 0  too `)
}


//dasgal 6 
let baaj = 14
if (baaj % 2 ==0){
    console.log(`${baaj} bol tegsh too `)
}else{
    console.log(`${baaj} bol sondgoi too `)
}
//dasgal 7 
let t = new Date().getHours()
console.log("odoo tsag: " + t)
if(t <5 && t <= 11){
    console.log("ogloonii mend ")
}else if (t >=12 && t <=17){
    console.log("odor  mend ")
} else if (t >=18 && t <=21){
    console.log("oroin mend ")
}else{
    console.log("shoniin  mend ")
}
