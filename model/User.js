import { DataTypes } from "sequelize";
import db from "../db/conn.js";


const User = db.define('users',{
    user:{
        type: DataTypes.STRING(45),
        allowNull:false
    },
    pass:{
        type: DataTypes.STRING,
        allowNull:false
    }

},{
    timestamps:false
})
// User.sync({force:true})
export default User