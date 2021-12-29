const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Novogradko RESTful API is running on port ${PORT}.`);
});

const apiCalls = require('./api');
app.use(apiCalls);

const gracefulShutdown = () => {
    console.log("Starting graceful shutdown...");
    app.close(function() {
        console.log("Express shut down.");
    });
}

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
