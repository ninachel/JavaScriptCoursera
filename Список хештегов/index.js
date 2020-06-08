/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var words = tweet.split(' '),
        result = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.startsWith('#')) {
            result.push(word.slice(1));
        }
    }
    return result;
};
