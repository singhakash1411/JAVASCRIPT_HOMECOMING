const promiseOne = new Promise(function(resolve, reject){
    //any Async task
    // BD calls , cryptography
    setTimeout(function(){
        console.log("Async task is completed")
        resolve() // resolve function .then ko coect karega so that promise could be resolve 
    }, 1000)
});
promiseOne.then(function(){
    console.log("Promise consumed ");
})
 
//ab ek promise create karenge jisme .then sath me hoga cause we are not storing the promise in a var
new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task")
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async resolve ")
})

const promise4=new Promise(function(resolve, rrject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "Akash", password:"Akash@singh"})

        }else{
            reject('Error:Something went wrong')
        }
    }, 1000)
})
promise4.then(function(user){
    console.log(user)
    return user.username
}).then( (username) => {
    console.log(username)
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("Resolved or Rejected bro");
})
// Async await se v promise ko resolve kar skte h 
const promiseFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username: "Akash", Password:"akash#singh"})
        }
        else{
            reject('Error: This is the new Error babe');
        }
    }, 1000)
})
//now ab upar wale promise ko handle akrne ke lia .then nhi balki async await ka use karte h and async function ka name promise function se alag hoga nhi to variable override ho jata h 
async function handlepromiseFive(){
    try{
        const response= await promiseFive
        console.log(response);

    }
    catch(error){
        console.log(error);
    }
}
handlepromiseFive();

// promise create karke usko resolve and reject kar skte h using the .then and async function jisme await keyworld hota h 
// We have another method called #fetch method
async function getAllUsers(){
    try{
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await response.json()
    }
    catch(error){
        console.log('Error:', error)
    }
};
getAllUsers();
