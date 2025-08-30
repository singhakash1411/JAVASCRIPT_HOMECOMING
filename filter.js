
const arr =[1,2,3,4,5,6,7,8,9,10]

// const newArr= arr.filter((nums) =>{
//     return nums > 3  //mandatory h return use karna 
// })
// console.log(newArr)

// const newArr = arr.filter((num)=> num >4)
// console.log(newArr)
// //Map() works as a for each loop but it returns the value 

// const me = arr.map((num) => num +10)
// console.log(me)
// // Chainnig - using the map and filter function together one after other
// const my = arr.map((num) => num +10).filter((num) => num > 15)
// console.log(my)

//    REDUCE
// const myarr = arr.reduce((accummulator, currval)=>{
//     return accummulator +currval
// }, 0)
// console.log(myarr)
const mytotal =arr.reduce((acc , currval)=> acc+ currval , 0)
console.log(mytotal)