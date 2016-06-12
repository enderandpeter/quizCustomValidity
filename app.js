/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');
var form = document.querySelector('form');

/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
    var customValidityMessage = '';
    if(firstPasswordInput.value !== secondPasswordInput.value){
        customValidityMessage = "Passwords must match";
    }

    var fields = [firstPasswordInput, secondPasswordInput];

    for(var i in fields){        
        if(fields[i].value.length < 16){
            customValidityMessage += "Password must be at least 16 characters" + "\n";
        }

        if(fields[i].value.length > 100){
            customValidityMessage += "Password must less than 100 characters" + "\n";
        }

        if(!fields[i].value.match(/[\!\@\#\$\%\^\&\*]/g)){
            customValidityMessage += "One of the required symbols is missing" + "\n";
        }

        if(!fields[i].value.match(/\d/g)){
            customValidityMessage += "Password must contain a number" + "\n";
        }

        if(!fields[i].value.match(/[a-z]/g)){
            customValidityMessage += "A lowercase letter is required" + "\n";
        }

        if(!fields[i].value.match(/[A-Z]/g)){
            customValidityMessage += "An uppercase letter is required" + "\n";
        }

        if(fields[i].value.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g)){
            customValidityMessage += "Password contains illegal character" + "\n";
        }
        
        fields[i].setCustomValidity(customValidityMessage);
    }
    
    if(customValidityMessage){
        return;
    }

};