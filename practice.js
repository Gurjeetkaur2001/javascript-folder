// //print an array
// arr=[123,"gurjeet","jot",[12345]]
// {
//     console.log(arr)
// }
// //print an object/real object
// obj={Name:"gurjeet",Roll_Number:21072104,city:"sirhind"}
// {
//     console.log(obj)
// }

// //print the multiple table using the for loop
// string=""
// for(i=0;i<=10;i++)
// {
//     for(j=1;j<=10;j++)
//     {
//         string+=i*j
//        string+="\t"
//     }
//    string+="\n"
// } 
// console.log(string)

// //reverse the string and number 
// string="Manjeet singh"
// newstr="";
// for(i=string.length-1;i>=0;i--)
// {
//     newstr+=string[i]
// }
// console.log(newstr)

// //switch statement
// marks=90
// switch(marks)
// {
//     case 30:
//      console.log("marks is 30")
//      break;
//      case 50:
//      console.log("marks is 50")
//      break;
//      case 90:
//      console.log("marks is 90")
//      break;
//      default:
//         console.log("marks is not matched")
//         break;
//     }

    //fibonic series 
    // n=5
    // x=0
    // y=1
    // for(i=0;i<=n;i++)
    // {
    //     temp=x+y
    //     x=y
    //     y=temp
    //     console.log(y)
    // }

//sort element in array without sort method//assending order array

// arr=[1,3,5,7,9,10,12,21,93,43]
// for(i=0;i<arr.length;i++)
// {
//     for(j=0;j<arr.length;j++)
//     {
//         if(arr[i]<arr[j])
//         {
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//             console.log(arr)
//         }
//     }
// }

//sort element in array without sort method//descending order array

arr=[1,3,5,7,9,10,12,21,93,43]
for(i=0;i<arr.length;i++)
{
    for(j=0;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            console.log(arr)
        }
    }
}