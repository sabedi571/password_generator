var message = "Welcome to the password generator";
alert(message);

var message2 = "A good password can protect you from fraud and theft of valuable items such as personal photos and financial documents among other things.";
alert(message2);

var message3 = "Please use slider to choose length from 8 to 128 characters and press generate button to execute.";
alert(message3);




function generate(){
    let complexity = document.getElementById("slider").value;
    
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

    let password = "";

    for (var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;

    document.getElementById("lastNums").innerHTML += password + "<br />";
    
} 
     

document.getElementById("length").innerHTML = "Length: 8";

document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "length: " + document.getElementById("slider").value;
    }
    else{
       document.getElementById("length").innerHTML =  "Lenght: 1";

    }
}
