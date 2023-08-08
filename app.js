// Import the http module to create a web server
const http = require('http');

// Get the port from the environment variable or use 3000 as the default value
const port = process.env.PORT || 3000;

// Create a web server that handles requests and responses
const server = http.createServer((req, res) => {
  // Set the response status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // Send the HTML content as the response body
  res.end('<html><head><title>Hello World</title><style>:root {--bg-color: yellow;} body {background-color: var(--bg-color);}</style></head><body><h1>Hello World!</h1></body></html>');
});

// Start listening for incoming requests on the specified port
server.listen(port, () => {
  // Print a message to the console when the server is ready
  console.log(`Server running at http://localhost:${port}/`);
});
