var con = require("./db2"); //A gente está importando a conexão

var fornecedores = [
    ["José"],
    ['João'],  
    ['Maria'],  
    ['Fernando']
];

var query = "INSERT INTO fornecedor (for_nome) VALUES ?"

con.query(query, [fornecedores], function(err, result) {
    if (err) throw err;
    console.log("Número de fornecedores inseridos: " + result.affectedRows);
});