// function outerfunc(x,y){
//     z=x+y
//     console.log(z)

//     function innerfunc(a,b){
//         c=a-b
//         console.log(c)
//         return a-b
//     }
//     innerfunc(30,40)
//     return x+y
// }
// outerfunc(10,20)

// //nested function
// function outerfunction(arr){
//     for(i=0;i<arr.length;i++)
//     {
//         console.log(arr[i])
//     }
//     function innerfunction(obj){
//         for(key in obj)
//         {
            
//         }
//         console.log(obj)  
//           return "gurjeet"
//     }
//     innerfunction({Name:"gurjeet",class:"MCA",Training:"javascript"})
// }
// outerfunction(["gurjeet",2,3,4,5])


//return function
function getvalue(arr)
{
    sum=0;
    for(i=0;i<arr.length;i++)
    {
        sum= sum+arr[i]
       
    }
    return sum
}
arr1=[1,2,3,45,67,7]
y=getvalue(arr1)
console.log(y)