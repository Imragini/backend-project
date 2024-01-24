// class ApiError extends Error {
//     constructor(
//         statusCode,
//         message = "somthing went wrong",
//         errors = [],
//         statck = "",
//     ) {
//         super(message)
//         this.statusCode = statusCode
//         this.data = null
//         this.message = message
//         this.success = false;
//         this.errors = errors

//         if (statck) {
//             this.stack = statck
//         } else {
//             Error.captureStackTrace(this, this.constructor)
//         }
//     }
// }

// export { ApiError }



// Define a custom error class named ApiError, extending the built-in Error class
class ApiError extends Error {
    // Constructor function to create instances of ApiError
    constructor(
        statusCode,        // HTTP status code associated with the error
        message = "something went wrong",  // Default error message if not provided
        errors = [],        // Additional error details or messages
        stack = "",         // Stack trace for the error
    ) {
        // Call the constructor of the parent class (Error) with the provided message
        super(message);

        // Set properties specific to the ApiError instance
        this.statusCode = statusCode;  // HTTP status code associated with the error
        this.data = null;             // Additional data associated with the error (initialized as null)
        this.message = message;       // Error message
        this.success = false;         // Indicates if the operation was not successful
        this.errors = errors;         // Additional error details or messages

        // Set the stack trace for the error
        if (stack) {
            this.stack = stack;       // Use the provided stack trace
        } else {
            // If no stack trace is provided, capture the stack trace for this constructor
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Export the ApiError class for use in other modules
export { ApiError };
