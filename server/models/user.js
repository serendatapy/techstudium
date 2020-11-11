// Importing the neccessary files
const db = require('../dbConnection');

exports.getAll = async () => {
  const res = await db.query(
    `SELECT * FROM ${global.gConfig.mysql.tables.user} WHERE 1;`,
    function (error, results, fields) {
      if (error) throw error;
      console.log('The solution is: ', results[0].solution);
    }
  );

  console.log(res);
  return res.rows;
}

exports.getOne = async () => {};
exports.postOne = async () => {};