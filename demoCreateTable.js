var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "myusername",
    password:"password",
    database:"mydb"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected");
    con.query("CREATE DATABASE mydb", function(err, result){
        if (err) throw err;
        console.log("Database created");
    });
    if (err) throw err;
    console.log("connected");
    var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    con.query(sql,function(err, results){
        if (err) throw err;
        console.log("Table created");
    });
});