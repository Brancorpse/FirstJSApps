// testando comandos do node


function sayHello(name) {
    console.log('Hello ' + name);
}


sayHello('Mosh'); // módulo global
// aprendendo módulos de OS, file system, events e http
// todas as variáveis e funções globais podem ser acessadas pelo objeto window
// ou seja, variáveis locais não vão para o objeto global, conforme abaixo:

var message = '';
console.log(global.message);

// sempre evite criar variáveis globais. Crie módulos

// todo arquivo em node tem pelo menoos um módulo principal
//  no caso, o arquivo app.js
// Em node, todas as variáveis e funções de um arquivo/módulo só pertencem a ele

// chamando o módulo logger neste módulo
// é boa prática armazenar módulo em constantes, em vez de variáveis
// para evitar de rescrever acidentalmente um valor

//const log = require('./logger');

//log('message');

// chamando módulo path da biblioteca node, que puxa informações dos arquivos

const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
 

// chamando módulo OS, que provê várias funções de sistema operacional

const os = require('os');
const { fstat } = require('fs');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

// ES6 ou ES2015 é a versão mais recente de javascript, que vem com o padrão abaixo:

// usando módulo os para mostrar total de memória e memória livre do pc
console.log(`Total Memóry> ${totalMemory}`);
console.log(`Free Memóry> ${freeMemory}`);

// Módulo File System para mostrar arquivos na pasta de trabalho
 const files = fs.readdirSync('./');
console.log(files);
fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err);
    else console.log('Result ', files);
});

// módulo HTTP para criar webserver

const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url ===  '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');

// não usaremos no mundo real este módulo