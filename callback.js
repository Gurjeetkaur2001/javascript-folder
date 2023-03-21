// function callback(g)
// {
//     g()
// }
// callback(calling)

// function calling()
// {
//     console.log("hello navneet")
// }



// function callback(cb)
// {
//     cb()
//     setTimeout(()=>{cb()},5000)
//     for(i=0;i<10;i++)
//     {
//         console.log(i)
//     }
// }
// callback(calling);
// function calling()
// {
//     console.log("hello")
// }


function printElement(x)
{
    return x;
}
function getElement(x,z)
{
    y=x(z)
    for(i=0;i<y.length;i++)
    {
        if(y[i]%2==0)
{
    console.log(`${y[i]}: is even`)
}
       else{
        console.log(`${y[i]}: is odd`)
       }
    }
}
getElement(printElement,[3,4,5,6,7,2,9,8])