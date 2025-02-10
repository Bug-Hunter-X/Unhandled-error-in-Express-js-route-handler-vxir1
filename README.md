# Unhandled Error in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: missing error handling for invalid user IDs and missing response for user not found. The bug.js file contains the erroneous code, while the bugSolution.js provides a corrected version.

## Bug

The original code lacks proper error handling. If a user attempts to access a non-existent user, the server logs an error message but doesn't send a response to the client.  This leads to a poor user experience and potential inconsistencies.

## Solution

The solution includes comprehensive error handling. It checks for the existence of the user. If not found, it returns an appropriate HTTP status code (404 Not Found) along with a JSON response indicating the error.  This ensures a consistent and informative response to the client in all cases.