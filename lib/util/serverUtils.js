require('dotenv').config();
const hapi = require('@hapi/hapi');
const h2o2 = require('@hapi/h2o2');
const logger = require('./logger');
const routes = require('../routes');

function buildBasicServer() {
    const config = {
        host: '0.0.0.0',
        port: 3001
    };
    const server = new hapi.Server(config);
    server.listener.keepAliveTimeout = 650e3;
    server.register(h2o2);

    return server;
}

async function buildServer() {
    const server = buildBasicServer();

    //add auth logic here later

    server.events.on('start', () => {
        console.info("================");
        console.info("Starting API server");
        console.info("=================");
    })
    Object.values(routes).forEach(r => {
        server.route(r);
    });
    return server;
}

module.exports = {buildServer, buildBasicServer };