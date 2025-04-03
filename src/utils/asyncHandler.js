const asyncHandler = (requestHandler) =>{
    (req,res, next) =>{
        // Promise.resolve().catch((err)=> next(err)) // ask chatgpt 
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err)) 
    }
}


export {asyncHandler}




// const asyncHandler = () =>{}
// const asyncHandler = (func) =>{}
// const asyncHandler = (func) => {()=>{}}
// this is what it means in the next line 
// const asyncHandler = (func) =>async() =>{} // higher order function where function is passed as paramter or a variable

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
