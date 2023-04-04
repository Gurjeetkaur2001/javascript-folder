
1.// //function
// function getUser()
// {
//     return[{username:'john',Email:"johan@test"},
//     {username:'john',Email:"johan@test"}
//     ]
// }
// function FindUser(username)
// {
//     Users=getUser();
//     user=Users.find((user)=>user.username===username);
//     return user;
// }
// console.log(FindUser('john'))

// //2. function without callback function nd which can return the problem undefinded.
// function getUser()
// {
//     Users=[];
//     setTimeout(() => {Users=[{username:"gurjeet",email:"gk123@gmail.com"},
//     {username:"navneet",email:"navneetKaur@gmail.com"}]  
//     }, 2000);
//     return Users;
// }
// function FindUser(username)
// {
//     users=getUser();
//     console.log(users);
//     user=users.find((user)=>{user.uername===username})
//     return user
// }
// console.log(FindUser('gurjeet'))


// 3.//function problem solved using callback function 
// function getUsers(callback)
// {
//     Users=[];
//     setTimeout(() => {Users=[{username:"gurjeet",email:"gk123@gmail.com"},
//                     {username:"navneet",email:"navneetKaur@gmail.com"}]
// callback(Users)},2000 );
// }
// function FindUser(username)
// {
// getUsers((users)=>{user=users.find((user)=>user.username===username)})
// console.log(user);
// }
// console.log(FindUser('gurjeet'))


//function callback using forloop
function getUser(callback)
{
    Users=[]
    setTimeout(() => {Users=[{username:"gurjeet",email:"gk123@gmail.com"},
                        {username:"navneet",email:"navneetKaur@gmail.com"},
                        {username:"navneet",email:"navneetKaur@gmail.com"},
                        {username:"navneet",email:"navneetKaur@gmail.com"}]
        
   callback(Users)},2000);
   return Users;
}
function FindUser()
{
  getUser((Users)=>{
    for(i=0;i<Users.length;i++)
    {
        console.log(Users[i])
    }
  })
}
FindUser()