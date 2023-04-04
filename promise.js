 

function prom1(x,y)
{
return new Promise(function(resolve,reject)
 {
  c=x/y;
if(x,y)
{
  resolve(`your answer:${c}`);
}
else
{
reject("Your amswer is wrong plz again divide.");
}
 })}
 function onfillment(result)
 {
console.log(result)
 }
 function onrejection(error)
 {
console.log(error)
 }
 prom1(5,4).then(onfillment).catch(onrejection)



// function prom(complete)
// {
//   return new Promise(function(resolve,reject){
//     console.log("fateching data,please wait!")
//     setTimeout(() => {
//       if(complete)
//       {
//         resolve("I am successfull")
//       }
//       else
//       {
//         reject("I am failed")
//       }
//     }, 2000);
  
//   })
// }
// onfillment=(result)=>
// {
//   console.log(result)
// }
// onrejection=(error)=>
// {
//   console.log(error)
// }
// prom(false).then(onfillment).catch(onrejection)




function getUsers(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: 'john', email: 'john@test.com' },
          { username: 'jane', email: 'jane@test.com' },
        ]);
      } else {
        reject('Failed to the user list');
      }
    }, 1000);
  });
}

function onFulfilled(users) {
  console.log(users);
}
function onRejected(error) {
  console.log(error);
}
getUsers(false).then(onFulfilled,onRejected);