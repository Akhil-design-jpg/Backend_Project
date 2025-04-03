class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong",
        errors= [], // array for multiple errors
        stack= ""
        
    ){
        // overwrite constructor
        super(message)
        this.statusCode= statusCode
        this.data = null // reserverd for future use
        this.message = message
        this.success = false
        this.errors = errors


        if(stack){
            this.stack = stack

        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}

export {ApiError}
