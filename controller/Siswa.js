import Siswa from "../models/SiswaModel.js";
import { Op } from "sequelize";
import * as dotenv from "dotenv"
import { daftarKelas } from "../utils/daftarKelas.js";

export const siswaIndex = async (req, res) => {
    try {
        const daftarSiswa = await Siswa.findAll({
            order : [
                ['kelas', 'ASC'],
                ['nama', 'ASC']
            ]
        });
        res.json(daftarSiswa)
    } catch (error) {
        console.log(error);
    }
}

export const siswaShow = async (req, res) => {
    const daftarSiswa = await Siswa.findAll({
        order : [
            ['kelas', 'ASC'],
        ]
    });
    res.render('siswa/siswa', {
        daftarSiswa,
        title : "Daftar Siswa"
    })
}

export const siswaCreate = async (req, res) => {
    // console.log(daftarKelas);
    res.render('siswa/create', {
        daftarKelas : daftarKelas.sort(),
        title : "Form tambah data siswa" 
    })
}


export const siswaStore = async(req, res) => {
    const {nis, nama, kelas, gender } = req.body;
    console.log(req.body);

    try {
        const results = await Siswa.findAll(
            {
                where : {
                    [Op.or] : [
                        { nis : nis },
                        { nama : nama },
                    ]
                } 
                
            }
        )

        if(results.length){
            return res.status(403).json({massage : "Siswa sudah ditambahakan"});
        }
        await Siswa.create({nis, nama, kelas, gender, createdAt : new Date(), updatedAt : new Date()})

        return res.status(201).redirect('/')
    } catch (error) {
        console.log(error);
        res.status(500).json({massage : "Internal server error"})
    }
}