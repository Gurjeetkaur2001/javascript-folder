//Regularexp test()
regularexp=RegExp(/[1-4]/)
console.log(regularexp.test([1234]));

//regularExp Match('t$')
string=`my name is gurjeet&jot`
regexpp='t$'
str=string.match(regexpp)
console.log(str)

//regularex (*)
string=`my gurjot is manjott&jot`
regexpp='jo*'
str=string.match(regexpp)
console.log(str)

//regularexp(^)
string=`my gurjot is manjott&jot`
regexpp='^m'
str=string.match(regexpp)
console.log(str)

//match the digits in present in string.
let str2 = 'The price of the book is .';
let regex2 = /\d+/;
let result2 = str2.match(regex2);
console.log(result2); 
