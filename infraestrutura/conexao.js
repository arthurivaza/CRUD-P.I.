const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'controle_estoque' 
});

module.exports = conexao;
console.log(conexao);