class ApiResponse{
    constructor(
        statusCode,data,message= "Success"
    ){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = success < 400

        /*
            Informational responses(100-199) statusCode
            Successful responses(200-299)
            Redirection messages(300-399)
            Client error reponses(400-499)
            Server errror responses(500-599)
        */
    }
}