const inMemory = [
    {
        name: 'Novogradnja 1'
    },
    {
        name: 'Novogradnja 2'
    },
    {
        name: 'Novogradnja 3'
    }
];

const getAll = async (request, response) => {
    pool.query('SELECT * FROM buildings;', (error, results) => {
        response.status(200).json(results.rows);
    });
    // response.status(200).json(inMemory);
};

const getById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT * FROM buildings WHERE id = $1', [id], (error, results) => {
        response.status(200).json(results.rows);
    });
    // response.status(200).json(inMemory[0]);
};

const addBuilding = async (request, response) => {
    const { name } = request.body;
    inMemory.push({ name });
    response.status(201).send('Building added succesfully.');
};

const updateBuilding = (request, response) => {
    const { name } = request.body;
    inMemory[0] = { name };
    response.status(200).send('First building in list updated.');
};

const deleteBuilding = (request, response) => {
    inMemory.shift();
    response.status(200).send('First building in list deleted.');
};

const Pool = require("pg").Pool;
const pool = new Pool(
    {
        user: 'user',
        host: 'novogradko',
        database: 'novogradko',
        password: 'pass',
        port: '5432'
    }
);

module.exports = {
    getAll,
    getById,
    addBuilding,
    updateBuilding,
    deleteBuilding,
    pool
};
