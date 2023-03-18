const app = require('./app')  // Express aplikacija
const http = require('http')
const config = require('./config')

const server = http.createServer(app)

server.listen(config.PORT, () => {
    console.log(`App is running on port: ${config.PORT}`);
});


