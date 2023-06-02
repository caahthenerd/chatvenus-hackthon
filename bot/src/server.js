import { create } from 'venom-bot';


import mysql from 'mysql2';

create({
  session: 'store',
  multidevice: true,
  headless: "new",
  disableSpins: true,
  autoClose: 0,
  logQR: true,
  createPathFileToken: true,

}, (browser, waPage) => {
  console.log('Browser PID:', browser.process().pid);
  waPage.screenshot({ path: 'screenshot.png' });
})
  .then((client) => start(client))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

function start(client) {
  client.onMessage((message) => {
    // Configurações de conexão com o banco de dados
    const connection = mysql.createConnection({
      host: '192.168.0.111',
      user: 'user',
      password: 'pass'
    });

    let queryResults = null; // Variável para armazenar os resultados da consulta

    // Executa a consulta
    connection.query(`SELECT * FROM api.tb_contatos where id_user = ${message.content}`, function (error, results, fields) {
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


        if ((numbers.length) > 0) {
          //vocês vão comentar o que tá dentro do bloco if (!message.isGroupMsg) { } e colocar esse codigo aqui:

          numbers.forEach((number) => {
            const formattedNumber = `${number}@c.us`;
            client
              .sendText(formattedNumber, `🚨 *${queryResults[0].nome_contato} está em perigo!* 🚨\n\n Eu sou o chat seguro de chamado de urgência contra violência! ${queryResults[0].nome_contato} está sobre risco!`)
              .then((result) => {
                console.log('Result: ', result); //return object success
              })
              .catch((error) => {
                console.error('Error when sending: ', error); //return object error
              });

            client
              .sendLocation(formattedNumber, '-12.2463093', '-38.9652404', '🚨 LOCALIZAÇÃO DA VÍTIMA 🚨')
              .then((result) => {
                console.log('Result: ', result); //return object success
              })
              .catch((error) => {
                console.error('Error when sending: ', error); //return object error
              });
          });


          client.sendText(message.from, 'Pedido realizado com sucesso! estamos a caminho!').then(() => {
            console.log('Message sent.');
          }).catch(error => console.error('Error when sending message', error));


        }
        else {
          switch (message.content) {


            case '1':
              client
                .sendImage(
                  message.from,
                  './assets/image/doc270523.jpg',
                  'image-name',
                  'Cárdapio!'
                )
                .then((result) => {
                  console.log('Result: ', result); //return object success
                })
                .catch((erro) => {
                  console.error('Error when sending: ', erro); //return object error
                });
              break;



            default:
              var menu = '👋🏾 Olá, como vai? \n\nEu sou o Vênus delivery, o *assistente virtual*. \n\n*Posso te ajudar?* 🤖 \n\n*-----------------------------------*\n*Escreva a opção correta que lhe disponibiliza auxílio*\n\n1 - ``` Pratos da casa!``` ';
              client.sendText(message.from, menu).then(() => {
                console.log('Message sent.');
              }).catch(error => console.error('Error when sending message', error));




              break;
          }
        }

      } else {
        switch (message.content) {


          case '1':
            client
              .sendImage(
                message.from,
                './assets/image/doc270523.jpg',
                'image-name',
                'Cárdapio!'
              )
              .then((result) => {
                console.log('Result: ', result); //return object success
              })
              .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
              });
            break;



          default:
            var menu = '👋🏾 Olá, como vai? \n\nEu sou o Vênus delivery, o *assistente virtual*. \n\n*Posso te ajudar?* 🤖 \n\n*-----------------------------------*\n*Escreva a opção correta que lhe disponibiliza auxílio*\n\n1 - ``` Pratos da casa!``` ';
            client.sendText(message.from, menu).then(() => {
              console.log('Message sent.');
            }).catch(error => console.error('Error when sending message', error));




            break;
        }
        console.log('A consulta ainda não foi concluída.');
      }
    }, 1000); // Espera 1 segundo para verificar os resultados


  });
};

