var log4js = require('log4js');
var logger = log4js.getLogger();
logger.level = 'debug';
logger.debug("Some debug messages");

const filename = __dirname + '/logs/all-the-logs.log'
console.log(__dirname)

// log4js.configure({
//     appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
//     categories: { default: { appenders: ['cheese'], level: 'error' } }
// });

// Example (default daily log rolling)
// log4js.configure({
//     appenders: {
//         everything: { type: 'dateFile', filename: filename }
//     },
//     categories: {
//         default: { appenders: [ 'everything' ], level: 'debug' }
//     }
// });

// Example with hourly log rolling (and compressed backups)
// log4js.configure({
//     appenders: {
//         everything: { type: 'dateFile', filename: filename, pattern: '.yyyy-MM-dd-hh-mm-ss', compress: true }
//     },
//     categories: {
//         default: { appenders: [ 'everything' ], level: 'debug'}
//     }
// });

// log4js.configure({
//     appenders: {
//         'email': {
//             type: 'smtp',
//             SMTP: {
//                 host: 'smtp.exmail.qq.com',
//                 port: 25,
//                 auth: {user:'wu.min@qianka.com', pass: 'Wumin123321'}
//             },
//             recipients: 'wuminqinglewuhen@sina.com',
//             subject: 'test attachments',
//             sender: 'wu.min@qianka.com',
//             attachments: {
//                 enable: true,
//                 filename: 'latest.log',
//                 message: 'See the attachment for the latest logs'
//             },
//             sendInterval: 30
//         }
//     },
//     categories: { default: { appenders: ['email'], level: 'ERROR' } }
// });

log4js.configure({
    appenders: {
        logstash: {
            type: 'logstashUDP',
            host: '127.0.0.1',
            port: '12345',
            logType: 'application'
            // fields: { biscuits: 'digestive', tea: 'tetley', user: function(logEvent) {
            //     return 'admin';
            // }
            // }
        }
    },
    categories: {
        default: { appenders: ['logstash'], level: 'info' }
    }
});

logger = log4js.getLogger('logstash');
logger.info("important log message");

logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');