'use strict';
import Siswa from "../models/SiswaModel.js";
import formatDate from "../utils/formatDate.js";


/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
  const daftarHadir = [];  
  const daftarNIS = await Siswa.findAll({
      attributes : ['nis']
  }); 
 
  daftarNIS.forEach(nis => {
    let tanggal = formatDate(new Date()) ;
    daftarHadir.push({
      siswa : nis.dataValues.nis,     
      tanggal : new Date(tanggal),
      createdAt : new Date(),
      updatedAt : new Date()
    });
  })
  console.log(daftarHadir);
  await queryInterface.bulkInsert('DaftarHadir', daftarHadir)
    // for (let i = 0; i < 15; i++) {
    //     let currentGender = gender[Math.ceil(Math.random() * gender.length - 1)]
    //     daftarSiswa.push({
    //         nis : '22411' + generateRandom(1001, 9998),
    //         gender : currentGender,
    //         nama : `${faker.faker.person.firstName({sex : currentGender})} ${faker.faker.person.lastName({sex : currentGender})}`,
    //         kelas : daftarKelas[Math.ceil(Math.random() * daftarKelas.length - 1)],
    //         createdAt : new Date(),
    //         updatedAt : new Date(),
            
    //     })
    // }
}

export const down = async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('DaftarHadir', null, {});
}