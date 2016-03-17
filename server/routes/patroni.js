var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString;

if(process.env.DATABASE_URL) {//connecting to outside heroku database
  pg.defaults.ssl = true;
  connectionString = process.env.DATABASE_URL;
} else{//connecting to local database before being connected to heroku for testing purposes
  connectionString = 'postgress://localhost:5432/patroni_assigner';
}




router.post("/*", function(req,res){

  console.log("totally patroni routoni");
  var patronus_name = req.body.patronus_name;

  pg.connect(connectionString, function(err, client, done){
    if (err){
      console.log('error connecting to DB:', err);
      res.status(500).send(err);
      done();
      return;

    }
    var query = client.query('INSERT INTO tbl_patroni (patronus_name) VALUES ($1);',[patronus_name]);

    query.on('end', function(){
      done();
    });

    query.on('error', function(error){
      console.log("error inserting patronus into DB:", error);
      res.status(500).send(error);
      done();

    });


  })


  res.send("you got to patroni champ");

});











module.exports = router;
