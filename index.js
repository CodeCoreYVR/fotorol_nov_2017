const express = require('express');

// When we require `express`, we get function that we can call
// to create an "instance of" `express` app. We will use methods
// of the app object to build our web server.
const app = express();


// The `request` represents a HTTP request. It contains
// information about the request including the verb, the headers
// any data, etc. The `request` is sent by the client usually
// a browser.

// The `response` represents a HTTP response. It's object
// that contains a header & a body of data that our application
// will built to reply to the client's `request`.
app.get('/home', (request, response) => {
  response.send(`
    Convergence user centered design disrupt pitch deck food-truck workflow experiential fund workflow grok convergence. Steve Jobs big data thinker-maker-doer responsive experiential responsive SpaceTeam piverate engaging pivot long shadow pitch deck. User centered design human-centered design disrupt disrupt fund affordances integrate paradigm integrate workflow affordances. Iterate grok food-truck quantitative vs. qualitative big data engaging hacker.
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
