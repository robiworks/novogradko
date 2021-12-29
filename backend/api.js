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
    response.status(200).json(inMemory);
};

const getById = (request, response) => {
    response.status(200).json(inMemory[0]);
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

module.exports = {
    getAll,
    getById,
    addBuilding,
    updateBuilding,
    deleteBuilding
};
