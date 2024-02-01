
// let buah = new Object();
// buah["nama"] = "Mangga";
// buah["warna"] = "Hijau";
// buah["harga"] = 5000;

// let buahLiteral = {
//     nama : "Jeruk",
//     warna : "Orange",
//     harga : 2000
// }
// console.log(buahLiteral.nama);

// delete buah.nama;
// delete buahLiteral["nama"];

// console.log(buah);
// console.log(buahLiteral);

// let umur = 19;
// if(umur >= 17){
//     console.log("Sudah Dewasa");
// } else {
//     console.log("Belum Dewasa");
// }

// let nilai = 10;
// switch (true) {
//     case nilai < 60:
//       console.log('Kamu mendapat E');
//       break;
//     case nilai < 70:
//       console.log('Kamu mendapat D');
//       break;
//     case nilai < 80:
//       console.log('Kamu mendapat C');
//       break;
//     case nilai < 90:
//       console.log('Kamu mendapat B');
//       break;
//     default:
//         console.log('Kamu mendapat A');
// }

import Siswa from "../models/SiswaModel.js";
import DaftarHadir from "../models/DaftarHadirModel.js";

const tanggal = new Date('2024-01-28')

async function test(){
  const results = await DaftarHadir.findAll({
    where : {
        tanggal,
    }
  });
  // results.forEach(data => console.log(data.dataValues))

}

test();