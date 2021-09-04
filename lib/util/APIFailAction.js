module.exports = {

    inbound: async (request, h, err) => {
        return err;
    },

    outbound: async (request, h, err) => {
        return request.response;
    },

};