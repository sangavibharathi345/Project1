function login(){
    var name= document.getElementById("name").value;
    var password= document.getElementById("password").value;
    if((name=="Mario" && password =="mario") || (name=="User" && password=="user"))
    {
        alert("Logged-In Successfully");
        return true;
    }
    else if((name!="Mario" && password =="mario") || (name!="User" && password=="user"))
    {
        alert("Incorrect Username/Password");
        return false;   
    }
    else if((name=="Mario" && password !="mario") || (name=="User" && password!="user"))
    {
        alert("Incorrect Username/Password");
        return false;   
    }
    else{
        alert("Incorrect Username/Password");
        return false;
    }
}