// obj1={name:"gurjeet",course:"web-designing",Training:"meander",getItem:()=>
// {
//     x=10;
//     y=20;
//     console.log(`The sum of ${x} and ${y} is:`,x+y)
//     // console.log("hello")
   
// }
// }

// console.log(obj1["getItem"]())//bracket notation 
// console.log(obj1.name)//. accessor //.notation
// obj1.getItem()


//first return object with the help of . notation return the other function
// function get(x,y)
// {
//     return {name:"gurjeet",course:"web-designing",Training:"meander",getvalue:(x,y)=>
// {
// sum=x+y
// return sum;
// }
// }
// }
// returnGet = get()
// console.log(returnGet)
// console.log(returnGet.getvalue(10,20))

//print array and return the object and return the sort array
function printArray(arr)
{
    for(i=0;i<arr.length;i++)
    {
        console.log(arr[i])}
        return {length_array:arr.length,sorting:(arr)=>{

            
for(i=0;i<arr.length;i++)
{
    
    for(j=0;j<arr.length;j++)
    {
        if(arr[i]<arr[j])
        {
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            console.log(arr)
        }
    }
}
        }
    }
}

returnArray=printArray([1,2,3,4,5,6,7,8,9])
console.log(returnArray)
console.log(returnArray.sorting([4,5,8,1,2,]))