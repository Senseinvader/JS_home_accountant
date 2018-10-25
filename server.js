"strict mode"

const hapi = require('hapi');
// const pg = require('pg');
const mongoose = require('mongoose');


//Create server connection
const server = hapi.server({
  port : 8000,
  host : 'localhost'
});

const init = async () => {
  server.route({
    method : 'GET',
    path : '/',
    handler : function(request, reply) {
      return `<h1>Helloo!</h1>`;
    }
  })

  await server.start();
  console.log(`server runs at: ${server.info.uri}`);
};
init();

//Create connection to MongoDB database
mongoose.connect('mongodb://localhost/accountant');

mongoose.connection.once('open', function() {
  console.log('DB connection has been established');
}).on('error', function(error) {
  console.log('Connection error: ', error);
});

// const connectionString = 'postgresql://postgres:dima1234@localhost:5432/accountantDB';
//   const Client = pg.Client;
//   const client = new Client({connectionString: connectionString});
//   client.connect();
// client.query('SELECT * FROM categories', (err, res) => {
//   console.log(err, res);
//   client.end();
// });

