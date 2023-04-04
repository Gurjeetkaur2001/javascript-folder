// //Regularexp test()
// regularexp=RegExp(/[1-4]/)
// console.log(regularexp.test([1234]));

// //regularExp Match('t$')
// // string=`my name is gurjeet&jot`
// // regexpp='t$'
// // str=string.match(regexpp)
// // console.log(str)

// //regularex (*)
// // string1 =`my gurjot is manjott&jot`
// // regexpp='jo*'
// // str=string1.match(regexpp)
// // console.log(str)

// //regularexp(^)
// // string2 =`my gurjot is manjott&jot`
// // regexpp='^m'
// // str=string2.match(regexpp)
// // console.log(str)

// //match the digits in present in string.
// let str2 = 'The price of the book is $19.99';
// let regex22 = /\d+/;
// let result22 = str2.match(regex22);
// console.log(result22); 


// const string = 'Find me';
// const pattern = /me/;

// // search if the pattern is in string variable
// const result1 = string.search(pattern);
// console.log(result1); // 5

// // replace the character with another character
// const string1 = 'Find me';
// string1.replace(pattern, 'found you'); // Find found you

// // splitting strings into array elements
// const regex1 = /[\s,]+/;
// const result2 = 'Hello world! '.split(regex1);
// console.log(result2); // ['Hello', 'world!', '']

// // searching the phone number pattern
// const regex2 = /(\d{3})\D(\d{3})-(\d{4})/g;
// const result3 = regex2.exec('My phone number is: 555 123-4567.');
// console.log(result3); // ["555 123-4567", "555", "123", "4567"]


// program to validate the phone number

// function validatePhone(num) 
// {
//   reg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

//     result = num.match(reg);
//     if (result) {
//         console.log('The number is valid.');
//     }
//     else {
//         console.log(`the ${num} is not valid. please Enter a valid number.The ${num} format is xxx-xxx-xxxx.`)
//     }
// }

// validatePhone('797958394080');

// // program to validate the Email.
// function validatemail(num1) 
// {
//   regexp = /\S+@\S+\.\S+/g;

//     result1 = num1.match(regexp);
//     if (result1) {
//         console.log('The mail is valid.');
//     }
//     else {
//         console.log(`the ${num1} is not valid. please Enter a valid Email-Format.`)
//     }
// }

// validatePhone('gk4636963@gmail.com');

// class User {
//     constructor(email,password) {
//       this.email = email,
//       this.password = password;
//     }
//   validateEmail()
//   {
//    this.email=new RegExp(/\S+@\S+\.\S+/g);
    
//     if(this.email)
//     {
//       console.log(`The Enter email is valid`)
//     }
//     else{
//       console.log(`Please enter the valid Email Format`)
//     }
//   }

// validatePassword()
// {
//   this.password=new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g);
  
//   if(this.password)
//   {
//     console.log(`The Enter password is valid`)
//   }
//   else{
//     console.log(`Please enter the valid password.`)
//   }
// }
// }
// newuser=new User("gk4636963 @ gmail.com",7897465272)
// newuser.validateEmail()
// newuser.validatePassword()
  
//regularexpression through the match ()keyword.
// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

//   validateEmail(emailreg) {
//    emailreg= /^\S+@\S+\.\S+$/;

//     if (this.email.match(emailreg)) {
//       console.log(`The entered ${this.email} is valid`);
//     } else {
//       console.log(`Please enter a valid email format`);
//     }
//   }

//   validatePassword(passwordreg) {
//    passwordreg= /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

//     if (this.password.match(passwordreg)) {
//       console.log(`The entered ${this.password} is valid`);
//     } else {
//       console.log(`Please enter a valid password`);
//     }
//   }
// }

// newUser = new User("gk4636963@gmail.com", "8987457288");
// newUser.validateEmail();
// newUser.validatePassword();


//regularexpression through the test()keyword.
class user1{
  constructor(email1,password1)
  {
    this.email=email1,
    this.email=password1;
  }
  validemail(email)
  {
    email=/^\S+@\S+\.\S+$/;
    if(email.test("gk4636963@gmail.com"))
    {
      console.log(`The entered ${this.email} is valid`)
    }
    else{
      console.log(`Please enter a valid email format`)
    }
  }
  validpassword(password)
  {
    password=/^\S+@\S+\.\S+$/;
    if(password.test("9734970374"))
    {
      console.log(`The entered ${this.password} is valid`)
    }
    else{
      console.log(`Please enter a valid email format`)
    }
  }
  }
 x = new user1();
 x. validemail();
 x. validpassword();

