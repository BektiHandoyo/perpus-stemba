import db from "../config/Database.js"
import { Sequelize, DataTypes } from "sequelize"
import { daftarKelas } from "../utils/daftarKelas.js"

const Siswa = db.define('Siswa', {
    nis : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : false
    }, 
    nama : {
        type : DataTypes.STRING(50)
    },
    kelas : { 
        type : DataTypes.ENUM(),
        values : daftarKelas
    },
    gender : {
        type : DataTypes.ENUM(),
        values : ['Laki-laki', 'Perempuan']
    }
}, {
    freezeTableName : true
})

export default Siswa;