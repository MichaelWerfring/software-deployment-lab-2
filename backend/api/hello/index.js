const { app } = require('@azure/functions');

  const helloHandler = async (request, context) => {
    context.log('Http function was triggered.');
    return { body: 'Hello from my node Backend!' };
  };
  module.exports = helloHandler;
app.http('hello', {
    methods: ['POST', 'GET'],
    handler: helloHandler
});