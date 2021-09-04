const Boom = require('@hapi/boom');
const logger = require('../util/logger');

exports.plugin = {
    register: async (server, options) => {
        server.ext('onPreResponse', (request, h) => {
            if (Boom.isBoom(request.response) && request.response.data) {
                request.response.output.payload.data = request.response.data;
            } else if (request.response.message && request.response && request.response.output && request.response.output.payload) {
                request.response.output.payload.data = request.response.message;
            }
            if ((request.response instanceof Error) && request.response.output && Math.floor(request.response.output.statusCode / 100) === 4) {
                if (request.response.output.statusCode !== 404 && request.response.output.statusCode !== 409) {
                    logger.warn("Client error", {message: request.response.message, stack: request.response.stack});
                }
            }
            return h.continue;
        });
    },
    name: "errorHandler"
};
