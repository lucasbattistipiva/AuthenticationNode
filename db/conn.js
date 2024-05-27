import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()
const {DB_NAME,DB_USER,DB_PASS} = process.env

const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASS,{
    dialect:'mysql',
    host: 'localhost'
})

export default sequelize