//arrow function is the shorthand property in the function
my_function=(a,b)=>a+b;
{
 console.log(my_function(10,20))   
}
func=()=>{
console.log("hello")
}
func()
//using ternary operator in arrow function

age=22
element=(age<18)?()=>console.log("baby"):
()=>console.log("adult");
element()