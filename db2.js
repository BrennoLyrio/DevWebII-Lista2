var mysql = require('mysql2')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lyrio_2005",
    database: "atividade2"
})

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Conectado!");
//     con.query("CREATE DATABASE IF NOT EXISTS atividade2", function (err, result) {
//         if(err) throw err;
//         console.log("Banco de dados Criado!")
//     });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Conectado!");
//     var fornecedor = "CREATE TABLE IF NOT EXISTS fornecedor (for_cod int auto_increment primary key, for_nome varchar(30))"
//     con.query(fornecedor, function(err, result){
//         if (err) throw err;
//         console.log("Tabela criada")
//     });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Conectado!");
//     var produtos = "CREATE TABLE IF NOT EXISTS produtos (prod_cod int auto_increment primary key, prod_nome varchar(30), prod_preco decimal(8,2), for_cod int, Foreign Key (for_cod) references fornecedor(for_cod))"
//     con.query(produtos, function(err, result){
//         if (err) throw err;
//         console.log("Tabela criada")
//     });
// });

con.connect(function(err) {
    if (err) throw err;
    con.query(`SELECT f.for_nome, COUNT(p.prod_cod) AS quantidade 
        from fornecedor f left join produtos p on f.for_cod=p.for_cod 
        group by f.for_cod, f.for_nome;`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    })
})

con.connect(function(err) {
    if (err) throw err;
    con.query(`SELECT p.prod_preco, f.for_nome from fornecedor f right join produtos p 
        on f.for_cod=p.for_cod where p.prod_preco > 20.00`, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    })
})

module.exports = con;
