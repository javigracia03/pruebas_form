module.exports = function connectDB(){
    const { Client } = require('pg');
    const client = new Client({
        user: 'your-username',
        host: 'dpg-cfoumtqrrk0fd9qhej20-a',
        database: 'form_data',
        password: 'te8xfzuhOg3wmPvznjubHllEdrOfYIFx',
        port: 5432, // default PostgreSQL port
      });
      client.connect();
      client.query('SELECT * FROM users', (err, res) => {
        if (err) {
          console.error(err);
        } else {
          console.log(res.rows);
        }
      });
      client.end();

      
}