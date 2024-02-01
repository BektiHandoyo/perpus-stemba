'use strict';
import { daftarKelas } from "../utils/daftarKelas.js";
import * as faker from "@faker-js/faker/locale/id_ID";
import { generateRandom } from "../utils/generateRandom.js";

const gender = ['Laki-laki', 'Perempuan'];


/** @type {import('sequelize-cli').Migration} */
export const up = async (queryInterface, Sequelize) => {
    const daftarSiswa = [];
    for (let i = 0; i < 15; i++) {
        let currentGender = gender[Math.ceil(Math.random() * gender.length - 1)]
        daftarSiswa.push({
            nis : '22411' + generateRandom(1001, 9998),
            gender : currentGender,
            nama : `${faker.faker.person.firstName({sex : currentGender})} ${faker.faker.person.lastName({sex : currentGender})}`,
            kelas : daftarKelas[Math.ceil(Math.random() * daftarKelas.length - 1)],
            createdAt : new Date(),
            updatedAt : new Date(),
            
        })
    }
    await queryInterface.bulkInsert('Siswa', daftarSiswa)
}

export const down = async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Siswa', null, {});
}

// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert ('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
