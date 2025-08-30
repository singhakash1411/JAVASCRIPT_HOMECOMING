const { useContext } = require("react")

/* ajavaScript code execution context 
1.Global Execution useContext
2.Function Execution useContext
3.Eval execution Context- MongoDB me use hota h 
/*

java script code run karta h in 2 phase 
1. Memory Allocation 
2. File Execution

isma kya hota h ki sabse pahle jitne v variables honge unke lia undefined state define hota h but jab function aa jaye to usko bas 
define hota h bas, then comes the execution phase where the no direct execution happened , usme v new variable environment + thread banta h jisme ye same both steps repeat hote h and after execution environement delete ho jata h 

let a=10
let b=20
function add(a,b){
    let result = a+b
    return result 
}
let reults= add()