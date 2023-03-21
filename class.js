// // //class is an blueprint of the object. class is an logical entity. class is consist of methods and properties.

// // //object is an run-time and real-word entiy.object is an instance of  class. object has an state, behaiour an identity.  
// // class user{
// //     constructor(x,y,z)
// //     {
// //         this.first_name=x,//this keyword is represent the object and create multiple copy of the object and always used  in constructor function under. consturctor function is used to intialized the varibale jo v value apa new keywords de under dinde aa oh constructor function nal get krde aa. this keyord is used to access the value of the all variables and methods are used in class.
// //         this.last_name=y,
// //         this.age=z,
// //         this.fullName=()=>{
// //             console.log(this.first_name+" "+this.last_name);
// //         }
// //     }
// // }
// // result=gurjeet=new user("gurjeet","kaur",22)
// // console.log(result)
// // result.fullName()

// // class car{
// //     constructor(a,b)
// //     {
// //         this.wheels=a,
// //         this.color=b,
// //         this.steering=()=>{
// //             console.log(this.wheels+" "+this.color)
// //         }

// //     }
// // }
// // x=car1=new car(4,"red")
// // console.log(x)
// // x.steering();

// // class student{
// //     constructor(c,d,e,f)
// //     {
// //         this.first_name=c,
// //         this.last_name=d,
// //         this.age=e,
// //         this.address=f,
// //         this.all_deatil=()=>{
// //             console.log(this.first_name+" "+this.last_name+" "+this.age+" "+this.address)
// //         }
// //     }
// // }
// // g=jot= new student("Gurjeet","kaur",22,"vill.Harbanspura Teh.Sirhind Dist.FatehgarhSahib")
// // console.log(g)
// // g.all_deatil();

// class student1{
//     constructor()
//     {
//         this.name="Gurjeet",
//         this.age="22",
//         this.class="MCA",
//         this.training="Javascript",
//         this.training_institue="Mander"
//        this.detail=()=>{
//         console.log(this.name+""+this.age+""+this.class)
//        }
    
// }
// getdeatil(){
//     console.log(this.training)
//     return this
// }
// getdeatil1(){
//     console.log(this.training_institue)
//     return this
// }
//  };
   

// details1=new student1()

// .getdeatil()
// .getdeatil1()
// console.log(details1)

//chaining methods
student=["gurjeet","jot","navneet"]
name1=[]
name1.push(student)
console.log(name1)

name2=[...student]//spread operator //used to copy the array
console.log(name2)

food=[
    { name:"banana",type:"fruit"},
    { name:"Apple",type:"fruit"},
    { name:"Chocolate",type:"candy"},
    { name:"Orange",type:"fruit"}
];
food.map(x=>console.log(x))//single single element print by using map function//map function callback function lainda hai
// food.map(item=>console.log(item.name))
food.map(item=>console.log(item.type)).reduce((result,fruit)=>{result.push(fruit);return[...new Set(result)];
},[]);
