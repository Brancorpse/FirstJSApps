// criando novo módulo para a aplicação
// módulo será reusado em várias partes desta aplicação
// Eventos mostra que algo está acontecendo em nosso app
// o módulo EventEmitter é na verdade, uma classe

const EventEmitter = require('events');
// instanciando objeto da classe citada

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //Send an ATTP reaquest
        console.log(message);

        // enviando dados sobre o evento, encapsulando-os em um objeto
        this.emit('messageLogged', { id: 1, url: 'http://' });
    } 
}

// tornando a função pública para ser usada em outros módulos
//  é possível exportar somente a função, em vez de um objeto
// exportando a classe

module.exports = Logger;



