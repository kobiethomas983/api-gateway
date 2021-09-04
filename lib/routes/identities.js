'use strict';
const BASE_PATH = "/api/v1";
const IDENTITIES_PATH = "http://localhost:8080";

module.exports = [
    {
        method: 'GET',
        path: BASE_PATH + '/identities',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : IDENTITIES_PATH + '/identities'}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'GET',
        path: BASE_PATH + '/identities/{id}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : IDENTITIES_PATH + '/identities/' + req.params.id}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'POST',
        path: BASE_PATH + '/identities',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : IDENTITIES_PATH + '/identities'}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'PUT',
        path: BASE_PATH + '/identities/{id}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : IDENTITIES_PATH + '/identities/' + req.params.id}},
                    passThrough: true
                }
            }
        }
    }
]