const express = require('express');
const morgan = require('morgan');

// When we require `express`, we get function that we can call
// to create an "instance of" `express` app. We will use methods
// of the app object to build our web server.
const app = express();

app.use(morgan('dev'));

/*
app.use((request, response, next) => {
  console.log(`${request.method} - ${request.path} - ${new Date().toString()}`);
  // The `next` argument is a function that when called tells express
  // that the middleware is finished and its time to move to the next
  // one in line. If you forget to call `next`, your client will appear
  // to load forever while it waits for a response.
  next();
});
*/

// The `request` represents a HTTP request. It contains
// information about the request including the verb, the headers
// any data, etc. The `request` is sent by the client usually
// a browser.

// The `response` represents a HTTP response. It's object
// that contains a header & a body of data that our application
// will built to reply to the client's `request`.
app.get('/home', (request, response) => {
  response.send(`
    Convergence user centered design disrupt pitch.
  `);
});

const DOMAIN = 'localhost';
const PORT = '3002';
app.listen(PORT, DOMAIN, () => {
  // Optionally, `app.listen` can take a third argument that is
  // a callback that will called once and only when the server is ready
  // to handle requests.

  console.log(`💻 Server listenning on http://${DOMAIN}:${PORT}`);
});






// bump
