function createuser(username, score){
    this.username= username
    this.score= score
}
createuser.prototype.increament = function(){
    this.score++
}
const obj = new createuser("Akash", 240)
const obj2 = new createuser("Tree", 200);

//prototypal inheritance 
const Teacher = {
    isAvailable: true,
    name:"Akash"
}
const Student = {
    isAvailable: false,
    __proto__:Teacher// inherit karlia Teacher ke properties ko
}

// Modern Syntax for the inheritance 
object.setProtptypeOf(Student, Teacher)


// CAll AnD This
// call method referenace pass karta h kisi dusre function ki jaise yaha par 
//SetUsername function ke ander username h aur dusre function me chahyte h uska access to uske lia 
//we can use the .call method but jab upar waala fuction execute ho jayega to uska kaam khatm to usko store karne ke lia we pass this inside the fuction jo ki usko store kardega 
function SetUsername(username){
    this.username=username
    console.log("Called")
}
function createusername(username, email, password){
    SetUsername.call(this, username)
    this.email= email,
    this.password= password
}
const newobj= new createusername("Akash","singhakash@gmail.com", "123" )
console.log(newobj);