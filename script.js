var newCharacterlist=[];
var lowercasealphabets=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Uppercasealphabets=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var special=["!","@","#","$","%","^","&","*","(",")"];

function generaterandomPassword() {

    

    
    var verifyLowerCase=confirm("would you like to incude lowercase letters");
    var verifyUpperCase=confirm("would you like to include uppercase letters");
    var verifyNumbers=confirm("would you like to include numbers");
    var verifySpecial=confirm("would you like to inckude soecial characters");

    
    while (verifyLowerCase == false && verifyUpperCase == false && verifyNumbers == false && verifySpecial == false) {
        alert("You must pick atleast one type");
        verifyLowerCase=confirm("would you like to incude lowercase letters");
        verifyUpperCase=confirm("would you like to include uppercase letters");
        verifyNumbers=confirm("would you like to include numbers");
        verifySpecial=confirm("would you like to inckude soecial characters");
    }

    

    var choosepasswordLength=parseInt(prompt("Please pick the characters you like and make sure they are between 8 and 128"));
    
    while(choosepasswordLength < 8 || choosepasswordLength > 128 || typeof(choosepasswordLength) != "number" || choosepasswordLength === NaN || choosepasswordLength === null) {
        alert("Please choose a number between 8 and 128");
        choosepasswordLength=parseInt(prompt("Please pick the characters you like and make sure they are between 8 and 128"));
    } 

    if (verifyLowerCase){
        newCharacterlist = newCharacterlist.concat(lowercasealphabets);
    
    }
    if (verifyUpperCase){
        newCharacterlist = newCharacterlist.concat(Uppercasealphabets);
    
    }
    if (verifyNumbers){
        newCharacterlist = newCharacterlist.concat(numbers);
        
    }
    if (verifySpecial){
        newCharacterlist = newCharacterlist.concat(special);
    }

    var passwordString="";

    for(let i=0;i<choosepasswordLength;i++){

        var randomCharArrayNum;
        var selectedCharArray;
        var randomCharNum;
        var randomChar;

        
        
        randomCharArrayNum= parseInt(Math.floor(Math.random()*newCharacterlist.length)); 
        
        

        selectedCharArray=newCharacterlist[randomCharArrayNum]; 
        
        

        randomCharNum=Math.floor(Math.random()*selectedCharArray.length);

        

        randomChar=selectedCharArray[randomCharNum];
        
        passwordString+=randomChar;

        
       
        
    }
    
   
    passwordEntry.textContent=passwordString;    
}


var generateButton=document.getElementById("generate");
var passwordEntry=document.getElementById("password");
generateButton.onclick = generaterandomPassword;