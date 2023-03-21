// program to check if the string is palindrome or not

// take input

// prompt = require("prompt-sync")();
// string = prompt('Enter a string: ');
   

    // find the length of a string
    string="madam";
    len = string.length;
   
    msg="it is palindrome";

    // loop through half of the string
    for (i = 0; i < len / 2; i++)
     {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
           msg= "It is not a palindrome";
        }
    }
    //fetch the value using backtrick
    console.log(`${string}:${msg}`);
