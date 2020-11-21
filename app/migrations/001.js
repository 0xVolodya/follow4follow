import db from "../db";

module.exports = async function () {
  await dropAllTables()
  await createUsersTable()
}

async function dropAllTables() {

  var query = 'drop TABLE if exists users';
  await db.query(query);

}

async function createUsersTable() {

  var query = '\n' +
    'create table if not EXISTS users\n' +
    '(id SERIAL PRIMARY KEY,\n' +
    'email VARCHAR(100) UNIQUE NOT null,\n' +
    'password VARCHAR(100) NOT null,\n' +
    'created_on DATE not null\n' +
    ');\n';


  await db.query(query);
}
