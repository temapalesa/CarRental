const pool = require('../../config/dbConfig');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM public.users ORDER BY id ASC ', (error, results) => {
      res.status(200).send(results.rows)
    })
}


module.exports = {
  getUsers
}