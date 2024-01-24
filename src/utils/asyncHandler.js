// Define a utility function called asyncHandler
const asyncHandler = (requestHandler) => {
    // Return a middleware function with parameters (req, res, next)
    return (req, res, next) => {
        // Wrap the execution of the requestHandler in a Promise
        Promise.resolve(requestHandler(req, res, next))
            // Catch any errors that occur during the execution
            .catch((err) => next(err));
    };
};

// Export the asyncHandler function for use in other modules
export { asyncHandler };





// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {} 


// // Define a higher-order function called asyncHandler.
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         // Try executing the provided asynchronous function (fn) with the given request, response, and next.
//         await fn(req, res, next);
//     } catch (error) {
//         // If an error occurs during the execution of the asynchronous function, catch the error.

//         // Set the HTTP status code to the error's code or default to 500 (Internal Server Error).
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };
