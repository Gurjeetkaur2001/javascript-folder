
//user input
// const prompt = require("prompt-sync")();
// lowerNumber = parseInt(prompt('Enter lower number: '));
// higherNumber = parseInt(prompt('Enter higher number: '));


for(i=5;i<=5;i++)

{
    n=true
 for(j=2;j<i;j++)  
    {
        if(i%j==0)
        {
        n=false
        break;
    }
}  
  
    if(i>1 & n==true)
    {
        console.log(i)
    }

}