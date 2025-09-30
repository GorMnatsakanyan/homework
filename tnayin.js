// Ստեղծել person օբյեկտ, որը ունի name, age, city հատկությունները
//  1. ավելացնել isStudent: true հատկությունը
//  2. ջնջել city հատկությունը
//  3.ստուգել արդյոք person-ը ունի age հատկություն


// let person = {
//     name: "Gor",
//     age: 18,
//     city: "Yerevan"
// }
// person.isStudent = true;
// console.log(person)
// delete person.isStudent
// console.log(person)
 
// if("age" in person){
//     console.log("person-ը ունի age հատկություն")
// } else{
//     console.log("person-ը չունի age հատկություն")
// }

// _________________________________________________________________________________-

// Գրել ֆունկցիա, որը ստանում է օբյեկտ
// obj = {
// key1: ‘hello’,
// key2: undefined,
// key3: 123,
// key4: undefined
// }
// և ջնջում այն հատկությունները, որոնց արժեքը undefined է։

// function a(obj){
//     console.log(obj)
//     for(let i in obj){
//         if(obj[i]===undefined){
//             delete obj[i]
//         }
//     }
//     console.log(obj)
// }
// a({key1:"Hello", key2:undefined, key3:123, key4:undefined})

// _________________________________________________________________________________-


// Ստեղծել զանգված
// ավելացնել տարր վերջից
// ավելցանել երկու տարր սկզբից
// ջնջել վերջին տարրը
// ջնջել առաջին տարրը

// let nums = [1,2,3,4]
// nums.push(5)
// console.log(nums)
// nums.unshift(0,-1)
// console.log(nums)
// nums.pop()
// console.log(nums)
// nums.shift()
// console.log(nums)

// _________________________________________________________________________________-


// Տրված է const numbers = [3, 7, 10, 15, 20, 25]; զանգվածը։ 
// Գտնել առաջին 10-ից մեծ թիվը, որը հանդիպում է զանգվածի մեջ։
// Գտնել առաջին տարրը, որը բաժանվում է 5-ի

// const numbers = [3, 7, 10, 15, 20, 25]
// let find = numbers.find(number => number>10)
// console.log(find)
// let findFive = numbers.find(number => number%5===0)
// console.log(findFive)

// _________________________________________________________________________________-


// // Տրված է const numbers = [5, 12, 8, 130, 44]; զանգվածը
// // Ֆիլտրել 10-ից մեծ թվերը
// // Ֆիլտրել զույգ թվերը

// const numbers = [5, 12, 8, 130, 44]
// let find = numbers.filter(number => number>10)
// console.log(find)
// let findEven = numbers.filter(number => number%2===0)
// console.log(findEven)

// _________________________________________________________________________________-



// // Տրված է const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]; զանգվածը
// // Ֆիլտրել այն բառերը, որոնց երկարությունը 6-ից մեծ է

// const words = ["spray", "limit", "elite", "exuberant", "destruction","present"]
// let find = words.filter(word => word.length>6)
// console.log(find)

// _________________________________________________________________________________-


// // Տրված է const numbers = [1, 2, 3, 4, 5]; զանգվածը
// // Զանգվածի բոլոր տարրերը մեծացնել երկու անգամ (map)
// // Զանգվածի բոլոր տարրերին գումարել 10 (map)

// const numbers = [1, 2, 3, 4, 5]
// let two = numbers.map(number=>{
//     return number*=2
// })
// console.log(two)
// let plus = numbers.map(number=>{
//     return number+=10
// })
// console.log(plus)

// _________________________________________________________________________________-


// // Տրված է 

// // const people = [
// // { name: "Anna", age: 17 },
// // { name: "Karen", age: 22 },
// // { name: "Aram", age: 15 },
// // { name: "Mery", age: 19 }
// // ]; զանգվածը
// // Գտնել առաջին մարդուն, ում տարիքը մեծ է 18-ից
// // Ֆիլտրել միայն չափահասներին
// // Ստեղծել նոր զանգված, որը պարունակում է միայն անունները (map)


// const people = [
// { name: "Anna", age: 17 },
// { name: "Karen", age: 22 },
// { name: "Aram", age: 15 },
// { name: "Mery", age: 19 }
// ]

// let findEighteen = people.find(person => person.age>18)
// console.log(findEighteen)

// let chapahas = people.filter(person => person.age>18)
// console.log(chapahas)

// let arr = []
// let names = people.map(person=>{
//     arr.push(person.name)
// })
// console.log(arr)

