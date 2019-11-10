$(document).ready(function(){


   function validateLogin(name,pwd,status){

        let flag=false;
<<<<<<< HEAD
        if((name=="admin") && (pwd=="12345")){
=======
        if((name=="admin") && (pwd=="1234")){
>>>>>>> 2778703220021f17fd07c360b9d95b19aad07320
            flag=true;
        }
        else{
            flag=false;
        }
        status(flag);

    }


$("#loginbtn").click(function(){

    var uname=$('#username').val();
    var password=$('#inputPassword').val();


    validateLogin(uname,password, function(f){


        if(f)
        {
            window.location.href = "home.html"; 


        }
        else{
            alert("Login failed");
        }
    });
});


});