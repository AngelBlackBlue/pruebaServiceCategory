require('dotenv').config();
const server = require('./src/server');
const { conn } = require('./src/database/index');
const { PORT } = process.env;



server.listen(PORT, () => {

  console.log(`Server on port: ${PORT}`)

  conn.sync({ force: false});

});
