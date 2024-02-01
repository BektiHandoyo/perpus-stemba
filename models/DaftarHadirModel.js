import db from "../config/Database.js"
import { Sequelize, DataTypes } from "sequelize"
import Siswa from "./SiswaModel.js"


const DaftarHadir = db.define("DaftarHadir", {
    tanggal : {
        type : DataTypes.DATE,
        values : new Date(),
    },
    siswa : {
        type : DataTypes.INTEGER,         
        references : {
            model : Siswa,
            key : 'nis'
        }    
    }
}, {
    freezeTableName : true
})

export default DaftarHadir;