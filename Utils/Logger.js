const opts = {
    errorEventName:'error',
        logDirectory:'/../public/logfiles', // NOTE: folder must exist and be writable...
        fileNamePattern:'ExportLog-<DATE>.log',
        dateFormat:'YYYY.MM.DD'
};
const log = require('simple-node-logger').createRollingFileLogger( opts );

module.exports = log;


