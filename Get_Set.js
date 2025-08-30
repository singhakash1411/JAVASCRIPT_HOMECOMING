
class User{
    constructor(email, password){
        this.email= email;
        this.password= password
    
}
//getter always takes the return value but setter don't 
get password(){
    return `${this._password}akashsingh` // agar paswword ke jagah par _password nhi likhenge to call stack full ho jayega 
    // kyunki hmlog class me v password set kar rhe h aur yaha v to dono uske liye daudenge 

}
set password(value){
this._password=value
}
}
const obj = new User("singhakash@gmail.com", "123")
console.log(obj.password)