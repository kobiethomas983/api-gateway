'use strict';

const Boom = require('@hapi/boom');

module.exports = {

    /**
     * Checks if the given error is a server error
     * @param e the error object
     * @returns {boolean}
     */
    isServerError: e => {
        let code = parseInt(e.code || e.status || (e.output || {}).statusCode);
        return ! (code && Math.floor(code / 100) === 4);
    },

    mapError(e, data) {
        let status = e.status || e.response.status;
        if (status === 404) {
            return null;
        } else if (status && ((Math.trunc(status / 100) === 4))) {
            throw Boom.boomify(e, {statusCode: status, data: Object.assign(data || {}, (e.response || {}).body)});
        } else {
            e.data = data;
            e.data.extra = (e.response || {}).body;
            throw Boom.boomify(e, {statusCode: status, message: "Internal client error"});
        }
    },

    mapAnyError(e, data) {
        if (e.status && (Math.floor(Math.trunc(e.status / 100) === 4))) {
            throw Boom.boomify(e, {statusCode: e.status, data: (e.response || {}).body});
        } else {
            e.data = data;
            e.data.extra = (e.response || {}).body;
            throw Boom.boomify(e, {statusCode: e.status, message: "Internal client error"});
        }
    }
};
