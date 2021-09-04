'use strict';
const BASE_PATH = "/api/v1";
const SOURCE_PATH = "http://localhost:8081";

module.exports = [
    {
        method: 'GET',
        path: BASE_PATH + '/sources',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : SOURCE_PATH + '/sources'}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'GET',
        path: BASE_PATH + '/sources/{sourceId}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : SOURCE_PATH + '/sources/' + req.params.sourceId}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'POST',
        path: BASE_PATH + '/sources',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : SOURCE_PATH + '/sources'}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'PUT',
        path: BASE_PATH + '/sources/{sourceId}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : SOURCE_PATH + '/sources/' + req.params.sourceId}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: BASE_PATH + '/sources/{sourceId}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : SOURCE_PATH + '/sources/' + req.params.sourceId}},
                    passThrough: true
                }
            }
        }
    },
]