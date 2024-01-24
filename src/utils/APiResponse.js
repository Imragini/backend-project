// class ApiResponse{
//     constructor(stateCode, data, message = "Success") {
//         this.stateCode = stateCode
//         this.data = data 
//         this.message = message
//         this.success = stateCode < 400
//     }
// }



// Define a class named ApiResponse to represent an API response
class ApiResponse {
    // Constructor method is called when a new instance of ApiResponse is created
    // It takes three parameters: stateCode, data, and an optional message with a default value "Success"
    constructor(stateCode, data, message = "Success") {
        // Assign the HTTP status code to the stateCode property
        this.stateCode = stateCode;
        // Assign the data returned by the API to the data property
        this.data = data;
        // Assign the message associated with the response, defaulting to "Success" if not provided
        this.message = message;
        // Determine the success of the API response based on the HTTP status code
        // If stateCode is less than 400, set success to true; otherwise, set it to false
        this.success = stateCode < 400;
    }
}

// Example usage:
// Create an instance of ApiResponse with a successful response (stateCode < 400)
const successResponse = new ApiResponse(200, { result: "some data" }, "Request successful");

// Create an instance of ApiResponse with an error response (stateCode >= 400)
const errorResponse = new ApiResponse(404, null, "Resource not found");

// Display the created instances
console.log(successResponse);
console.log(errorResponse);
