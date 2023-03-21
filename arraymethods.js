//1.tostring() methods= return the string seprated by the commas.

fruits=["apple","banana","cherry","orange"]
console.log(fruits.toString())

//2.join() methods join the elements in array of string

fruits=["apple","banana","cherry","orange"]
console.log(fruits.join(" * "))
//3.pop() used to remove and as well as show the last element in aray
fruits=["apple","banana","cherry","orange"]
console.log(fruits.pop())
console.log(fruits)
//4.push() used to add the new element in array
fruits=["apple","banana","cherry","orange"]
console.log(fruits.push("kiwi"))
console.log(fruits)
//5.shift() is used to remove the first element in array
fruits=["apple","banana","cherry","orange"]
console.log(fruits.shift())
console.log(fruits)
//6.unshift() is used to add the new element begining of the array
fruits=["apple","banana","cherry","orange"]
console.log(fruits.unshift("lemon"))
console.log(fruits)
//7. index()add the element through the index value 
fruits=["apple","banana","cherry","orange"]
fruits[0]="kiwi";
console.log(fruits)

//8. length()//find the length of the array
fruits=["apple","banana","cherry","orange"]
//8. length()//add the new element in last 
// fruits=[fruits.length]="kiwi";
console.log(fruits.length)

//9.fill method
fruits=["apple","banana","cherry","orange"]
console.log(fruits.fill("jot"))

//10. slice() method slices out a piece of an array into a new array.
fruits=["apple","banana","cherry","orange","kiwi","mango"]
console.log(fruits.slice(3))

//11.splice() is used to add the item in particullar position and removed the items.
//example first 3 defined to add the item in third position and second 1 defined the removed item after the add item
fruits=["apple","banana","cherry","orange","kiwi","mango"]
fruits.splice(3,1,"lemon");
console.log(fruits)
//12.sort() method is used to define the assending or descending order in array.        

