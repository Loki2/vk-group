if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const http = require('http');
const app = require('./src/App');
const port = process.env.PORT || 4000;

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`🚀 Engine in ready on, Take off http://localhost:${PORT}`)
})