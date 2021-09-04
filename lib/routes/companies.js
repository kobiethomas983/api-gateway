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
    }
];
