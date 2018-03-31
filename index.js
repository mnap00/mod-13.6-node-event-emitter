//var event = require('events');
//var EventEmitter = event.EventEmitter;
var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSinfo');

var emitter = new EventEmitter();
emitter.on('beforeCommand', function(instruction) {
    console.log('You wrote: ' + instruction + ' trying to run command.');
});
emitter.on('afterCommand', function() {
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.trim();
        emitter.emit('beforeCommand', instruction);
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/ver':
                var version = process.versions.node;
                process.stdout.write(version + '\n');
                break;
            case '/lang':
                var language = process.env.LANG;
                process.stdout.write(language + '\n');
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
        emitter.emit('afterCommand');
    }
});
