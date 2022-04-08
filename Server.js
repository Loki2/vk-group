if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const http = require('http');
const app = require('./src/App');
const PORT = process.env.APP_PORT | 4040;

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`🚀 Engine in ready on, Take off http://localhost:${PORT}`)
})