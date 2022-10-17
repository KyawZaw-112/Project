
function showPassword(){
    var x = document.querySelector("#userPassword");
    if(x.type ==="password"){
        x.type = "text";
    }else{
        x.type = "password";
    };
};