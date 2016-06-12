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
    var fieldValue;
    var validationSettings = {
        "Password must be at least 16 characters": function(){
            return fieldValue.length < 16;
        },
        "Password must less than 100 characters": function(){
            return fieldValue.length > 100;
        },
        "One of the required symbols is missing" : function(){
            return !fieldValue.match(/[\!\@\#\$\%\^\&\*]/g);
        },
        "Password must contain a number" : function(){
            return !fieldValue.match(/\d/g);
        },
        "A lowercase letter is required" : function(){
            return !fieldValue.match(/[a-z]/g);
        },
        "An uppercase letter is required" : function(){
            return !fieldValue.match(/[A-Z]/g);
        },
        "Password contains illegal character" : function(){
            return fieldValue.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g);
        }
    };
    
    var customValidityMessage = '';
    if(firstPasswordInput.value !== secondPasswordInput.value){
        customValidityMessage = "Passwords must match" + "\n";
    }

    var fields = [firstPasswordInput, secondPasswordInput];

    for(var i in fields){        
        var field = fields[i];
        if(field.value){
            fieldValue = field.value;
            for(var validationText in validationSettings){
                var validationTest = validationSettings[validationText];
                if(validationTest(fieldValue)){
                    customValidityMessage += validationText + "\n";
                }
            }
        }
        
        field.setCustomValidity(customValidityMessage);
    }
    
    if(customValidityMessage){
        return;
    }

};