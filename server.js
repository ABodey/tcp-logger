const createLogApp = require('./lib/create-log-server');

const server = createLogApp();
server.listen(15688, () => {
    //eslint-disable-next-line
    console.log('tcp-logger running on port 15688');
});