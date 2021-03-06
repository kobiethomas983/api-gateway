'use strict';
const BASE_PATH = "/api/v1";
const COMPANIES_PATH = "http://localhost:8080";

module.exports = [
    {
        method: 'GET',
        path: BASE_PATH + '/companies',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : COMPANIES_PATH + '/companies'}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'GET',
        path: BASE_PATH + '/companies/{id}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => { return {uri : COMPANIES_PATH + '/companies/' + req.params.id}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'POST',
        path: BASE_PATH + '/companies',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : COMPANIES_PATH + '/companies'}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'PUT',
        path: BASE_PATH + '/companies/{id}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : COMPANIES_PATH + '/companies/' + req.params.id}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'GET',
        path: BASE_PATH + '/companies/{companyId}/identities',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : COMPANIES_PATH + '/companies/' + req.params.companyId + '/identities'}},
                    passThrough: true
                }
            }
        }
    },
];
