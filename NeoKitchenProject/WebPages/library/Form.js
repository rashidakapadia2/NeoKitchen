let namenode=document.getElementById("name");
let lnamenode=document.getElementById("lastname");
let emailnode=document.getElementById("email");
let mobilenode=document.getElementById("mobile");
let passwordnode=document.getElementById("pass");
let confirmpassnode=document.getElementById("confirmpass");
let showpassnode=document.getElementById("show");
let button=document.getElementById("subbutton");

let namespan=document.getElementById("nameerror");
let lnamespan=document.getElementById("lnameerror");
let emailspan=document.getElementById("emailerror");
let mobilespan=document.getElementById("mobileerror");
let passspan=document.getElementById("passerror");
let confpassspan=document.getElementById("confpasserror");
let showspan=document.getElementById("show");

function validate0(){
    namespan.innerHTML="";
    namenode.style.border="1px solid black";
    let name=namenode.value;
    if(name==""){
        namespan.innerHTML="this field is required";
    return false;}
    else if(name.length<3){
        namespan.innerHTML="firstname must be of atleast 3 characters";
        return false;}
    else{
        namenode.style.border="2px solid green";
        namenode.style.backgroundColor="lightgreen";
        return true;}
}
function validate1(){
    lnamespan.innerHTML="";
    lnamenode.style.border="1px solid black";
    let lname=lnamenode.value;
    if(lname==""){
        lnamespan.innerHTML="this field is required";
    return false;}
    else if(lname.length<3){
        lnamespan.innerHTML="firstname must be of atleast 3 characters";
        return false;}
    else{
        lnamenode.style.border="2px solid green";
        lnamenode.style.backgroundColor="lightgreen";
        return true;}
    }
    function validate2(){
        emailspan.innerHTML="";
        emailnode.style.border="1px solid black";
        let emailid=emailnode.value;
        if(emailid==""){
            emailspan.innerHTML="this field is required";
            return false;}
        else if(!(emailid.includes("@"))){
            emailspan.innerHTML="@ is missing in email";
            return false;}
        else{
            emailnode.style.border="2px solid green";
            emailnode.style.backgroundColor="lightgreen";

            return true;}
        }
        function validate3(){
            mobilespan.innerHTML="";
            let mobile=mobilenode.value;
            mobilenode.style.border="1px solid black";
            if(isNaN(mobile)){
                mobilespan.innerHTML="Enter only numbers";
                

                return false;}
            else if(!(mobile.length==("10"))){
                mobilespan.innerHTML="Only 10 numbers allowed";
                

                return false;}
            else{
                mobilenode.style.border="2px green solid";
                mobilenode.style.backgroundColor="lightgreen";

                return true;}
        }
        function validate4(){
            passspan.innerHTML="";
            passwordnode.style.border="1px solid black";
            let regexp= new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
            let password=passwordnode.value;
            if(password==""){
                passspan.innerHTML="this field is required";
                

                return false;}
            else if(password.length<5 || password.length>8){
                passspan.innerHTML="password should be min 5 and max 8 characters";
                

                return false}
            else if(regexp.test(password)!=true)
            {
                passspan.innerHTML='Should be alphanumeric';
                return false;
            }
            else{
                passwordnode.style.border="2px solid green";
                passwordnode.style.backgroundColor="lightgreen";
                return true;}
            }
            function validate5(){
                confpassspan.innerHTML="";
                let password=passwordnode.value;
                confirmpassnode.style.border="1px solid black";
                let confpass=confirmpassnode.value;
                if(!(confpass==password)){
                    confpassspan.innerHTML="password and confirm password does not match";
                    
                    return false;}
                else{
                    confirmpassnode.style.border="2px solid green";
                    confirmpassnode.style.backgroundColor="lightgreen";
                    return true;}
                }
function validate6(){
    showspan.innerHTML="";
    if(showpassnode.checked==true){
        passwordnode.type="text";
        confirmpassnode.type="text";}
    else{
    passwordnode.type="password";
    confirmpassnode.type="password";}
}


function validateForm(){
    let v0=validate0();
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
    let v5=validate5();
    if (v0 && v1 && v2 && v3 && v4 && v5){
        return true;
    }
    else 
    return false;
}

function validateNewsletter(){
    let n1=validate0();
    let n2=validate2();
    if(n1 && n2){
        return true;
    }
    else 
    return false;
}