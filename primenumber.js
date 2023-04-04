
//user input
// const prompt = require("prompt-sync")();
// lowerNumber = parseInt(prompt('Enter lower number: '));
// higherNumber = parseInt(prompt('Enter higher number: '));


// for(i=5;i<=5;i++)

// {
//     n=true
//  for(j=2;j<i;j++)  
//     {
//         if(i%j==0)
//         {
//         n=false
//         break;
//     }
// }  
  
//     if(i>1 & n==true)
//     {
//         console.log(i)
//     }

// }

// //fetch the prime number in array
//  arr=[500,56,48,51,197,151,121,181,199];
//  primearray=[];
//  for(i=0;i<arr.length;i++)
//  {
//     num=arr[i];
//     isprime=true;
//     for(j=2;j<num;j++)
//     {
//         if(num%j==0)
//         {
//             isprime=false;
//             break;
//         }
//     }
//     if(isprime && num>1)
//     {

//         primearray.push(num);

//     }
//  }
// console.log(`prime number: ${primearray}`);

arr = [5, 500, 58, 51, 197, 199, 151, 8, 40, 30];
  arr2 = [];

for ( i = 0; i < arr.length; i++) {
    num = arr[i];
     prime = true;

  for (  j = 2; j < arr[i]; j++) {
    if (num % j == 0) {
       prime = false;
      break;
    }
  }

  if ( prime  ) {
     arr2.push(num);
  }
}

console.log( arr2);