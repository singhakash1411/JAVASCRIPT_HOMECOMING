
function add(n1, n2){ // parameters
    console.log(n1+n2)
}
add(2,3) //2 nd 3 are argument

function Add(n,n2){
    return n  + n2;
}
const result = Add(2,4)
console.log("result : " ,result);

function loginUser(username){
    return `${username} just logged in`
}
console.log(loginUser("Akash"))
//here if the name is not given by the user it  will say undefined 
function loginUser(username){
    if(username == undefined){ //or use if(!username)
        console.log("Please enter a valid name")
        return
    }
    return `${username} just logged in`
}
console.log(loginUser())
// but if this is happening everytime then pass a default name in the function parameter to avoid visiting the if part 

//function to add the items in bag using rest operator
function calculatePrice(...num1 ){
    return num1
}
console.log(calculatePrice(10,20,30,100))

//How to use the object inside the functions 

const user ={
    name : "Akash",
    id : 123
}
function handleObject(objectname){
    console.log(`username is ${user.name} and the id is ${user.id}`)
}
console.log(handleObject())

// Passing the array in function

const arr= [1,2,3,4,5]
function returnArray(myArr){
    return myArr[1]
}
console.log(returnArray(arr))

//Arrow Function ************************

// arrow function ke andar this ka use nhi hota h 
// Window is global object 
// this keyword work in the object only not inside the fuction separatly but if a fun is defined inside the object then it will work

// ARROW FUNCTION
//() => {}
//we can store this function in the const variable 
// const Add = (one , two) =>{
//     return one + two
// }
// console.log(Add(2,4));

const Addtion = (a,b) => a+b

console.log(Addtion(3,4))
    



