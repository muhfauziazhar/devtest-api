const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dev_test114",
});

connection.connect(function () {
    console.log("Database connected");
});

module.exports = connection;
