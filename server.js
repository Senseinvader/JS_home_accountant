"strict mode"

const hapi = require('hapi');
const pg = require('pg');

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

// const connectionString = 'postgresql://postgres:dima1234@localhost:5432/accountantDB';
//   const Client = pg.Client;
//   const client = new Client({connectionString: connectionString});
//   client.connect();
// client.query('SELECT * FROM categories', (err, res) => {
//   console.log(err, res);
//   client.end();
// });

init();