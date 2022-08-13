//  Chamando método logger para execução de eventos 
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

//registrando um ouvinte
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');


















