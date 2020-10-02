const repeatString = function(phrase, count) {
    var out = "";
    
    for(; count > 0; count--){
            out += phrase;
    }
    
    return out;
}

module.exports = repeatString
