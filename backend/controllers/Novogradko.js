const db = require("../config/db");

var fullTable = `((building NATURAL JOIN building_type) NATURAL JOIN building_status) NATURAL JOIN region`
var allQuery = `SELECT * FROM ${fullTable}`;
var apartmentsQuery = `SELECT * FROM ${fullTable} WHERE type_id = 0`;
var housesQuery = `SELECT * FROM ${fullTable} WHERE type_id = 1`;

class Novogradko {
    async getAll() {
        let results = await db.query(allQuery).catch(console.log);
        return results.rows;
    }

    async getApartments() {
        let results = await db.query(apartmentsQuery).catch(console.log);
        return results.rows;
    }

    async getHouses() {
        let results = await db.query(housesQuery).catch(console.log);
        return results.rows;
    }
}

module.exports = Novogradko;