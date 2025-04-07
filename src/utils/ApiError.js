<<<<<<< HEAD
class ApiError extends Error {
  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = [],
    stack = ''
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null; // ask chatgpt
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.contructor);
    }
  }
}

export { ApiError };
=======
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
>>>>>>> 2c1a56955f3282938aff2c48c49bdbd80b74cf72
