const express = require("express");
const router = express.Router();

const Novogradko = require("./controllers/Novogradko");

// Get all buildings
router.get('/all', async (req, res) => {
    let all = await new Novogradko().getAll();
    res.status(200).send(JSON.stringify(all));
});

// Get apartments
router.get('/apartments', async (req, res) => {
    let apartments = await new Novogradko().getApartments();
    res.status(200).send(JSON.stringify(apartments));
});

// Get houses
router.get('/houses', async (req, res) => {
    let houses = await new Novogradko().getHouses();
    res.status(200).send(JSON.stringify(houses));
});

module.exports = router;
