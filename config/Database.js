import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();

const {DB_DATABASE, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_CONNECTION, DB_STORAGE} = process.env;

const db = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host : DB_HOST,
    dialect : DB_CONNECTION,
    port : DB_PORT,
    storage : `./${DB_STORAGE}`
})

export default db;