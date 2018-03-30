var os = require('os');
var colors = require('colors');
var time = require('./timeformat');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:'.black.bgGreen, type);
    console.log('Release:'.red, release);
    console.log('CPU model:'.magenta, cpu);
    console.log('Uptime: ~'.green, time.timeformat(uptime));
    console.log('User name:'.yellow, userInfo.username);
    console.log('Home dir:'.white, userInfo.homedir);
}

exports.print = getOSinfo;
