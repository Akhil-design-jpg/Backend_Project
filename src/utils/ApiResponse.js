<<<<<<< HEAD
class ApiResponse {
  constructor(statusCode, data, message = 'Success') {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = success < 400;

    /*
          Informational responses(100-199) statusCode
          Successful responses(200-299)
          Redirection messages(300-399)
          Client error reponses(400-499)
          Server errror responses(500-599)
      */
  }
}

export { ApiResponse };
=======
class ApiResponse{
    constructor(
        statusCode,data,message= "Success"
    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400

        /*
            Informational responses(100-199) statusCode
            Successful responses(200-299)
            Redirection messages(300-399)
            Client error reponses(400-499)
            Server errror responses(500-599)
        */
    }
}
>>>>>>> 2c1a56955f3282938aff2c48c49bdbd80b74cf72
