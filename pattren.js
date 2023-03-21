// //Hollow Square pattern
// n=5
// string="";

// for(i=0;i<n;i++)
// {
//     for(j=0;j<n;j++)
//     {
//         if(i===0||i===n-1)
//         {
//             string+='*'
//         }
//         else
//         {
//             if(j==0||j==n-1)
//         {
//             string+='*'
//         }
    
//         else
//         {
//             string+=" "
//         }
//       }
//     }
//       string+='\n'
//     }
//     console.log(string)

// //square star pattern
// n=5
// string=""
// for(i=0;i<=n;i++)
// {
//     for(j=0;j<=n;j++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)

//right star pattern
// n=5
// string=""
// for(i=1;i<=n;i++){
//     for(j=0;j<n-i;j++){
//         string+=" ";
//     }
//     for(k=0;k<i;k++){
//         string+="*"
//     }
//     string+="\n"
// }
// console.log(string)


//print the N word
string="";
for(i=0;i<3;i++)
 {
    for(j=0;j<5;j++)
    {
        if(j==0||j==4)
        {
            string+="*"
        }
       else{
        if(j==0||j==i+1){
            string+="*"
        }
        else{
            string+=" "
        }
       }
      }
      string+="\n"
}
console.log(string)

//print diamond
// string= ""
     
//     for (i = 0; i < 5; i++) {
       
//         for (j = 0; j < 6; j++) {
//             if ( j==3 && j <=3  )
//                 string+="$";
//             else if (j == 4 && i != 0 && i != 4)
//                 string +="$";
//             else if (j == 2 && i != 0 && i != 4)
//                 string +="$";
             
//             else if (j == 5 && i != 0 && i !=1 &&  i !=4 && i !=3)
//                 string +="$";
//             else if (j == 1 && i != 0 && i !=1 && i !=4 && i != 3)
//                 string +="$";
             
//             else
//                 string +=" ";
//         }
//         string +="\n";
//     }
//     console.log(string)






