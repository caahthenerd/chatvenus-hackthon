import mysql from 'mysql2';


// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: '192.168.0.111',
  user: 'user',
  password: 'pass'
});

let queryResults = null; // Variável para armazenar os resultados da consulta

// Executa a consulta
connection.query(`SELECT * FROM api.tb_contatos where id_user = ${1565}`, function(error, results, fields) {
  if (error) {
    console.error('Erro ao executar a consulta: ', error);
    return;
  }

  connection.end();

  results.forEach((result) => {
    // Acesso aos campos do resultado
    const id_user = result.id_user;
    const numero = result.numero;
    const nome_contato = result.nome_contato;
    const mensagem = result.Mensagem;
  
    // Fazer algo com os dados de cada resultado
    console.log(`ID: ${id_user}`);
  });

  queryResults = results; // Atribui os resultados à variável queryResults
});

// Acesso aos resultados fora do callback
setTimeout(() => {
  if (queryResults) {
    const numbers = queryResults.map((result) => result.numero); // Extrai os números de cada resultado
    console.log('Lista de Números:', numbers);
  } else {
    console.log('A consulta ainda não foi concluída.');
  }
}, 1000); // Espera 1 segundo para verificar os resultados
