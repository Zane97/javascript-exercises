const reverseString = function(word) {
    var out = "";
    
    var i = 0;
    for (i = word.length - 1; i >= 0; i--)
        out += word[i];
    
    return out;
}

module.exports = reverseString
