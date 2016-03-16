var express = require('express');
var router = express.Router();
var pg = require('pg');

// var connectionString;
//
// if(process.env.DATABASE_URL) {//connecting to outside heroku database
//   pg.defaults.ssl = true;
//   connectionString = process.env.DATABASE_URL;
// } else{//connecting to local database before being connected to heroku for testing purposes
//   connectionString = 'postgress://localhost:5432/patroni_assigner';
// }

// pg.connect(connectionString, function(err, client, done){
//   if (err){
//     console.log("Error connecting to DB!", err);
//   } else {
//     var query = client.query('CREATE TABLE IF NOT EXISTS tbl_patroni (' +
//                               'patronus_id SERIAL PRIMARY KEY,' +
//                               'patronus_name varchar(20) NOT NULL );' +
//                               'CREATE TABLE IF NOT EXISTS tbl_people (' +
//                               'person_id SERIAL PRIMARY KEY,' +
//                               'first_name varchar(20) NOT NULL,' +
//                               'last_name varchar(20) NOT NULL,' +
//                               'patronus_id integer FOREIGN KEY REFERENCES tbl_patroni(patronus_id));');
//   }
//
//   query.on('end')
//
// });

module.exports = router;
