const db = require("../config/db");

class Novogradko {
    async getAll() {
        let results = await db.query(`SELECT * FROM buildings`).catch(console.log);
        return results.rows;
    }

    async getApartments() {
        let results = await db.query(`SELECT * FROM buildings WHERE type = 0`).catch(console.log);
        return results.rows;
    }

    async getHouses() {
        let results = await db.query(`SELECT * FROM buildings WHERE type = 1`).catch(console.log);
        return results.rows;
    }
}

module.exports = Novogradko;