


// x=10
// table='';
// for(i=1;i<=x;i++){
//     for(j=1;j<=x;j++){
//         table=i*j
      
//   table+=('\n')
//   console.log(table)
//     }
   
// }



string='';
for(i=1;i<=10;i++){
   
    for(j=1;j<=10;j++){
       string+=(i*j)
       string+='\t'   
      
    }
    string+='\n'
 
}
console.log(string) 

//backtrick chracter//literal string
g="gurjeet";
for(i=0;i<10;i++){
    
        console.log('my name is:',g)
        console.log(`my name is: ${g}`)
    }
 x=10
 y=20
 {
    console.log(`adding number ${x} and ${y} is: ${x+y}`)
 }