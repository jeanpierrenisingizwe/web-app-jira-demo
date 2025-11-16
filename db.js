// db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE users (id INT, name TEXT)");
    db.run("INSERT INTO users VALUES (1, 'Alice')");
});

module.exports = db;
