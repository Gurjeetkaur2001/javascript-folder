
//wap to create a function with add,subtract,multiply the value
// function my_fun(a,b)
// {
// sum=a+b

// console.log(sum)
// }
// my_fun(10,20)

// function my_fun1(a,b)
// {
// sub=a-b

// console.log(sub)
// }
// my_fun1(10,20)

// function my_fun2(a,b)
// {
// mul=a*b

// console.log(mul)
// }
// my_fun2(10,20)


// function my_function(x,y){
//     sum=x%y
//     console.log(sum)
//     }
//     my_function(40,3)
    
//     function my_function2(x,y){
//         sum=x/y
//         console.log(sum)
//         }
//         my_function2(40,3)

//print an array in horizonatlly through function
// string=""
// function print_element(arr){

//     for(i=0;i<5;i++)
//     {
//         string+=arr[i]
        
//     }
//     console.log(string)
// }
// print_element([1,2,3,4,5])


// //print an array in vertically
// function print_element(arr){

//     for(i=0;i<5;i++)
//     {
//         console.log(arr[i])
        
//     }
   
// }
// print_element([1,2,3,4,5])

//print an object through function
// function print_object(obj)
//     {
//         for(i=0;i<4;i++)
//         {
//             console.log(obj)
//         }
//     }
//     print_object({firstName:"gurjeet",lastName:"Kaur",city:"sirhind"})

//get the value and key in object
// function print_object1(obj){
//     if(typeof(obj)=="object"){
//     for(i in obj)
//     console.log(obj)
//     }
// else{
//     console.log(`type of object is not an object its type is ${typeof(obj)}`)
// }
// }
// print_object1("gurjeet kaur")
// print_object1({first_Name:"gurjeet",last_Name:"Kaur",city:"sirhind"})

//get the only values in object 

function my_fun(obj1){
  for(i in obj1)
  {   console.log(obj1[i])
    }
   
  }
my_fun({Name:"gurjeet Kaur",class:"MCA",clg:"sggswu"})

//get the only one value in object

function my_fun(obj1){
    for(i in obj1)
    {  
      }
      console.log(obj1.Name)
    }
  my_fun({Name:"gurjeet Kaur",class:"MCA",clg:"sggswu"})