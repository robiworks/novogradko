const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Novogradko RESTful API is running on port ${PORT}.`);
});

const apiCalls = require('./api');
app.use(apiCalls);
