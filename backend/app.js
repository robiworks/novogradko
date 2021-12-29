const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
    console.log(`Novogradko RESTful API is running on port ${port}.`);
});

const api = require('./api');

app.get('/all/', api.getAll);
app.get('/all/:id', api.getById);
app.post('/all/', api.addBuilding);
app.put('/all/:id', api.updateBuilding);
app.delete('/all/:id', api.deleteBuilding);
