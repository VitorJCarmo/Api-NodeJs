
const Pool = require('pg').Pool

const pool = new Pool({

  user: 'postgres',

  host: 'localhost',

  database: 'article11',

  password: 'root',

  port: 5432,

})


const getArticles = (request, response) => {

    pool.query('SELECT * FROM articles ORDER BY id ASC', (error, results) => {
  
      if (error) {
  
        throw error
  
      }
  
      response.status(200).json(results.rows)
    })
  
  }

const getArticleById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * articles WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  
module.exports = {

    getArticles,
  
    getArticleById,
  
    /*createUser,
  
    updateUser,
  
    deleteUser,*/
  
  }