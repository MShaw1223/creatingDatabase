var mySQL = require('mysql');

var con = mySQL.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
});