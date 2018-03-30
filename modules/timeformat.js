function timeFormat(time) {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time % 3600 / 60);
    var seconds = Math.floor(time % 3600 % 60);
    if (time > 3599) {
        return hours + 'h ' + minutes + 'm ' + seconds + 's';
    } else if (3600 > time && time > 59) {
        return minutes + 'm ' + seconds + 's';
    } else {
        return seconds + 's';
    }
}

exports.timeformat = timeFormat;
