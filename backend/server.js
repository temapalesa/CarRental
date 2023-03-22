const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const routes = require('./app/routes/router');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'CarRental',
  password: 'Letsdoit!',
  port: 5432,
})


app.get('/', (req, res) => {
    pool.connect((err, client, done) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ success: false, data: err });
        }
        client.query('SELECT NOW()', (err, result) => {
            done();
            if (err) {
                console.log(err);
                return res.status(500).json({ success: false, data: err });
            }
            return res.status(200).json({ success: true, data: result });
        });
    });
});

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })

app.use('/', routes);