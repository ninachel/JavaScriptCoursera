/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var newhours = hours + Math.floor((minutes + interval) / 60),
        newminutes = (minutes + interval) % 60;

    if (newhours >= 24) {
        newhours = Math.floor(newhours % 24);
    }
    if (newhours >= 0 && newhours <= 23 && newminutes >= 0 && newminutes <= 59) {
        if (newhours < 10) {
            if (newminutes < 10) {
                return '0' + newhours + ':0' + newminutes;
            } else {
                return '0' + newhours + ':' + newminutes;
            }
        } else {
            if (newminutes < 10) {
                return newhours + ':0' + newminutes;
            } else {
                return newhours + ':' + newminutes;
            }
        }
    }
};
