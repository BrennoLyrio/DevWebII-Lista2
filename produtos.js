var con = require('./db2'); //Estou importando a conexão com o banco de dados

var produtos = [
    ['Caneca', 10.99, 1],  
    ['Brinquedo', 50.00, 2],
    ['Mouse', 30.00, 3],
    ['Controle', 200.00, 4],
    ['Copo', 12.00, 1]
];

var produto = "INSERT INTO PRODUTOS (prod_nome, prod_preco, for_cod) VALUES ?";

con.query(produto, [produtos], function(err, result) {
    if (err) throw err;
    console.log("Número de registros inseridos: " + result.affectedRows)
})