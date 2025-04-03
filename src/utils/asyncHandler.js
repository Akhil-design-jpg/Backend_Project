const asyncHandler = (requestHandler) =>{
    (req,res, next) =>{
        // Promise.resolve().catch((err)=> next(err)) // ask chatgpt 
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err)) 
    }
}


export {asyncHandler}


/*
    asynchandler
    a higher order function that takes another function as an argument and possible returns a new function

    Why needed? 
    In express.js, if an asynchronous function throws an error, you need to explicitly pass that error to the next function 
    for the express error-handling middleware to catch it. Without this, your server might crash or not handle the error properly

    different variations

    version1 : The normal function 
    const asyncHandler = () =>{}

    version2: The higer-order function 
    const asyncHandler = (func)=>{
    return () =>{}
    Takes a function(func) as an argument and returns a new function 

    version3: The higher-order async function
    const asyncHandler = (func) =>{
        return async() =>{}
    
    }

    Same as above, but the returned function is asynchronous (async).
    Used when the inner function (func) involves asynchronous operations

*/




// const asyncHandler = () =>{}
// const asyncHandler = (func) =>{}
// const asyncHandler = (func) => {()=>{}}
// this is what it means in the next line 
// const asyncHandler = (func) =>async() =>{} // higher order function where function(func) is passed as paramter or a variable

// for try catch
// pass to another function and async it 
// const asyncHandler = (fn) =>async(req,res,next) =>{
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
