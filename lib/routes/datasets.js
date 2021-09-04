'use strict';
const BASE_PATH = "/api/v1";
const DATASET_PATH = "http://localhost:8081";

module.exports = [
    {
        method: 'GET',
        path: BASE_PATH + '/datasets',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : DATASET_PATH + '/datasets'}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'GET',
        path: BASE_PATH + '/datasets/{datasetId}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : DATASET_PATH + '/datasets/' + req.params.datasetId}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'POST',
        path: BASE_PATH + '/datasets',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : DATASET_PATH + '/datasets'}},
                    passThrough: true
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: BASE_PATH + '/datasets/{datasetId}',
        config: {
            handler: {
                proxy: {
                    mapUri: (req) => {return {uri : DATASET_PATH + '/datasets/' + req.params.datasetId}},
                    passThrough: true
                }
            }
        }
    }
]