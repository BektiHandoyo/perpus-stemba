import express from "express";
import { siswaCreate, siswaIndex, siswaShow, siswaStore } from "../controller/Siswa.js";
import { daftarHadirAdd, daftarHadirIndex } from "../controller/DaftarHadir.js"

const router = express.Router();

router.get('/', (req, res) => {
    res.render('default', {
        title : 'Home Page Perpus STEMBA'
    })
})
router.get('/siswa', siswaIndex);
router.get('/siswa/tambah', siswaCreate);
router.post('/siswa', siswaStore);
router.get('/siswa/daftar', siswaShow)
router.get('/daftar/:tanggal', daftarHadirIndex);
router.post('/daftar', daftarHadirAdd)

export default router;