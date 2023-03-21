 //sorting array in javascript
//  arr=[8,5,6,7,9,2,3]
//     arr.sort()
//     console.log(arr)

// name1=["apple","cherry","banana","guava"]
// console.log(name1.sort())
 

// arr1=[10,9,8,7,6,5,4,3,2,1]
// for(i=0;i<=arr1.length;i++)
// {
//  console.log([i].sort())

// }

//reverse in array
// arr=["gurjeet","mca","harbanspura","sirhind"]
// console.log(arr.reverse())


//sorting array using for loop //asscending order without sort method
arr=[20,30,50,70,10]
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
//descending order sorting array

arr=[20,30,50,70,10]
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