const {buildServer} = require('./lib/util/serverUtils');

async function start() {
    const server = await buildServer();
    await server.start();
    return server;
}

start()
    .then(server => {
        console.log('API Gateway Server running on ' + server.settings.host + ':' + server.settings.port);
    }).catch(e => {
        console.error("Failed to start API ", e);
        process.exit(1);
    });