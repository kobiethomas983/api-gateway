'use strict';
const BASE_PATH = "/api/v1";
const PACKAGE_PATH = "http://localhost:8081";

module.exports = [
    {
        method: 'GET',
        path: BASE_PATH + '/packages',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : PACKAGE_PATH + '/packages'}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'GET',
        path: BASE_PATH + '/packages/{packageId}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : PACKAGE_PATH + '/packages/' + req.params.packageId}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'POST',
        path: BASE_PATH + '/packages',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : PACKAGE_PATH + '/packages'}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'PUT',
        path: BASE_PATH + '/packages/{packageId}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : PACKAGE_PATH + '/packages/' + req.params.packageId}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'GET',
        path: BASE_PATH + '/packages/category/{category}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : PACKAGE_PATH + '/packages/category/' + req.params.category}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'GET',
        path: BASE_PATH + '/packages/country/{country}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : PACKAGE_PATH + '/packages/country/' + req.params.country}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'GET',
        path: BASE_PATH + '/packages/{packageId}/datasets',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : PACKAGE_PATH + '/packages/' + req.params.packageId + "/datasets"}},
                    passThrough: true
                }
            }
        }
    }
]
