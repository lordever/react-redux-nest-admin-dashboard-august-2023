const { createProxyMiddleware } = require('http-proxy-middleware');

const BACKEND_PORT = 3001;

module.exports = function(app) {
    app.use(
        '/api', // Base URL for your Nest.js backend
        createProxyMiddleware({
            target: `http://localhost:${BACKEND_PORT}`, // Replace with your Nest.js backend`s address and port
            changeOrigin: true,
        })
    );
};