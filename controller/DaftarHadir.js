import DaftarHadir from "../models/DaftarHadirModel.js";
import Siswa from "../models/SiswaModel.js";
import formatDate from "../utils/formatDate.js"

export const daftarHadirIndex = async(req, res) => {
    const tanggal = new Date(req.params.tanggal);

    // console.log(tanggal);

    if(tanggal == "Invalid Date"){
        return res.status(403).json({message : "format tanggal tidak valid"})
    }

    try {
        const daftarHadirHariItu = await DaftarHadir.findAll({
            where : {
                tanggal,
            }, 
        })

        const results = [];

        for (let daftarHadir of daftarHadirHariItu) {
            let siswa = await Siswa.findOne({where : {nis : daftarHadir.dataValues.siswa}, attributes : ['nama', 'kelas']})
            daftarHadir.dataValues.nama = siswa.dataValues.nama;
            daftarHadir.dataValues.kelas = siswa.dataValues.kelas;
            let currentDaftarHadir = JSON.parse(JSON.stringify(daftarHadir.dataValues));
            // currentDaftarHadir.dataValues.nama = siswa.dataValues.nama;
            results.push(currentDaftarHadir);
        }

        res.render('daftar-hadir/index', {
            title : 'Daftar Hadir Siswa',
            daftarHadir : results,
            date : formatDate(tanggal),
            batasTanggal : formatDate(new Date())
        });


    } catch (error) {
        res.status(500).json({message : 'Internal Server Problem'})
    }
} 

export const daftarHadirAdd = async(req, res) => {
    const { nis } = req.body
    try {
        const siswa = await Siswa.findOne({
            where : {
                nis : nis
            }
        })
        if(Object.keys(siswa.dataValues).length == 0 ){
            return res.status(404).json({message : "Siswa Tidak ditemukan"})
        } 

        const todayDate =  new Date();

        await DaftarHadir.create({
            siswa : nis,
            tanggal : formatDate(todayDate),
            updatedAt : todayDate,
            createdAt : todayDate,
        })

        res.status(201).json({message : "berhasil di tambahkan", nama : siswa.dataValues.nama})
    } catch (error) {
        console.log(error);
        res.status(500).json({message : "Internal Server Error"})       
    }
}