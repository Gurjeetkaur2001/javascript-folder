// // function thismean()
// // {
// // this.y=23;
// // function inner(){
// //     this.x=65;
// // return this.x;
// // }
// // // console.log(thismean())//global object return krega jo variable or funtion use kreange oh this ch show krega.key value pair hovega
// // // console.log(this)
// // inner()
// // }
// // console.log(thismean())

// class Dog{
//    is="gurjeet"
//     log(){console.log(this);}
//     bark(){this.is="woffing";
// this.log();
// return this;
// }
// walk(){
//     this.is="walking";
//     this.log();
//     return this;
// }
// }
// dog1=new Dog()
// dog1.log()
// dog1.walk().bark()

// class StringMethod {
 
//      words = "gurjeet_jot";
  
  
//     toUpperCase() {
//       this.words = this.words.toUpperCase();
//       console.log(this.words);
     
//     }
  
//     toLowerCase() {
//         this.words = this.words.toLowerCase();
//         console.log(this.words);
//       return this;
//     }
  
//     capitalize() {
//         this.words = this.words.charAt();
//         console.log(this.words);
//       return this;
//     }
//   }
  
//   const str1 = new StringMethod();
//   str1.toUpperCase(); 
//   str1.capitalize().toLowerCase()


class arraymethod
{
  arr=[3,5,7,2,8]
  len()
  {
    console.log(this.arr)
  }
  sort1()
{
  this.arr=this.sort();
  return this;
}
}
d=new arraymethod()
d.len()
d.sort1()