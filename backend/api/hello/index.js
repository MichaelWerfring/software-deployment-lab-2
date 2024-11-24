  // const express = require('express');
  // const app = express();
  
  // app.get('/api/hello', (req, res) => {
  //     res.json({ message: 'Hello from Node.js API!' });
  // });
  
  // module.exports = async function (context, req) {
  //   context.res = {
  //     status: 200,
  //     body: 'Hello from Node.js API!'
  //   };
  // };

  // const port = process.env.PORT || 8080;
  // app.listen(port, () => {
  //     console.log(`Server running on port ${port}`);
  // });

  // module.exports = { app};

  const { app } = require('@azure/functions');

app.http('hello', {
    methods: ['POST', 'GET'],
    handler: async (request, context) => {
        context.log('Http function was triggered.');
        return { body: 'Hello from backend!' };
    }
});