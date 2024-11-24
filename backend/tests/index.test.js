const { app } = require('@azure/functions'); // Your Azure Functions app, not directly needed in the test
const helloHandler = require('../api/hello/index'); // Update with the actual path of your handler

describe('helloHandler Function', () => {
    let context;
    let request;

    beforeEach(() => {
        context = {
            log: jest.fn(), 
        };

        request = {
            method: 'GET', 
            body: {},
            query: {},
        };
    });

    it('should log message and return "Hello from backend!"', async () => {
        const response = await helloHandler(request, context);

        expect(context.log).toHaveBeenCalledWith('Http function was triggered.');

        expect(response.body).toBe('Hello from backend!');
    });
});
