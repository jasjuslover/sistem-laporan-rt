'use strict';

const response = require('./res');
const connection = require('./conn');
const moment = require('moment');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.index = function (req, res) {
  response.ok("Hello World!", res);
};

exports.postReport = function (req, res) {
  if (req) {
    const {
      name,
      address,
      photo_url,
      phone,
      province_id,
      city_id,
      district_id,
      village_id
    } = req.body;
    if (name && address && photo_url && phone && province_id && city_id && district_id && village_id) {
      connection.query(
        `INSERT INTO report(
          name, address, photo_url, phone, province_id, city_id, district_id, village_id, created_at
        ) VALUES (
          '${name}', '${address}', '${photo_url}', '${phone}', ${province_id},
          ${city_id}, ${district_id}, ${village_id}, '${moment(new Date()).format("YYYY-MM-DD HH:mm:ss")}'
        )`,
        function (err, rows, _) {
          if (err) {
            response.error(500, err, res);
            return;
          }
          response.ok('Berhasil buat laporan. Pak RT akan konfirmasi apabila laporan di terima. Terima Kasih!', res);
        }
      )
    } else {
      console.log(req);
      response.error(500, 'Field tidak boleh kosong', res);
    }
  } else {
    response.error(500, 'Serverside error', res);
  }
}