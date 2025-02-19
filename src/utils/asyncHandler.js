const asyncHandler = (requestHandler) =>{
    (req,res, next) =>{
        // Promise.resolve().catch((err)=> next(err)) // ask chatgpt 
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err)) 
    }
}


export {asyncHandler}




// const asyncHandler = () =>{}
// const asyncHandler = (func) =>{}
// const asyncHandler = (func) =>async() =>{}

// for try catch
// pass to another function ad async it 
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