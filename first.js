// console.log(1  + 2);
// console.log("1" + 1)
// console.log( 1 + "2");
// console.log("1" +  2 + 2);
// console.log( 1 + 2 + "2"); 
// let x =3
// let y = x++
// console.log(x, y);

//object
// const symbolmy= Symbol("Key1")
// const User = {
//     name : "Akash", // dot se access kar skte h but 
//     "full name" : "Akash Kumar Singh", // isko bas [] se hi access kar skte h and symbol ko v issi se print karte h 
//     [symbolmy] : "AKsh",
//     age  :23,
//     Islogged :false
// }
// console.log(User.name);
// console.log(User["name"]);
// console.log(User["full name"]);
// console.log(User[symbolmy]);

// User.email= "singhakash30003@gmail.com"
// Object.freeze(User)
// console.log(User);

// const newUser = new object() //singleton object
// const newuser = {} //non singleton object
// newuser.name = "Akash"
// newuser.id = 121
// console.log(newuser)

const regualrUser = { 
    name : "akash",
    id  :"12Asb",
    email :"singhaaksh30003@gmail.com"
}
console.log(regualrUser)
//methods used in the objects 

console.log(Object.keys(regualrUser))
console.log(Object.values(regualrUser))
console.log(Object.entries(regualrUser)) // format karke array return karega like key : value together of all 

//lEarn more about the object methods on MDN
