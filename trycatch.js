// // try{
// //     console.log(x);
// // }
// // catch(error)
// // {
// //     console.log(error)
// // }

// try{
//     a=[1,2,34,5,6,7]
//     console.log(a);
//     console.log(b)
// }
// catch(error)
// {
//     console.log("There is error which shows "+error)
// }



// try{


//     console.log("we are inside the try block")
// }
// catch(error)
// {
//     console.log(error)
// }

function throws(func) {
    try {
        func();
    } catch {
        return; // everything OK
    }
    throw new Error('Function didn’t throw an exception!');
}


