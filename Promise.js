// // // 1.Գրել ֆունկցիա, որը ստանում է userId եւ users զանգվածը։
// // // Ֆունկցիան պետք է վերադարձնի userին Promise-ի միջոցով, կամ reject անի, եթե userը
// // // չկա։

// // // function people(id){
// // //     let users = [
// // //     {id:100, name:"Gor"},
// // //     {id:101, name:"Arman"},
// // //     {id:102, name:"Tigran"},
// // //     {id:103, name:"Davit"}
// // //     ]
// // //     let find = users.find(person=>person.id===id)
// // //     if(find){
// // //         return Promise.resolve(find.name);
// // //     }return Promise.reject("not found");
// // // }
// // // people(1008)
// // // .then((name)=>{console.log(name)})
// // // .catch((err)=>{console.log(err)})

// // // ______________________________________________________________________________

// // // 2.Գրել ֆունկցիա, որը ստանում է productId եւ products զանգվածը։
// // // Ֆունկցիան պետք է վերադարձնի համապատասխան ապրանքը Promise-ի միջոցով,
// // // կամ reject անի, եթե չկա։


// // // function get(productId,productss){
// // //     let products = [
// // //     {id:100, name:"Bread"},
// // //     {id:101, name:"Egg"},
// // //     {id:102, name:"Milk"},
// // //     {id:103, name:"Candy"}
// // //     ]
// // //     let find = products.find(product=>product.id==productId && product.name==productss)
// // //     if(find){
// // //         return Promise.resolve(find.name)
// // //     } return Promise.reject("aydpisi apranq chka")
// // // }
// // // get(102,"Milk")
// // // .then((product)=>{console.log(product)})
// // // .catch((err)=>{console.log(err)})

// // // ______________________________________________________________________________

// // // 3.Գրել ֆունկցիա, որը ստանում է userId, պատվերի տարրերի զանգված (items) եւ
// // // orders զանգվածը։
// // // Ֆունկցիան պետք է ստեղծի նոր պատվեր, ավելացնի այն orders զանգվածին եւ
// // // վերադարձնի նոր պատվերը Promise-ի միջոցով։ Reject, եթե items դատարկ է։


// // function createOrder(userId, orders, items){
// //     return new Promise((resolve, reject)=>{
// //         if(items.length===0){
// //             return reject("պատվերը դատարակա")
// //         }
// //         let newOrder = {
// //             id: orders.length+1,
// //             userId: userId,
// //             items:items
// //         }
// //         orders.push(newOrder)
// //         resolve(newOrder)
// //     })
// // }
// // let ordersList = []
// // createOrder(1,ordersList, [{name:"Laptop"}])
// // .then(order => console.log("Նոր պատվեր:", order))
// // .catch(err => console.log("Սխալ:", err));

// // createOrder(2,ordersList, [{name:"Phone"}])
// // .then(order => console.log("Նոր պատվեր:", order))
// // .catch(err => console.log("Սխալ:", err));

// // createOrder(3,ordersList, [])
// // .then(order => console.log("Նոր պատվեր:", order))
// // .catch(err => console.log("Սխալ:", err));

// // ____________________________________________________________________________

// // 4.Գրել ֆունկցիա, որը ստանում է orderId եւ orders զանգվածը։
// // Ֆունկցիան պետք է ջնջի տվյալ պատվերը եւ վերադարձնի message Promise-ի միջոցով։
// // Reject, եթե պատվեր չկա։

// // function deleteOrder(orderId, orders){
// //     return new Promise((resolve, reject)=>{
// //         if(orders.length>0){
// //             for(let i in orders){
// //                 delete orders[i]
// //             }
// //             return resolve("patvernery jnjvecin")
// //         }return reject("patver chka")
// //     })
// // }
// // deleteOrder(1, [{name: "Phone"}])
// // .then((data)=>{console.log(data)})
// // .catch((err)=>{console.log(err)})

// // ____________________________________________________________________________

// // 5.Գրել ֆունկցիա, որը ստանում է userId, նոր role եւ users զանգվածը։
// // Ֆունկցիան պետք է թարմացնի userի roleը եւ վերադարձնի թարմացված օբյեկտը
// // Promise-ի միջոցով։ Reject, եթե roleը անվավեր է կամ userը չկա։


// // function update(users, userId, role){
// //     return new Promise((resolve, reject)=>{
// //         let find = users.find(u=> u.id==userId)
// //         if(find){
// //             find.role=role
// //             return resolve(find)
// //         }return reject("chka tenc user")
// //     })
// // }

// // let list = [
// //  {id:1, name:'Gor', role:'admin'},
// // ]

// // update(list, 1, "editor")
// // .then((data)=>{console.log(data)})
// // .catch((err)=>{console.log(err)})

// // ____________________________________________________________________________

// // 6.Գրել ֆունկցիա, որը ստանում է productId եւ products զանգվածը։
// // Ֆունկցիան պետք է ստուգի, արդյոք ապրանքը պահեստում կա, եւ վերադարձնի “In
// // stock” կամ reject, եթե սպառված է։

// // function check(products, productId){
// //     return new Promise((resolve, reject)=>{
// //        let find = products.find(p=> p.id===productId)
// //        if(find){
// //            return resolve("In stock")
// //        }return reject("Sold out")
// //     })
// // }

// // let list = [
// //  {id:100, prod:"Jacket"},
// //  {id:101, prod:"Jeans"},
// //  {id:102, prod:"Shirt"}
// // ]

// // check(list, 100)
// // .then((data)=>{console.log(data)})
// // .catch((err)=>{console.log(err)})

// // ____________________________________________________________________________

// // 7.Գրել ֆունկցիա, որը ստանում է orders զանգվածը, orderId եւ նոր կարգավիճակը
// // (status)։
// // Ֆունկցիան պետք է փոփոխի տվյալ պատվերի կարգավիճակը եւ վերադարձնի
// // թարմացված պատվերը Promise-ի միջոցով։
// // Reject, եթե պատվերը չկա կամ կարգավիճակը սխալ է։

// function update(orders, orderId, status){
//     return new Promise((resolve, reject)=>{
//         let order = orders.find(o=> o.id==orderId)
//         if(order === undefined){
//             return reject("Chka patver")
//         }if(status === "created" || status === "shipped" || status === "delivered" || status === "canceled"){
//             order.status=status
//             return resolve(order)
//         }return reject("statusy sxal e")
//     })
// }

// let list = [
//  {id:101, total:100, status:"created"},
//  {id:102, total:500, status:"created"},
// ]

// update(list, 101, "shipped")
// .then((data)=>{console.log("tarmacvac patver:", data)})
// .catch((err)=>{console.log("sxal:", err)})

// update(list, 103, "shipped")
// .then((data)=>{console.log("tarmacvac patver:", data)})
// .catch((err)=>{console.log("sxal:", err)})

// update(list, 102, "pending")
// .then((data)=>{console.log("tarmacvac patver:", data)})
// .catch((err)=>{console.log("sxal:", err)})

// ____________________________________________________________________________

// // 8.Գրել ֆունկցիա, որը ստանում է products զանգվածը եւ թիվ n։
// // Ֆունկցիան պետք է վերադարձնի Promise-ի միջոցով n ամենաթանկ ապրանքները ըստ
// // գնի։
// // Reject, եթե զանգվածը դատարկ է կամ n մեծ է զանգվածի երկարությունից։


// function myFunc(products, n){
//     return new Promise((resolve, reject)=>{
//         if(products.length===0){
//             return reject("zangvacy datark e")
//         }if(n>products.length){
//             return reject("aydqan apranq chka")
//         }
//         let sort = products.sort((x,y)=>y.price-x.price)
//         let expensive = sort.slice(0,n)
//         return resolve(expensive)
//     })  
// }
// let listProducts = [
//     {id:1, name:"laptop", price:1000},
//     {id:2, name:"Phone", price:800},
//     {id:3, name:"TV",  price:956},
//     {id:4, name:"Tablet", price:560}
// ]
// myFunc(listProducts, 2)
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})

// ____________________________________________________________________________

// 9.Գրել ֆունկցիա, որը ստանում է users զանգվածը եւ userId։
// Ֆունկցիան պետք է նշի օգտատիրոջը որպես blocked = true եւ վերադարձնի
// հաղորդագրություն Promise-ի միջոցով։
// Reject, եթե օգտատերը արդեն բլոկավորված է կամ գոյություն չունի։


// function myFunc(users, userId){
//     return new Promise((resolve, reject)=>{
//         let user = users.find(u=> u.id===userId)
//         if(!user){
//             return reject("aydpisi user chka")
//         }if(user.blocked===true){
//             return reject("arden blokavorvac e")
//         }
//         user.blocked=true;
//         return resolve("user-y blokvec")
//     })
// }

// let listUsers = [
// {id:1, name:"Anna", blocked:true},
// {id:2, name:"Bob", blocked:false}
// ]

// myFunc(listUsers, 1)
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)})