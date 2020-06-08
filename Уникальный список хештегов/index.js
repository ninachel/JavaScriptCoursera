/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    hashtagsLC = hashtags.map(function (x) {
        return x.toLowerCase();
        });
    var result = [];
    for (var i = 0; i < hashtagsLC.length; i++) {
        var hashtag = hashtagsLC[i];
        if (result.indexOf(hashtag) == -1) {
            result.push(hashtag);
        }
    }
    return result.join(', ');
}
